import BaseAssistant from 'modules/assistant/BaseAssistant'
import ProcessTypes from 'modules/app/enum/ProcessTypes'
import SessionUtils from 'modules/library/utils/SessionUtils'
import ISO from 'modules/app/ISO'
import {BrowserWindow, ipcMain, ipcRenderer, remote} from 'electron'
import ActionData from 'modules/action/ActionData'
import Counter from 'modules/library/unit/Counter'
import WindowPropertys from 'modules/app/enum/WindowPropertys'

const IPC_ACTION = 'ipcAction'
const IPC_ACTION_COMPLETE = 'ipcActionComplete'

class ActionAssistant extends BaseAssistant {
  sessionDict = {}
  counter = new Counter()
  actionDict = {}
  constructor () {
    super()
    let receiveAction = this.receiveAction.bind(this)
    let receiveResult = this.receiveResult.bind(this)
    if (ISO.processType === ProcessTypes.MAIN) {
      ipcMain.on(IPC_ACTION, receiveAction)
      ipcMain.on(IPC_ACTION_COMPLETE, receiveResult)
    } else {
      ipcRenderer.on(IPC_ACTION, receiveAction)
      ipcRenderer.on(IPC_ACTION_COMPLETE, receiveResult)
    }
  }
  globalRegist () {
    global.run = this.run.bind(this)
  }
  async receiveAction (ipcEvent, actionData) {
    let action = ActionData.action(actionData)
    let data = ActionData.data(actionData)
    let session = ActionData.session(actionData)
    let fromProcess = ActionData.process(actionData)
    let result = await this.executeAction(action, data)
    // console.log('action执行', action, data, result)
    let resultActionData = ActionData.create(action, result, session, fromProcess)
    if (fromProcess === ProcessTypes.MAIN) {
      this.complete2Main(resultActionData)
    } else {
      this.complete2Renderer(ipcEvent, resultActionData)
    }
  }
  receiveResult (ipcEvent, actionData) {
    let result = ActionData.data(actionData)
    let session = ActionData.session(actionData)
    this.resolveResult(session, result)
  }
  regist (action, ActionClass) {
    let processType = this.getProcessType(action)
    if (processType !== ISO.processType) {
      console.error(`在${ISO.processType}进程无法注册${action}`)
      return
    }
    this.actionDict[action] = new ActionClass()
  }
  takeAction (action) {
    return this.actionDict[action]
  }
  async executeAction (action, data) {
    let actionHandler = this.takeAction(action)
    if (!actionHandler) {
      ISO.isDebug && console.error(`无法解析的ActionType:${action}`)
      return null
    }
    let re = await actionHandler.response(data)
    ISO.isDebug && this.counter.add(action)
    return re
  }
  getProcessType (action) {
    if (action.startsWith(ProcessTypes.MAIN)) {
      return ProcessTypes.MAIN
    } else if (action.startsWith(ProcessTypes.GUI)) {
      return ProcessTypes.GUI
    } else if (action.startsWith(ProcessTypes.LOGIC)) {
      return ProcessTypes.LOGIC
    } else {
      return null
    }
  }
  resolveResult (session, result) {
    let resolve = this.sessionDict[session]
    delete this.sessionDict[session]
    resolve(result)
  }
  async run (action, data, win = null) {
    return new Promise(async (resolve) => {
      let session = SessionUtils.take()
      this.sessionDict[session] = resolve
      // console.log('执行了action', action)
      let actionType = this.getProcessType(action)
      if (actionType === ISO.processType) {
        let result = await this.executeAction(action, data)
        this.resolveResult(session, result)
      } else if (win && win instanceof BrowserWindow) {
        this.send2Window(win, action, data, session)
      } else if (actionType === ProcessTypes.MAIN) {
        this.send2Main(action, data, session)
      } else if (ISO.processType !== ProcessTypes.MAIN) {
        this.send2Renderer(action, data, session)
      } else {
        console.error(`一个无法发送的动作 ${action}`)
      }
    })
  }

  send2Window (win, action, data, session) {
    let actionData = ActionData.create(action, data, session, ISO.processType)
    win.webContents.send(IPC_ACTION, actionData)
  }

  send2Main (action, data, session) {
    let actionData = ActionData.create(action, data, session, ISO.processType)
    ipcRenderer.send(IPC_ACTION, actionData)
  }
  send2Renderer (action, data, session) {
    // console.log('发送到了Renderer', action)
    let current = remote.getCurrentWindow()
    let ipcId = current[WindowPropertys.IPC_ID]
    let win = remote.BrowserWindow.fromId(ipcId)
    this.send2Window(win, action, data, session)
  }
  complete2Main (actionData) {
    ipcRenderer.send(IPC_ACTION_COMPLETE, actionData)
  }
  complete2Renderer (ipcEvent, actionData) {
    if (ISO.processType === ProcessTypes.MAIN) {
      ipcEvent.sender.send(IPC_ACTION_COMPLETE, actionData)
    } else {
      let current = remote.getCurrentWindow()
      let ipcId = current[WindowPropertys.IPC_ID]
      let win = remote.BrowserWindow.fromId(ipcId)
      win.webContents.send(IPC_ACTION_COMPLETE, actionData)
    }
  }
}

export default ActionAssistant

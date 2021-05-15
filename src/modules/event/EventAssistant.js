import BaseAssistant from 'modules/assistant/BaseAssistant'
import ProcessTypes from 'modules/app/enum/ProcessTypes'
import {remote, ipcRenderer, BrowserWindow, ipcMain} from 'electron'
import IpcData from 'modules/library/data/IpcData'
import ISO from 'modules/app/ISO'
import Counter from 'modules/library/unit/Counter'
import Vue from 'vue'
import WindowPropertys from 'modules/app/enum/WindowPropertys'
import KeyList from 'modules/library/unit/KeyList'
const IPC_EVENT = 'ipc_event'
class EventAssistant extends BaseAssistant {
  counter = new Counter()
  vue = new Vue()
  hook = null
  eventDict = {}
  constructor () {
    super()
    let receiveHandler = this.receiveHandler.bind(this)
    if (ISO.processType === ProcessTypes.MAIN) {
      ipcMain.on(IPC_EVENT, receiveHandler)
    } else {
      ipcRenderer.on(IPC_EVENT, receiveHandler)
    }
  }
  globalRegist () {
    global.on = this.on.bind(this)
    global.off = this.off.bind(this)
    global.emit = this.emit.bind(this)
  }
  on (event, fn) {
    this.vue.$on(event, fn)
  }
  off (event, fn) {
    this.vue.$off(event, fn)
  }
  receiveHandler (ipcEvent, ipcData) {
    let eventType = IpcData.type(ipcData)
    let data = IpcData.data(ipcData)
    // console.log('收到Event', event)
    emit(eventType, data)
  }
  eventQueue = new KeyList()
  regist (event, EventClass) {
    let processType = this.getProcessType(event)
    if (ISO.processType !== processType) {
      console.error(`在${ISO.processType}进程无法注册${event}`)
      return
    }
    let eventHandler = new EventClass()
    let exec = async (data) => {
      ISO.isDebug && this.counter.add(event)
      let success = await eventHandler.response(data)
      this.hook && this.hook(event, success)
      if (this.eventQueue.length(event)) {
        console.warn(`执行了被延时的事件${event}`)
        exec(this.eventQueue.shift(event))
      }
    }
    on(event, async (data) => {
      if (eventHandler.locked) {
        this.eventQueue.push(event, data)
      } else {
        exec(data)
      }
    })
  }
  getProcessType (event) {
    if (event.startsWith(ProcessTypes.MAIN)) {
      return ProcessTypes.MAIN
    } else if (event.startsWith(ProcessTypes.GUI)) {
      return ProcessTypes.GUI
    } else if (event.startsWith(ProcessTypes.LOGIC)) {
      return ProcessTypes.LOGIC
    } else {
      return null
    }
  }
  emit (event, data, win = null) {
    let type = this.getProcessType(event)
    if (type === ISO.processType) {
      this.send2Me(event, data)
    } else if (win && win instanceof BrowserWindow) {
      this.send2Window(win, event, data)
    } else if (type === ProcessTypes.MAIN) {
      this.send2Main(event, data)
    } else if (type === ProcessTypes.GUI || type === ProcessTypes.LOGIC) {
      this.send2Renderer(event, data)
    } else {
      console.error(`一个无法发送的事件 ${event}`)
    }
  }
  send2Me (event, data) {
    this.vue.$emit(event, data)
  }
  send2Main (event, data) {
    ipcRenderer.send(IPC_EVENT, IpcData.create(event, data))
  }
  send2Window (win, event, data) {
    win.webContents.send(IPC_EVENT, IpcData.create(event, data))
  }
  send2Renderer (event, data) {
    let current = remote.getCurrentWindow()
    let ipcId = current[WindowPropertys.IPC_ID]
    let win = remote.BrowserWindow.fromId(ipcId)
    this.send2Window(win, event, data)
  }
}

export default EventAssistant

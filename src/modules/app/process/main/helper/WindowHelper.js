'use strict'
/**
* Author : fangtao
* Date : 8 Feb 2018
* Support : 525398535@qq.com
*/
import BaseHelper from 'modules/app/unit/BaseHelper'
import {BrowserWindow} from 'electron'
import AlertUtils from 'modules/library/utils/AlertUtils'
import ProcessTypes from 'modules/app/enum/ProcessTypes'
import SessionUtils from 'modules/library/utils/SessionUtils'
import ISO from 'modules/app/ISO'
import path from 'path'
import TimerUtils from 'modules/library/utils/TimerUtils'
import _ from 'lodash'
import WindowPropertys from 'modules/app/enum/WindowPropertys'
import AppEvents from 'modules/app/enum/AppEvents'
import WindowUtils from 'modules/app/utils/WindowUtils'
import EnvTypes from 'modules/app/enum/EnvTypes'
import fs from 'fs'
import MainEvents from 'general/enum/MainEvents'
const LAST_FOCUS = WindowPropertys.LAST_FOCUS
const IPC_ID = WindowPropertys.IPC_ID
const SESSION = WindowPropertys.SESSION
const TYPE = WindowPropertys.TYPE
class WindowHelper extends BaseHelper {
  constructor () {
    super()
    this.winList = []
    this.winURL = process.env.NODE_ENV === EnvTypes.DEVELOPMENT
      ? `http://localhost:9080`
      : `file://${__dirname}/index.html`
    this.createWindow()
  }
  getRenderers (type) {
    let re = this.winList.filter((win) => {
      if (win[TYPE] === type) {
        return true
      } else {
        return false
      }
    })
    return re
  }
  getRenderer (windowSession, type) {
    let re = this.winList.find((win) => {
      return win[TYPE] === type && win[SESSION] === windowSession
    })
    return re
  }
  /**
   * @returns {BrowserWindow}
   * @memberof WindowHelper
   */
  getGUI (windowSession) {
    return this.getRenderer(windowSession, ProcessTypes.GUI)
  }
  /**
   * @returns {BrowserWindow}
   * @memberof WindowHelper
   */
  getLogic (windowSession) {
    return this.getRenderer(windowSession, ProcessTypes.LOGIC)
  }
  /**
   * 获取孪生窗口
   */
  getTwin (win) {
    let result = this.winList.find((item) => {
      return item !== win && win[SESSION] === item[SESSION]
    })
    return result
  }
  isGUI (win) {
    return win[TYPE] === ProcessTypes.GUI
  }
  isLogic (win) {
    return win[TYPE] === ProcessTypes.LOGIC
  }
  /**
   * 获取焦点窗口
   */
  getFocus () {
    let win = BrowserWindow.getFocusedWindow()
    if (win && this.isGUI(win)) {
      return win
    } else {
      return null
    }
  }
  getLast () {
    let win = this.getFocus()
    if (!win) {
      let guiList = _.sortBy(this.getAllGUI(), LAST_FOCUS)
      win = guiList[guiList.length - 1]
    }
    return win
  }
  /**
   * @returns {Array}
   * @memberof WindowHelper
   */
  getAllGUI () {
    return this.getRenderers(ProcessTypes.GUI)
  }
  /**
   * @returns {Array}
   * @memberof WindowHelper
   */
  getAllLogic () {
    return this.getRenderers(ProcessTypes.LOGIC)
  }
  registWindow (win) {
    if (this.isGUI(win)) {
      win.on('focus', () => {
        win[LAST_FOCUS] = TimerUtils.getTimer()
      })
      win.webContents.on('did-start-loading', () => {
        let otherWindow = this.getLogic(win[SESSION])
        if (otherWindow) {
          otherWindow.webContents.reloadIgnoringCache()
        }
      })
      WindowUtils.windowReady(win[SESSION]).then(() => {
        emit(AppEvents.MAIN_WINDOW_CHANGE)
      })
    }
    win.webContents.on('did-stop-loading', () => {
      let twin = this.getTwin(win)
      let loadComplete = !twin.webContents.isLoading()
      if (loadComplete) {
        let winStartup = this.isGUI(win) ? AppEvents.GUI_STARTUP : AppEvents.LOGIC_STARTUP
        let twinStartup = this.isGUI(twin) ? AppEvents.GUI_STARTUP : AppEvents.LOGIC_STARTUP
        emit(winStartup, null, win)
        emit(twinStartup, null, twin)
      }
    })
    let type = win[TYPE]
    win.webContents.on('crashed', () => {
      let options = AlertUtils.options('info', `${win.getTitle()}渲染进程${type}崩溃`, `渲染进程${type}崩溃.`, ['重载', '关闭'])
      AlertUtils.show(options, () => {
        win.reload()
      }, () => {
        win.close()
      })
    })
    win.on('closed', () => {
      console.log('closed', win[IPC_ID])
      this.winList = this.winList.filter((item) => {
        return item !== win
      })
      let twin = this.getTwin(win)
      if (twin && !twin.isDestroyed()) {
        twin.destroy()
      }
      console.log(`winlist after:${this.winList.length}`)
      if (this.isGUI(win)) emit(AppEvents.MAIN_WINDOW_CHANGE)
      win = null
    })
    win.on('close', (event) => {
      event.preventDefault()
      // win.minimize()
      emit(AppEvents.GUI_WANT_CLOSE, null, win) // todo fang 这里绕了一大圈 可以只使用 emit(MainEvents.CLOSE_WINDOW, win[SESSION]) 但是出现了耦合
    })
    win.on('blur', event => {
      emit(MainEvents.WINDOW_HIDE)
    })
  }
  createWindowByType (type, windowSession) { // 负责渲染的窗体
    let options
    if (type === ProcessTypes.GUI) {
      options = {
        title: 'quick-search',
        width: 600,
        height: 40,
        resizable: false,
        frame: false,
        alwaysOnTop: true,
        transparent: true,
        webPreferences: {
          nodeIntegration: true,
          webSecurity: false,
          devTools: false
        }
      }
    } else {
      options = {
        title: 'LOGIC',
        width: 400,
        height: 400,
        useContentSize: true,
        show: false,
        x: 0,
        y: 0,
        webPreferences: {nodeIntegration: true}}
    }
    let win = new BrowserWindow(options)
    let curPosition = win.getPosition()
    win.setPosition(curPosition[0], curPosition[1] - 100)
    win[TYPE] = type
    win[SESSION] = windowSession
    if (ISO.isWin) {
      let winIcon = path.join(__static, 'tray', 'win', 'trayIcon.png')
      if (fs.existsSync(winIcon)) {
        win.setIcon(winIcon)
      }
    }
    this.winList.push(win)
    win.loadURL(this.winURL)
    this.registWindow(win)
    return win
  }
  createWindow () {
    let windowSession = SessionUtils.take()
    let guiWindow = this.createWindowByType(ProcessTypes.GUI, windowSession)
    let logicWindow = this.createWindowByType(ProcessTypes.LOGIC, windowSession)
    guiWindow[IPC_ID] = logicWindow.id
    logicWindow[IPC_ID] = guiWindow.id // todo fang w1.webContents.getOSProcessId() 是进程id 不过如果affinity相同时无效
    return windowSession
  }
}

export default WindowHelper

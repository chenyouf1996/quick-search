'use strict'
/**
* Author : fangtao
* Date : 8 Mar 2018
* Support : 525398535@qq.com
*/
import BaseEvent from 'modules/event/BaseEvent'
import MainFacade from 'modules/app/process/main/MainFacade'
class ActivateWindowMevt extends BaseEvent {
  execute (windowSession = null) {
    let win = null
    if (windowSession) {
      win = MainFacade.getInstance().windowHelper.getGUI(windowSession)
    } else {
      win = MainFacade.getInstance().windowHelper.getLast()
    }
    if (win) {
      win.show()
    } else {
      MainFacade.getInstance().windowHelper.createWindow()
    }
  }
}

export default ActivateWindowMevt

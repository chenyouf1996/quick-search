'use strict'
/**
* Author : fangtao
* Date : 8 Mar 2018
* Support : 525398535@qq.com
*/
import BaseEvent from 'modules/event/BaseEvent'
import MainFacade from 'modules/app/process/main/MainFacade'
// import ConfirmData from 'general/data/ConfirmData'
// import GUIActions from 'general/enum/GUIActions'
class CloseWindowMevt extends BaseEvent {
  async execute (windowSession) {
    let win = MainFacade.getInstance().windowHelper.getGUI(windowSession)
    // let confirmData = ConfirmData.create('关闭窗口', `确定要关闭当前窗口吗?`, 'warning')
    // let result = await run(GUIActions.CONFIRM, confirmData, win)
    // if (!result) return
    win.hide()
  }
}

export default CloseWindowMevt

'use strict'
import BaseEvent from 'modules/event/BaseEvent'
import MainFacade from 'modules/app/process/main/MainFacade'

class WindowShowMevt extends BaseEvent {
  async execute (data) {
    let GUIWinList = MainFacade.getInstance().windowHelper.getAllGUI()
    let curWin = GUIWinList[0]
    curWin.center()
    let curPosition = curWin.getPosition()
    curWin.setPosition(curPosition[0], curPosition[1] - data)
  }
}

export default WindowShowMevt

'use strict'
import BaseEvent from 'modules/event/BaseEvent'
import MainFacade from 'modules/app/process/main/MainFacade'

class WindowShowMevt extends BaseEvent {
  async execute (data) {
    let win = MainFacade.getInstance().windowHelper.getLast()
    win.center()
    let curPosition = win.getPosition()
    win.setPosition(curPosition[0], curPosition[1] - data)
  }
}

export default WindowShowMevt

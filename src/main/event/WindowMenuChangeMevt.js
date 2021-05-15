'use strict'
/**
* Author : fangtao
* Date : 8 Mar 2018
* Support : 525398535@qq.com
*/

import BaseEvent from 'modules/event/BaseEvent'
import MainActions from 'general/enum/MainActions'
import MainEvents from 'general/enum/MainEvents'

class WindowMenuChangeMevt extends BaseEvent {
  async execute (data) {
    let windowDatas = await run(MainActions.ALL_WINDOW_DATAS)
    emit(MainEvents.TRAY_MENU, windowDatas)
  }
}

export default WindowMenuChangeMevt

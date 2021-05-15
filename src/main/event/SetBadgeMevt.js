'use strict'
/**
* Author : fangtao
* Date : 19 Mar 2018
* Support : 525398535@qq.com
*/
import BaseEvent from 'modules/event/BaseEvent'
import MainFacade from 'modules/app/process/main/MainFacade'
class SetBadgeMevt extends BaseEvent {
  execute (data) {
    MainFacade.getInstance().dockHelper.setBadge(data)
  }
}

export default SetBadgeMevt

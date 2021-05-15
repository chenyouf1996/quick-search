'use strict'
/**
* Author : lyx
*/
import BaseEvent from 'modules/event/BaseEvent'
import MainFacade from 'modules/app/process/main/MainFacade'

class OpenURLMevt extends BaseEvent {
  execute (url) {
    let protocolMgr = MainFacade.getInstance().protocolHelper
    protocolMgr.response(url)
  }
}

export default OpenURLMevt

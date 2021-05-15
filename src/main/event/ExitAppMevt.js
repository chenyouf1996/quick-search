'use strict'
/**
* Author : fangtao
* Date : 8 Mar 2018
* Support : 525398535@qq.com
*/
import BaseEvent from 'modules/event/BaseEvent'
import { app } from 'electron'

class ExitAppMevt extends BaseEvent {
  execute (data) {
    app.exit()
  }
}

export default ExitAppMevt

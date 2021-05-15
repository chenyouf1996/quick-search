
'use strict'
/**
 * Author : fangtao
 * Date : 23 Feb 2018
 * Support : 525398535@qq.com
 */
import BaseEvent from 'modules/event/BaseEvent'
import Vue from 'vue'

let vue = new Vue()
class InfoGevt extends BaseEvent {
  execute (data) {
    vue.$message.info(String(data))
  }
}
class ErrGevt extends BaseEvent {
  execute (data) {
    vue.$message.error(String(data))
  }
}
class WarningGevt extends BaseEvent {
  execute (data) {
    vue.$message.warning(String(data))
  }
}
class SuccessGevt extends BaseEvent {
  execute (data) {
    vue.$message.success(String(data))
  }
}

export {
  InfoGevt,
  ErrGevt,
  WarningGevt,
  SuccessGevt
}

import BaseEvent from 'modules/event/BaseEvent'
import Vue from 'vue'

let vue = new Vue()
class WaringAlertGevt extends BaseEvent {
  execute (params) {
    let msg = params[0].join('<br/>')
    let title = params[1]
    vue.$alert(msg, title, {confirmButtonText: '确定', type: 'warning', dangerouslyUseHTMLString: true})
  }
}

export default WaringAlertGevt

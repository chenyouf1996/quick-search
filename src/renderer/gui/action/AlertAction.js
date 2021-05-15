import BaseAction from 'modules/action/BaseAction'
import Vue from 'vue'
let vue = new Vue()
class AlertAction extends BaseAction {
  async execute (info) {
    return new Promise((resolve, reject) => {
      vue.$alert(info, '提示', {
        type: 'success',
        closeOnClickModal: true,
        callback: action => {
          resolve()
        }
      })
    })
  }
}
export default AlertAction

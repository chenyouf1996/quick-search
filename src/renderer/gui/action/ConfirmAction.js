import BaseAction from 'modules/action/BaseAction'
import Vue from 'vue'
import ConfirmData from 'general/data/ConfirmData'
class ConfirmAction extends BaseAction {
  async execute (confirmData) {
    return new Promise(async (resolve, reject) => {
      let type = ConfirmData.type(confirmData)
      let title = ConfirmData.title(confirmData)
      let message = ConfirmData.message(confirmData)
      let confirmText = ConfirmData.confirmText(confirmData)
      let cancelText = ConfirmData.cancelText(confirmData)
      Vue.prototype.$confirm(message, title, {type, confirmButtonText: confirmText, cancelButtonText: cancelText}).then(() => {
        resolve(true)
      }).catch(() => { // element-ui会抛出一个cancel 而不是错误 会导致控制台警告
        resolve(false)
      })
    })
  }
}
export default ConfirmAction

import BaseAssistant from 'modules/assistant/BaseAssistant'
import Store from 'electron-store'
import DateUtils from 'modules/library/utils/DateUtils'
import ISO from 'modules/app/ISO'
import AppUtils from 'modules/library/utils/AppUtils'
class LogAssistant extends BaseAssistant {
  constructor () {
    super()
    this.dict = {}
    this.error = this.getLogStore('error') // 存储错误日志
  }
  getLogStore (key) {
    if (!this.dict[key]) {
      let version = AppUtils.getVersion()
      this.dict[key] = new Store({name: `_Log/${version}/` + key})
    }
    return this.dict[key]
  }
  createTimestamp () {
    return DateUtils.nowFormat()
  }
  error (msg) {
    let processType = ISO.processType
    let time = this.createTimestamp()
    let data = {time, msg}
    let content = this.error.get(processType, [])
    content.push(data)
    this.error.set(processType, content)
  }
}
export default LogAssistant

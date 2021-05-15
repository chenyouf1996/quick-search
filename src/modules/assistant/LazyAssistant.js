import BaseAssistant from 'modules/assistant/BaseAssistant'
import KeyRegister from 'modules/library/unit/KeyRegister'
import _ from 'lodash'
class LazyAssistant extends BaseAssistant {
  constructor (config) {
    super()
    this.register = new KeyRegister(config, this.customRegist)
  }
  customRegist (storage, eventType, ms) {
    let f = (data) => {
      emit(eventType, data)
    }
    let lazyF = _.throttle(f, ms, {leading: false})
    storage[eventType] = lazyF
  }
  response (eventType, data) {
    let f = this.register.take(eventType, (data) => {
      console.warn('无效的延时函数', eventType)
      emit(eventType, data)
    })
    f(data)
  }
}
export default LazyAssistant

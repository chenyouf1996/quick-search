'use strict'
/**
* Author : fangtao
* Date : Apr 26, 2018
* Support : 525398535@qq.com
* 取名于电子世界的缔造者
*/
import StoreAssistant from 'modules/assistant/StoreAssistant'
import UnhandledAssistant from 'modules/assistant/UnhandledAssistant'
import EventAssistant from 'modules/event/EventAssistant'
import ActionAssistant from 'modules/action/ActionAssistant'
import _ from 'lodash'
// import LogAssistant from 'modules/assistant/LogAssistant'
import LazyAssistant from 'modules/assistant/LazyAssistant'
import WordAssistant from 'modules/word/WordAssistant'
import StorageAssistant from 'general/assistant/StorageAssistant'
class Flynn {
  static _instance = null
  /**
   * @static
   * @returns {Flynn}
   * @memberof Flynn
   */
  static get _ () {
    if (!Flynn._instance) {
      Flynn._instance = new Flynn()
      global.flynn = Flynn._instance
    }
    return Flynn._instance
  }
  registFacade (facade, config) {
    this.registAssistant(config)
    this.registEvent(config)
    this.registAction(config)
    global.facade = facade
    facade.flynn = this // 这里是硬编码
    facade.config = config
    facade.init() // 这里是硬编码
  }
  registAssistant (config) {
    this.store = new StoreAssistant('1.0.1')
    this.storage = new StorageAssistant()
    // this.log = new LogAssistant()
    this.unhandled = new UnhandledAssistant(this.log) // 有依赖log
    this.event = new EventAssistant() // 依赖vue
    this.action = new ActionAssistant()
    this.lazy = new LazyAssistant(config.configLazy)
    this.word = new WordAssistant(config.configWord, config.wordTypes)
  }
  registAction (config) {
    config.configAction && config.configAction.forEach((value, key) => {
      this.action.regist(key, value)
    })
  }
  registEvent (config) {
    config.configEvent && config.configEvent.forEach((value, key) => {
      this.event.regist(key, value)
    })
  }
  show () {
    let info = _.merge(Flynn._.event.counter.info(), Flynn._.action.counter.info())
    console.log(info)
  }
  async testRun (action, data) {
    let re = await global.run(action, data)
    console.log(re)
  }
}

export default Flynn

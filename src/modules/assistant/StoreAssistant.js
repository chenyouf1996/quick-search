import BaseAssistant from 'modules/assistant/BaseAssistant'
import Store from 'electron-store'
class StoreAssistant extends BaseAssistant {
  dict = {}
  STATUS = 'status'
  VUEX = 'vuex'
  constructor (version) {
    super()
    this.version = version
  }
  /**
   *
   *
   * @param {*} key
   * @returns {Store}
   * @memberof StoreAssistant
   */
  store (key) {
    if (!this.dict[key]) {
      this.dict[key] = new Store({name: `cyfSearch_Cache/${this.version}/` + key})
    }
    return this.dict[key]
  }
}

export default StoreAssistant

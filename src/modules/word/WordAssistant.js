import BaseAssistant from 'modules/assistant/BaseAssistant'
import KeyRegister from 'modules/library/unit/KeyRegister'
import _ from 'lodash'
import ISO from 'modules/app/ISO'
class WordAssistant extends BaseAssistant {
  constructor (config, wordTypes) {
    super()
    this.register = new KeyRegister(config)
    this.option = {imports: {T: wordTypes, L: this.take.bind(this)}}
  }
  globalRegist () {
    global.localize = this.take.bind(this)
  }
  take (type, keys) {
    let result = this.register.take(type, `*${type}*`)
    if (type === undefined && ISO.isDebug) {
      throw new Error('key是无效的')
    }
    let re = _.template(result, this.option)(keys)
    return re
  }
}
export default WordAssistant

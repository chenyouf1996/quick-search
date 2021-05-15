import BaseHelper from 'modules/app/unit/BaseHelper'
import Mousetrap from 'mousetrap'
class HotKeyHelper extends BaseHelper {
  checkEnableHandler = () => { return true }
  constructor (facadeConfig, checkEnableHandler = null) {
    super()
    if (checkEnableHandler) {
      this.checkEnableHandler = checkEnableHandler
    }
    let {configHotKey} = facadeConfig
    configHotKey && configHotKey.forEach((value, key) => {
      this.addHotKey(key, value)
    })
  }
  addHotKey (keys, cmd) {
    Mousetrap.bind(keys, () => {
      if (this.checkEnableHandler(cmd)) {
        emit(cmd)
      }
    })
  }
}

export default HotKeyHelper

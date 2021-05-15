'use strict'
/**
* Author : fangtao
* Date : 4 Feb 2018
* Support : 525398535@qq.com
*/
import { globalShortcut } from 'electron'
import BaseHelper from 'modules/app/unit/BaseHelper'
import KeyRegister from 'modules/library/unit/KeyRegister'
class ShortcutHelper extends BaseHelper {
  constructor (configFacade) {
    super()
    let {configShortcut} = configFacade
    this.register = new KeyRegister(configShortcut, this.customRegist)
  }
  customRegist (storage, key, cmd) {
    globalShortcut.register(key, () => {
      emit(cmd)
    })
  }
}

export default ShortcutHelper

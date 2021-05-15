'use strict'
/**
* Author : fangtao
* Date : 5 Feb 2018
* Support : 525398535@qq.com
* 取名于创战纪中的智慧电子人
*/

import ProcessTypes from 'modules/app/enum/ProcessTypes'
import { remote } from 'electron'
import PlatformTypes from 'modules/app/enum/PlatformTypes'
import EnvTypes from 'modules/app/enum/EnvTypes'
class ISO {
  static processType = null
  static envType = process.env.NODE_ENV
  static isDebug = ISO.envType === EnvTypes.DEVELOPMENT
  static session = null // main gui logic的 进程session
  static get appSession () {
    if (ISO.processType === ProcessTypes.MAIN) {
      return ISO.session
    } else {
      return remote.getGlobal('iso').session
    }
  }
  static get platformType () {
    if (process.platform === 'darwin') return PlatformTypes.MAC
    if (process.platform === 'win32') return PlatformTypes.WINDOWS
  }
  static isMac = ISO.platformType === PlatformTypes.MAC
  static isWin = ISO.platformType === PlatformTypes.WINDOWS
  constructor () {
    global.iso = this
  }
}

export default ISO

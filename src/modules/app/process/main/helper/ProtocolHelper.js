'use strict'
/**
* Author : fangtao
* Date : 27 Mar 2018
* Support : 525398535@qq.com
*/
import BaseHelper from 'modules/app/unit/BaseHelper'
import { app } from 'electron'
import KeyRegister from 'modules/library/unit/KeyRegister'
class ProtocolHelper extends BaseHelper {
  constructor (facadeConfig) {
    super()
    let {configProtocol, protocolHeader} = facadeConfig
    protocolHeader && app.setAsDefaultProtocolClient(protocolHeader)
    this.register = new KeyRegister(configProtocol)
  }
  encode (protocolHeader, data) {
    let protocol = this.take(protocolHeader)
    if (protocol) {
      return protocol.encode(data)
    } else {
      return null
    }
  }
  response (url) {
    let protocol = this.take(url)
    protocol && protocol.response(url)
  }
  take (url) {
    let protocol = null
    let keys = this.register.keys()
    let temp = keys.find((key) => {
      return url.startsWith(key)
    })
    protocol = this.register.take(temp)
    return protocol
  }
}

export default ProtocolHelper

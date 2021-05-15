'use strict'
/**
* Author : fangtao
* Date : Apr 14, 2018
* Support : 525398535@qq.com
*/
import uuid from 'uuid/v1'
class SessionUtils {
  static take () {
    return uuid()
  }
}

export default SessionUtils

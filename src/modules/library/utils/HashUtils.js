'use strict'
/**
* Author : fangtao
* Date : Apr 19, 2018
* Support : 525398535@qq.com
*/
import crypto from 'crypto'
class HashUtils {
  static encode (str) {
    let md5 = crypto.createHash('md5')
    md5.update(str)
    return md5.digest('hex')
  }
}

export default HashUtils

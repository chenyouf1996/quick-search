'use strict'
/**
* Author : fangtao
* Date : Apr 23, 2018
* Support : 525398535@qq.com
*/
import _ from 'lodash'
class EnumUtils {
  static SYMBOL = '_'
  static ID = 'name'
  static wrap (obj, HEAD) {
    _.forEach(obj, (value, key) => {
      obj[key] = EnumUtils.join(HEAD, value)
    })
    obj[EnumUtils.ID] = HEAD
  }
  static id (obj) { // 外面没用
    return obj[EnumUtils.ID]
  }
  static join (head, key) { // 外面没用
    return `${head}${EnumUtils.SYMBOL}${key}`
  }
}

export default EnumUtils

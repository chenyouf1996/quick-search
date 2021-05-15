'use strict'
/**
* Author : fangtao
* Date : 4 Feb 2018
* Support : 525398535@qq.com
*/
import _ from 'lodash'
class IterUtils {
  static count (iter, key) {
    let re = 0
    for (let x of iter) {
      if (x === key) {
        re++
      }
    }
    return re
  }
  static isEmpty (obj) {
    return _.size(obj) === 0
  }
  static find (iter, key) {
    return iter.includes(key)
  }
  static sortBy (property, reverse = false) {
    return function (a, b) {
      let value1 = a[property]
      let value2 = b[property]
      let re = 0
      if (value1 > value2) {
        re = 1
      } else if (value1 < value2) {
        re = -1
      }
      if (reverse) re *= -1
      return re
    }
  }
}

export default IterUtils

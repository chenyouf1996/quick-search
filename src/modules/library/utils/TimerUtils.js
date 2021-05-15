'use strict'
/**
* Author : fangtao
* Date : 5 Feb 2018
* Support : 525398535@qq.com
*/

class TimerUtils {
  static _dict = {}
  static tick (key) {
    key = String(key)
    if (TimerUtils._dict[key]) {
      let start = TimerUtils._dict[key]
      let ms = this.getTimer() - start
      delete TimerUtils._dict[key]
      return ms
    } else {
      TimerUtils._dict[key] = this.getTimer()
    }
  }
  static getTimer () {
    return new Date().valueOf()
  }
}

export default TimerUtils

'use strict'
/**
* Author : fangtao
* Date : Apr 16, 2018
* Support : 525398535@qq.com
*/
class BaseAssistant {
  _createCount = 0
  constructor () {
    if (this._createCount > 0) {
      throw new Error(`${this.constructor.name}实例不应该超过1个`)
    }
    this._createCount++
    this.globalRegist()
  }
  globalRegist () {
  }
}

export default BaseAssistant

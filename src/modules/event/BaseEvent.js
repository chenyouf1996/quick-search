'use strict'
/**
* Author : fangtao
* Date : 12 Mar 2018
* Support : 525398535@qq.com
*/
class BaseEvent {
  locked = false
  async response (data) {
    this.locked = true
    let re = true
    try {
      await this.execute(data)
    } catch (err) {
      re = false
      console.error(`${this.constructor.name}`, err)
    }
    this.locked = false
    return re
  }
  async execute (data) {

  }
}

export default BaseEvent

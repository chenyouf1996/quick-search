'use strict'
/**
* Author : fangtao
* Date : Apr 20, 2018
* Support : 525398535@qq.com
*/
const Enum = {
  ACTION: 'action',
  DATA: 'data',
  SESSION: 'session',
  PROCESS: 'process'
}
class ActionData {
  static action (actionData) {
    return actionData[Enum.ACTION]
  }
  /**
   * 既表示参数 也表示结果
   * @static
   * @param {any} actionData
   * @memberof ActionData
   */
  static data (actionData) {
    return actionData[Enum.DATA]
  }
  static session (actionData) {
    return actionData[Enum.SESSION]
  }
  static process (actionData) {
    return actionData[Enum.PROCESS]
  }
  static create (action, data, session, process) {
    return {
      action: action,
      data: data,
      session: session,
      process: process
    }
  }
}

export default ActionData

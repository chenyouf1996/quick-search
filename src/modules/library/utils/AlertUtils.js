'use strict'
/**
* Author : fangtao
* Date : 8 Feb 2018
* Support : 525398535@qq.com
*/
import { dialog } from 'electron'
class AlertUtils {
  /**
   * 创建一个alert弹窗所需的Options
   * @param {String} type 类型一般是info
   * @param {String} title 标题
   * @param {String} message 窗体文字
   * @param {Array} buttons 按钮的Label组成的数组
   * @returns Object
   */
  static options (type, title, message, buttons) {
    return {
      type: type,
      title: title,
      message: message,
      buttons: buttons
    }
  }
  /**
   * 创建弹窗
   * @param {Object} options 由options创建
   * @param {Function} handler 传入多个handler
   */
  static show (options, ...handler) {
    dialog.showMessageBox(options, (index) => {
      let fn = handler[index]
      fn && fn()
    })
  }
}

export default AlertUtils

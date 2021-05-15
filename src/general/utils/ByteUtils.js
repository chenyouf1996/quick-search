'use strict'
/**
* Author : fangtao
* Date : 22 Mar 2018
* Support : 525398535@qq.com
*/

class ByteUtils {
  static MEASUREMENT = 1024 // 计量单位
  static SIZE_LIST = ['B', 'KB', 'MB', 'GB'] // 转换单位列表

  static transfrom (bytesString) { // todo 输入多少 KB MB 转化为b 要确定是否两边中间带空格 是否格式合法
    let size = parseFloat(bytesString)
    let sizeStr = bytesString.substring(String(size).length)
    sizeStr = sizeStr.replace(/\s/g, '').toUpperCase() // 去除空格,并改成大写
    let index = ByteUtils.SIZE_LIST.indexOf(sizeStr)
    let re = -1
    if (index > -1) {
      re = parseInt(size * Math.pow(ByteUtils.MEASUREMENT, index)) // 取整。去除小数点
    } else {
      // 格式有问题
      console.log('transfrom failed', re)
    }
    return re
  }
  static format (bytes) { // todo 输入数值型 转成 xxx KB XXX MB
    let count = 0
    if (bytes > 0) {
      count = Math.floor(Math.log(bytes) / Math.log(ByteUtils.MEASUREMENT))
    }
    if (count >= ByteUtils.SIZE_LIST.length) {
      count = ByteUtils.SIZE_LIST.length - 1
    }
    let size = (bytes / Math.pow(ByteUtils.MEASUREMENT, count))
    // 去小数点后两位，不做四舍五入
    size = parseInt(size * 100) / 100
    let re = `${size} ${ByteUtils.SIZE_LIST[count]}`
    return re
  }
}

export default ByteUtils

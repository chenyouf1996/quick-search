'use strict'

import moment from 'moment'
/**
* Author : fangtao
* Date : Apr 15, 2018
* Support : 525398535@qq.com
*/
moment.locale('zh-CN')
class DateUtils {
  static format (timestamp, format) {
    return moment(timestamp).format(format)
  }
  static dateFormat (timestamp, diff = false) {
    if (diff) {
      return DateUtils.relativeFormat(timestamp)
    } else {
      if (!timestamp) timestamp = 0 // 为了规避因为默认值而取到当前值,强制设置为0,为1970年的日期
      return DateUtils.format(timestamp, 'YY-MM-DD HH:mm')
    }
  }
  static relativeFormat (timestamp) {
    return moment(timestamp, 'x').fromNow()
  }
  static nowFormat () {
    return moment().format('YYYY-MM-DD HH-mm')
  }
  static msFormat (ms) {
    let date = moment(ms).utc()
    if (date.hour() > 0) {
      return date.format('HH:mm:ss')
    } else {
      return date.format('mm:ss')
    }
  }
}

export default DateUtils

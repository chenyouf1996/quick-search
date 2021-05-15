'use strict'
/**
* Author : fangtao
* Date : Apr 23, 2018
* Support : 525398535@qq.com
*/
const Enum = {
  TITLE: 'title',
  ROOT: 'root',
  SESSION: 'session'
}
class WindowData {
  static title (windowData) {
    return windowData[Enum.TITLE]
  }
  static root (windowData) {
    return windowData[Enum.ROOT]
  }
  static session (windowData) {
    return windowData[Enum.SESSION]
  }
  static create (title, root, session) {
    let re = {}
    re[Enum.TITLE] = title
    re[Enum.ROOT] = root
    re[Enum.SESSION] = session
    return re
  }
}

export default WindowData

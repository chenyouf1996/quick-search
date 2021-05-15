'use strict'
/**
* Author : fangtao
* Date : 3 Mar 2018
* Support : 525398535@qq.com
*/
class IpcData {
  static create (type, data) {
    return {type: type, data: data}
  }
  static type (ipcData) {
    return ipcData.type
  }
  static data (ipcData) {
    return ipcData.data
  }
}

export default IpcData

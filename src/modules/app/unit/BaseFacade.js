'use strict'
/**
* Author : fangtao
* Date : 12 Mar 2018
* Support : 525398535@qq.com
* Version : 0.1
*/
class BaseFacade {
  flynn = null
  processType = null
  initComplete () {
  }
  init () {
    this.registHelper()
    this.initComplete()
  }
  registHelper () {
  }
}

export default BaseFacade

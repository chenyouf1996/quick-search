'use strict'
/**
* Author : fangtao
* Date : 19 Mar 2018
* Support : 525398535@qq.com
*/
import {createItem, createSeparator} from 'modules/library/utils/MenuUtils'
import MainEvents from 'general/enum/MainEvents'
import WindowData from 'general/data/WindowData'
import AppUtils from 'modules/library/utils/AppUtils'
import AppEvents from 'modules/app/enum/AppEvents'
class AppMenuUtils {
  static createWindow (windowDatas) {
    let re = []
    windowDatas.forEach((windowData) => {
      let title = WindowData.title(windowData)
      let session = WindowData.session(windowData)
      re.push(createItem(title, AppEvents.MAIN_ACTIVATE_WINDOW, session))
    })
    re.push(createSeparator())
    return re
  }
  static createTrayTemplate (body) {
    let re = []
    let sys = [
      createItem('新建搜索', MainEvents.CREATE_NEW_SEARCH, null, 'CommandOrControl+N'),
      createSeparator(),
      createItem(`版本号${AppUtils.getVersion()}`, null, null, null, false),
      createItem('退出程序', MainEvents.EXIT_APP, null, 'CommandOrControl+Q')
    ]
    if (body) {
      re.push(...body)
      re.push(createSeparator())
    }
    re.push(...sys)
    return re
  }
  static createDockTemplate () {
    let re = []
    let sys = [
      createItem('新建搜索', MainEvents.CREATE_NEW_SEARCH, null, 'CommandOrControl+N')
    ]
    re.push(...sys)
    return re
  }
}

export default AppMenuUtils

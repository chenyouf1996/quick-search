'use strict'
/**
* Author : fangtao
* Date : 19 Mar 2018
* Support : 525398535@qq.com
*/

import BaseHelper from 'modules/app/unit/BaseHelper'
import {Menu, app} from 'electron'
import ISO from 'modules/app/ISO'
class DockHelper extends BaseHelper {
  update (menuTemplate) {
    const contextMenu = Menu.buildFromTemplate(menuTemplate)
    app.dock.setMenu(contextMenu)
  }
  rock () {
    if (!ISO.isMac) return
    app.dock.bounce('informational')
  }
  setBadge (data) {
    if (!ISO.isMac) return
    app.dock.setBadge(String(data))
  }
}

export default DockHelper

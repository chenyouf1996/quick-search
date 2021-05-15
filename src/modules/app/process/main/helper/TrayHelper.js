'use strict'
/**
* Author : fangtao
* Date : 5 Feb 2018
* Support : 525398535@qq.com
*/
// import {Menu, Tray} from 'electron'
import BaseHelper from 'modules/app/unit/BaseHelper'
import {Tray, Menu} from 'electron'
import path from 'path'
import ISO from 'modules/app/ISO'
import PlatformTypes from 'modules/app/enum/PlatformTypes'
import AppEvents from 'modules/app/enum/AppEvents'
import fs from 'fs'
class TrayHelper extends BaseHelper {
  constructor (facadeConfig) {
    super()
    let {tooltip} = facadeConfig
    this.tray = null
    const iconDir = ISO.platformType === PlatformTypes.WINDOWS ? 'win' : 'mac'
    const iconName = 'trayIcon.png'
    const iconPath = path.join(__static, 'tray', iconDir, iconName)
    // 因路径下不存在这个png图片，所以不显示右下角图标
    if (fs.existsSync(iconPath)) {
      this.tray = new Tray(iconPath)
      tooltip && this.tooltip(tooltip)
      this.tray.on('click', (event, bounds) => {
        emit(AppEvents.MAIN_ACTIVATE_WINDOW)
      })
      this.tray.on('right-click', (event, bounds) => {
        this.tray.popUpContextMenu(this.contextMenu)
      })
      this.tray.on('double-click', (event, bounds) => {
        console.log('tray double click')
      })
    }
  }
  update (menuTemplate) {
    let menu = Menu.buildFromTemplate(menuTemplate)
    this.contextMenu = menu
  }
  tooltip (msg) {
    this.tray && this.tray.setToolTip(msg)
  }
}

export default TrayHelper

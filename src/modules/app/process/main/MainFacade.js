'use strict'
/**
* Author : fangtao
* Date : 10 Feb 2018
* Support : 525398535@qq.com
*/
import ShortcutHelper from 'modules/app/process/main/helper/ShortcutHelper'
import TrayHelper from 'modules/app/process/main/helper/TrayHelper'
import WindowHelper from 'modules/app/process/main/helper/WindowHelper'
import DockHelper from 'modules/app/process/main/helper/DockHelper'
import ProtocolHelper from 'modules/app/process/main/helper/ProtocolHelper'
import PowerHelper from 'modules/app/process/main/helper/PowerHelper'
import AppHelper from 'modules/app/process/main/helper/AppHelper'
import BaseFacade from 'modules/app/unit/BaseFacade'
import SingletonUnit from 'modules/library/unit/SingletonUnit'
import ProcessTypes from 'modules/app/enum/ProcessTypes'
import AppEvents from 'modules/app/enum/AppEvents'
class MainFacade extends BaseFacade {
  processType = ProcessTypes.MAIN
  config = null
  initComplete () {
    emit(AppEvents.MAIN_STARTUP)
  }
  static singleton = new SingletonUnit(MainFacade)
  /**
   * @returns {MainFacade}
   */
  static getInstance () {
    return MainFacade.singleton.getInstance()
  }
  registHelper () {
    this.shortcutHelper = new ShortcutHelper(this.config)
    this.trayHelper = new TrayHelper(this.config)
    this.windowHelper = new WindowHelper(this.config)
    this.dockHelper = new DockHelper(this.config)
    this.protocolHelper = new ProtocolHelper(this.config)
    this.powerHelper = new PowerHelper(this.config)
    this.appHelper = new AppHelper(this.config)
  }
}

export default MainFacade

'use strict'
import BaseFacade from 'modules/app/unit/BaseFacade'
import ContextMenuHelper from 'modules/app/process/gui/helper/ContextMenuHelper'
import SingletonUnit from 'modules/library/unit/SingletonUnit'
import HotkeyHelper from 'modules/app/process/gui/helper/HotKeyHelper'
import Flynn from 'general/Flynn'
import TaskHelper from '@/gui/helper/TaskHelper'
import QueryHelper from '@/gui/helper/QueryHelper'
import ProcessTypes from 'modules/app/enum/ProcessTypes'

class GUIFacade extends BaseFacade {
  processType = ProcessTypes.GUI
  config = null
  static singleton = new SingletonUnit(GUIFacade)
  /**
   * @returns {GUIFacade}
   */
  static getInstance () {
    return GUIFacade.singleton.getInstance()
  }
  initComplete () {
    Flynn._.event.hook = (event, success) => {
      // console.log(`钩子函数 ${event} ${success}`)
      success && this.taskHelper.finishTask(event)
    }
  }
  hotKeyEnable (cmd) {
    return !global.store.state.DialogState.isOpen
  }
  registHelper () {
    this.contextMenuHelper = new ContextMenuHelper(this.config)
    this.taskHelper = new TaskHelper(this.config)
    this.hotkeyHelper = new HotkeyHelper(this.config, this.hotKeyEnable)
    this.queryHelper = new QueryHelper(this.config)
  }
}

export default GUIFacade

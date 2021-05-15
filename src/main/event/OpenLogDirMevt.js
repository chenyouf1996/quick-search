import BaseEvent from 'modules/event/BaseEvent'
import path from 'path'
import {app, shell} from 'electron'
class OpenLogDirMevt extends BaseEvent {
  execute () {
    let logDir = path.join(app.getPath('userData'), '_Log')
    shell.openItem(logDir)
  }
}
export default OpenLogDirMevt

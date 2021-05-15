import { app } from 'electron'
import path from 'path'
import BaseEvent from 'modules/event/BaseEvent'
import fse from 'fs-extra'
class CleanCacheMevt extends BaseEvent {
  async execute (data) {
    let userDataPath = app.getPath('userData')
    let cachePath = path.join(userDataPath, 'cyfSearch_Cache')
    fse.remove(cachePath)
    // let scriptPath = path.join(userDataPath, '_Script')
    // FileUtils.del(scriptPath)
  }
}
export default CleanCacheMevt

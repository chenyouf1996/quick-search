import BaseEvent from 'modules/event/BaseEvent'
import {app} from 'electron'
class WindowAllClosedMevt extends BaseEvent {
  execute () {
    console.log('windowAllClosed')
    if (process.platform !== 'darwin') { // 在其他平台如果没了就app没了
      app.quit()
    }
  }
}
export default WindowAllClosedMevt

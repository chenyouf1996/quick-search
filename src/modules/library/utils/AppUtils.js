import ISO from 'modules/app/ISO'
import { app, remote } from 'electron'
import ProcessTypes from 'modules/app/enum/ProcessTypes'
class AppUtils {
  static getVersion () {
    let version = AppUtils.app.getVersion()
    return version
  }
  static get app () {
    let _app = null
    if (ISO.processType === ProcessTypes.MAIN) {
      _app = app
    } else {
      _app = remote.app
    }
    return _app
  }
}
export default AppUtils

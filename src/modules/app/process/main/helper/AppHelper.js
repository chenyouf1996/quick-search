import BaseHelper from 'modules/app/unit/BaseHelper'
import {app} from 'electron'
import AppEvents from 'modules/app/enum/AppEvents'
class AppHelper extends BaseHelper {
  constructor () {
    super()
    const gotTheLock = app.requestSingleInstanceLock()
    if (!gotTheLock) {
      app.quit()
    } else {
      app.on('second-instance', (event, commandLine, workingDirectory) => {
        emit(AppEvents.MAIN_ACTIVATE_WINDOW)
      })
    }
    app.on('window-all-closed', () => {
      emit(AppEvents.MAIN_WINDOW_ALL_CLOSED)
    })
    app.on('open-url', (event, url) => {
      emit(AppEvents.MAIN_OPEN_URL, url)
    })
    app.on('activate', (event, hasVisibleWindows) => {
      if (!hasVisibleWindows) {
        emit(AppEvents.MAIN_CREATE_WINDOW)
      }
    })
    app.on('before-quit', () => {
      emit(AppEvents.MAIN_SET_BADGE, '')
      app.exit() // 因为关闭按钮不能关闭了 所有需要这里关闭
    })
  }
}
export default AppHelper

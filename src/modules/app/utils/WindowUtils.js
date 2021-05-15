import { ipcMain, ipcRenderer } from 'electron'
import ISO from 'modules/app/ISO'
import ProcessTypes from 'modules/app/enum/ProcessTypes'
class WindowUtils {
  static async windowReady (windowSession) {
    if (ISO.processType !== ProcessTypes.MAIN) return
    return new Promise((resolve, reject) => {
      ipcMain.once(`ready_${windowSession}`, () => {
        resolve()
      })
    })
  }
  static sendReady (windowSession) {
    if (ISO.processType !== ProcessTypes.GUI) return
    ipcRenderer.send(`ready_${windowSession}`)
  }
}
export default WindowUtils

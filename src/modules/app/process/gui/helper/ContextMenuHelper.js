import BaseHelper from 'modules/app/unit/BaseHelper'
import KeyRegister from 'modules/library/unit/KeyRegister'
import IpcData from 'modules/library/data/IpcData'

class ContextMenuHelper extends BaseHelper {
  constructor (facadeConfig) {
    super()
    let {configContextMenu} = facadeConfig
    this.register = new KeyRegister(configContextMenu)
  }
  /**
   * @param {any} type
   * @returns {Menu}
   * @memberof ContextMenuHelper
   */
  async response (ipcData) {
    let type = IpcData.type(ipcData)
    let data = IpcData.data(ipcData)
    let baseMenu = this.register.take(type)
    let menu = await baseMenu.response(data)
    return menu
  }
}

export default ContextMenuHelper

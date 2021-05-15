import BaseEvent from 'modules/event/BaseEvent'
import { remote } from 'electron'
import GUIFacade from '@/gui/GUIFacade'
class ContextMenuGevt extends BaseEvent {
  async execute (ipcData) {
    let menu = await GUIFacade.getInstance().contextMenuHelper.response(ipcData)
    let options = {
      window: remote.getCurrentWindow()
    }
    menu.popup(options)
  }
}

export default ContextMenuGevt

'use strict'
import BaseEvent from 'modules/event/BaseEvent'
import MainFacade from 'modules/app/process/main/MainFacade'
import GUIEvents from 'general/enum/GUIEvents'
import WindowUtils from 'modules/app/utils/WindowUtils'
class CreateNewSearchMevt extends BaseEvent {
  async execute (rootCase) {
    let windowSession = MainFacade.getInstance().windowHelper.createWindow()
    if (rootCase) {
      let win = MainFacade.getInstance().windowHelper.getGUI(windowSession)
      await WindowUtils.windowReady(windowSession)
      emit(GUIEvents.LOAD_ROOT_CASE, rootCase, win)
    }
  }
}

export default CreateNewSearchMevt

import MainEvents from 'general/enum/MainEvents'
import MainFacade from 'modules/app/process/main/MainFacade'
import BaseEvent from 'modules/event/BaseEvent'

class ShortcutMevt extends BaseEvent {
  async execute (data) {
    let win = MainFacade.getInstance().windowHelper.getLast()
    if (win.isVisible()) {
      emit(MainEvents.WINDOW_HIDE)
    } else {
      emit(MainEvents.WINDOW_SHOW)
    }
  }
}
export default ShortcutMevt

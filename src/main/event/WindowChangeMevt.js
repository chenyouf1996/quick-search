import BaseEvent from 'modules/event/BaseEvent'
import MainEvents from 'general/enum/MainEvents'

class WindowChangeMevt extends BaseEvent {
  execute () {
    emit(MainEvents.WINDOW_MENU_CHANGE)
  }
}
export default WindowChangeMevt

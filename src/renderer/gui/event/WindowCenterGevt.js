import BaseEvent from 'modules/event/BaseEvent'
import MainEvents from 'general/enum/MainEvents'

class WindowCenterGevt extends BaseEvent {
  execute (data) {
    emit(MainEvents.WINDOW_CENTER, data)
  }
}
export default WindowCenterGevt

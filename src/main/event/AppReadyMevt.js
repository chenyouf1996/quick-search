import BaseEvent from 'modules/event/BaseEvent'
import MainEvents from 'general/enum/MainEvents'
class AppReadyMevt extends BaseEvent {
  execute () {
    emit(MainEvents.INIT_MENU)
  }
}
export default AppReadyMevt

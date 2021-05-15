import BaseEvent from 'modules/event/BaseEvent'
import MainEvents from 'general/enum/MainEvents'

class StartupMevt extends BaseEvent {
  async execute () {
    emit(MainEvents.DOCK_MENU)
  }
}
export default StartupMevt

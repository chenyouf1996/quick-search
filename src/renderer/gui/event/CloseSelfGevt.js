import BaseEvent from 'modules/event/BaseEvent'
import MainEvents from 'general/enum/MainEvents'
import ISO from 'modules/app/ISO'
class CloseSelfGevt extends BaseEvent {
  async execute () {
    emit(MainEvents.CLOSE_WINDOW, ISO.session)
  }
}
export default CloseSelfGevt

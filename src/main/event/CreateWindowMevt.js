import BaseEvent from 'modules/event/BaseEvent'
import MainEvents from 'general/enum/MainEvents'

class CreateWindowMevt extends BaseEvent {
  execute () {
    emit(MainEvents.CREATE_NEW_SEARCH)
  }
}
export default CreateWindowMevt

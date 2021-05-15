import BaseEvent from 'modules/event/BaseEvent'
import GUIEvents from 'general/enum/GUIEvents'

class WantCloseGevt extends BaseEvent {
  execute () {
    emit(GUIEvents.CLOSE_SELF)
  }
}
export default WantCloseGevt

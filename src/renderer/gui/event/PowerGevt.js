import BaseEvent from 'modules/event/BaseEvent'

class PowerGevt extends BaseEvent {
  execute (ok) {
    if (ok) {
      console.error('程序恢复了', new Date().toString())
    } else {
      console.error('程序挂起了', new Date().toString())
    }
  }
}
export default PowerGevt

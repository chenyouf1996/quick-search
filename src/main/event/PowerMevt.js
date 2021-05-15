import BaseEvent from 'modules/event/BaseEvent'
import MainFacade from 'modules/app/process/main/MainFacade'
import AppEvents from 'modules/app/enum/AppEvents'

class PowerMevt extends BaseEvent {
  execute (ok) {
    let winList = MainFacade.getInstance().windowHelper.winList
    winList.forEach((win) => {
      let isGUI = MainFacade.getInstance().windowHelper.isGUI(win)
      let powerEventType = null
      if (ok) {
        console.error('程序恢复了', new Date().toString())
      } else {
        console.error('程序挂起了', new Date().toString())
      }
      powerEventType = isGUI ? AppEvents.GUI_POWER : AppEvents.LOGIC_POWER
      emit(powerEventType, ok, win)
    })
  }
}
export default PowerMevt

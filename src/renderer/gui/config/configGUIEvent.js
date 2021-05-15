import GUIEvents from 'general/enum/GUIEvents'
import ContextMenuGevt from '@/gui/event/ContextMenuGevt'
import StartupGevt from '@/gui/event/StartupGevt'
import VuexGevt from '@/gui/event/VuexGevt'
import CloseSelfGevt from '@/gui/event/CloseSelfGevt'
import AppEvents from 'modules/app/enum/AppEvents'
import PowerGevt from '@/gui/event/PowerGevt'
import WantCloseGevt from '@/gui/event/WantCloseGevt'
import windowCenter from '@/gui/event/WindowCenterGevt'
import Xlsx2JsonGevt from '@/gui/event/Xlsx2JsonGevt'
import Json2XlsxGevt from '@/gui/event/Json2XlsxGevt'
// 测试
import SlectId from '@/gui/event/SlectId'
import { InfoGevt, SuccessGevt, WarningGevt, ErrGevt } from '@/gui/event/MessageGevt'

let list = [
  [AppEvents.GUI_STARTUP, StartupGevt],
  [AppEvents.GUI_WANT_CLOSE, WantCloseGevt],
  [AppEvents.GUI_POWER, PowerGevt],
  [AppEvents.GUI_CONTEXT_MENU, ContextMenuGevt],
  [GUIEvents.VUEX, VuexGevt],
  [GUIEvents.CLOSE_SELF, CloseSelfGevt],
  // DEMO
  [GUIEvents.WINDOW_CENTER, windowCenter],
  [GUIEvents.XLSX2JSON, Xlsx2JsonGevt],
  [GUIEvents.JSON2XLSX, Json2XlsxGevt],
  [GUIEvents.SELECTID, SlectId],
  // -----------------
  [GUIEvents.INFO_MESSAGE, InfoGevt],
  [GUIEvents.SUCCESS_MESSAGE, SuccessGevt],
  [GUIEvents.WARNING_MESSAGE, WarningGevt],
  [GUIEvents.ERROR_MESSAGE, ErrGevt]
]
let configGUIEvent = new Map(list)
export default configGUIEvent

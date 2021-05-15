import MainEvents from 'general/enum/MainEvents'
import ExitAppMevt from '@/event/ExitAppMevt'
import WindowMenuChangeMevt from '@/event/WindowMenuChangeMevt'
import ActivateWindowMevt from '@/event/ActivateWindowMevt'
import CloseWindowMevt from '@/event/CloseWindowMevt'
import SetBadgeMevt from '@/event/SetBadgeMevt'
import CreateNewSearchMevt from '@/event/CreateNewSearchMevt'
import OpenURLMevt from '@/event/OpenURLMevt'
import CleanCacheMevt from '@/event/CleanCacheMevt'
import OpenLogDirMevt from '@/event/OpenLogDirMevt'
import InitMenuMevt from '@/event/InitMenuMevt'
import AppReadyMevt from '@/event/AppReadyMevt'
import WindowAllClosedMevt from '@/event/WindowAllClosedMevt'
import AppEvents from 'modules/app/enum/AppEvents'
import WindowChangeMevt from '@/event/WindowChangeMevt'
import PowerMevt from '@/event/PowerMevt'
import TrayMenuMevt from '@/event/TrayMenuMevt'
import DockMenuMevt from '@/event/DockMenuMevt'
import StartupMevt from '@/event/StartupMevt'
import CreateWindowMevt from '@/event/CreateWindowMevt'
import WindowShowMevt from '@/event/WindowShowMevt'
import WindowHideMevt from '@/event/WindowHideMevt'
import WindowCenterMevt from '@/event/WindowCenterMevt'

let list = [
  [AppEvents.MAIN_APP_READY, AppReadyMevt],
  [AppEvents.MAIN_ACTIVATE_WINDOW, ActivateWindowMevt],
  [AppEvents.MAIN_WINDOW_CHANGE, WindowChangeMevt],
  [AppEvents.MAIN_POWER, PowerMevt],
  [AppEvents.MAIN_SET_BADGE, SetBadgeMevt],
  [AppEvents.MAIN_STARTUP, StartupMevt],
  [AppEvents.MAIN_OPEN_URL, OpenURLMevt],
  [AppEvents.MAIN_CREATE_WINDOW, CreateWindowMevt],
  [AppEvents.MAIN_WINDOW_ALL_CLOSED, WindowAllClosedMevt],
  [MainEvents.CREATE_NEW_SEARCH, CreateNewSearchMevt], // [ROCK]: 后面要改成CreateNewWindow
  [MainEvents.OPEN_LOG_DIR, OpenLogDirMevt],
  [MainEvents.CLEAN_CACHE, CleanCacheMevt],
  [MainEvents.WINDOW_MENU_CHANGE, WindowMenuChangeMevt],
  [MainEvents.CLOSE_WINDOW, CloseWindowMevt],
  [MainEvents.INIT_MENU, InitMenuMevt],
  [MainEvents.DOCK_MENU, DockMenuMevt],
  [MainEvents.TRAY_MENU, TrayMenuMevt],
  [MainEvents.EXIT_APP, ExitAppMevt],
  [MainEvents.WINDOW_SHOW, WindowShowMevt],
  [MainEvents.WINDOW_HIDE, WindowHideMevt],
  [MainEvents.WINDOW_HIDE, WindowHideMevt],
  [MainEvents.WINDOW_CENTER, WindowCenterMevt]
]
let configMainEvent = new Map(list)
export default configMainEvent

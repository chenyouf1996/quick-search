import EnumUtils from 'modules/library/utils/EnumUtils'
import ProcessTypes from 'modules/app/enum/ProcessTypes'

const MainEvents = {
  EXIT_APP: 'exitApp',
  WINDOW_MENU_CHANGE: 'windowMenuChange',
  CLOSE_WINDOW: 'closeWindow',
  CREATE_NEW_SEARCH: 'createNewSearch',
  CLEAN_CACHE: 'cleanCache',
  OPEN_LOG_DIR: 'openLogDir',
  INIT_MENU: 'initMenu',
  TRAY_MENU: 'trayMenu',
  DOCK_MENU: 'dockMenu',
  WINDOW_SHOW: 'windowShow',
  WINDOW_HIDE: 'windowHide',
  WINDOW_CENTER: 'windowCenter',
  SHORTCUT: 'shortcut'
}
EnumUtils.wrap(MainEvents, ProcessTypes.MAIN)

export default MainEvents

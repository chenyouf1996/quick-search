import ProcessTypes from 'modules/app/enum/ProcessTypes'

const AppEvents = {
  MAIN_STARTUP: `${ProcessTypes.MAIN}_startup`,
  GUI_STARTUP: `${ProcessTypes.GUI}_startup`,
  LOGIC_STARTUP: `${ProcessTypes.LOGIC}_startup`,
  MAIN_WINDOW_CHANGE: `${ProcessTypes.MAIN}_windowChange`,
  MAIN_POWER: `${ProcessTypes.MAIN}_power`,
  GUI_POWER: `${ProcessTypes.GUI}_power`,
  LOGIC_POWER: `${ProcessTypes.LOGIC}_power`,
  GUI_WANT_CLOSE: `${ProcessTypes.GUI}_wantClose`,
  GUI_CONTEXT_MENU: `${ProcessTypes.GUI}_contextMenu`,
  MAIN_SET_BADGE: `${ProcessTypes.MAIN}_setBadge`,
  MAIN_WINDOW_ALL_CLOSED: `${ProcessTypes.MAIN}_windowAllClosed`,
  MAIN_OPEN_URL: `${ProcessTypes.MAIN}_openURL`,
  MAIN_ACTIVATE_WINDOW: `${ProcessTypes.MAIN}_activateWindow`,
  MAIN_CREATE_WINDOW: `${ProcessTypes.MAIN}_createWindow`,
  MAIN_APP_READY: `${ProcessTypes.MAIN}_appReady`
}
export default AppEvents

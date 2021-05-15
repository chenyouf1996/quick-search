import EnumUtils from 'modules/library/utils/EnumUtils'

const WindowPropertys = {
  LAST_FOCUS: 'lastFocus',
  IPC_ID: 'ipcId',
  SESSION: 'session',
  TYPE: 'type'
}
EnumUtils.wrap(WindowPropertys, 'WindowPropertys')
export default WindowPropertys

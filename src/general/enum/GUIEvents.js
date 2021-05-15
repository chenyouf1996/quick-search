'use strict'
import EnumUtils from 'modules/library/utils/EnumUtils'
import ProcessTypes from 'modules/app/enum/ProcessTypes'
const GUIEvents = {
  VUEX: 'vuex',
  CLOSE_SELF: 'closeSelf',
  WINDOW_CENTER: 'windowCenter',
  SUCCESS_MESSAGE: 'successMessage',
  WARNING_MESSAGE: 'warningMessage',
  INFO_MESSAGE: 'infoMessage',
  ERROR_MESSAGE: 'errorMessage',
  XLSX2JSON: 'xlsx2Json',
  JSON2XLSX: 'json2Xlsx',
  SELECTID: 'slectId'
}
EnumUtils.wrap(GUIEvents, ProcessTypes.GUI)

export default GUIEvents

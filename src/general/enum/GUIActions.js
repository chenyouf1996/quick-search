'use strict'
import EnumUtils from 'modules/library/utils/EnumUtils'
import ProcessTypes from 'modules/app/enum/ProcessTypes'

const GUIActions = {
  WINDOW_DATA: 'windowData',
  CONFIRM: 'confirm',
  ALERT: 'alert',
  // DEMO
  TEST_GUI: 'testGUI',
  OPEN_DIALOG: 'openDialog',
  SAVA_DIALOG: 'savaDialog'
}
EnumUtils.wrap(GUIActions, ProcessTypes.GUI)

export default GUIActions

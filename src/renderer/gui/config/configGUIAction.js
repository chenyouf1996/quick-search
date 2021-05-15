import GUIActions from 'general/enum/GUIActions'
import WindowDataAction from '@/gui/action/cache/WindowDataAction'
import ConfirmAction from '@/gui/action/ConfirmAction'
import AlertAction from '@/gui/action/AlertAction'
import TestGUIAction from '@/gui/action/TestGUIAction'
import OpenDialogAction from '@/gui/action/OpenDialogAction'
import SaveDialogAction from '@/gui/action/SaveDialogAction'

let list = [
  [GUIActions.WINDOW_DATA, WindowDataAction],
  [GUIActions.CONFIRM, ConfirmAction],
  [GUIActions.ALERT, AlertAction],
  [GUIActions.TEST_GUI, TestGUIAction],
  [GUIActions.OPEN_DIALOG, OpenDialogAction],
  [GUIActions.SAVA_DIALOG, SaveDialogAction]
]
let configGUIAction = new Map(list)
export default configGUIAction

import configGUIAction from '@/gui/config/configGUIAction'
import configGUIEvent from '@/gui/config/configGUIEvent'
import configGUIContext from '@/gui/config/configGUIContext'
import configTask from '@/gui/config/configTask'
import configHotKey from '@/gui/config/configHotKey'
import configQuery from '@/gui/config/configQuery'
import configLazy from 'general/config/configLazy'
import WordTypes from 'general/enum/WordTypes'
import configWord from 'general/config/configWord'

const configGUI = {
  configAction: configGUIAction,
  configEvent: configGUIEvent,
  configContextMenu: configGUIContext,
  configTask,
  configHotKey,
  configLazy,
  configWord,
  wordTypes: WordTypes,
  configQuery
}
export default configGUI

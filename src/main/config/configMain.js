import configMainEvent from '@/config/configMainEvent'
import configMainAction from '@/config/configMainAction'
import configProtocol from '@/config/configProtocol'
import configShortcut from '@/config/configShortcut'
import configLazy from 'general/config/configLazy'
import WordTypes from 'general/enum/WordTypes'
import configWord from 'general/config/configWord'

const configMain = {
  tooltip: 'trunkTip',
  protocolHeader: 'trunk',
  configEvent: configMainEvent,
  configAction: configMainAction,
  configProtocol: configProtocol,
  configShortcut: configShortcut,
  configLazy,
  configWord,
  wordTypes: WordTypes

}
export default configMain

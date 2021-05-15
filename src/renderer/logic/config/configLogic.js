import configLogicAction from '@/logic/config/configLogicAction'
import configLogicEvent from '@/logic/config/configLogicEvent'
import configLazy from 'general/config/configLazy'
import WordTypes from 'general/enum/WordTypes'
import configWord from 'general/config/configWord'

const configLogic = {
  configAction: configLogicAction,
  configEvent: configLogicEvent,
  configLazy,
  configWord,
  wordTypes: WordTypes
}
export default configLogic

'use strict'
import EnumUtils from 'modules/library/utils/EnumUtils'
import ProcessTypes from 'modules/app/enum/ProcessTypes'

const LogicActions = {
  TEST_LOGIC: 'testLogic'
}
EnumUtils.wrap(LogicActions, ProcessTypes.LOGIC)

export default LogicActions

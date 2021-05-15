'use strict'
/**
* Author : fangtao
* Date : 6 Mar 2018
* Support : 525398535@qq.com
*/
import EnumUtils from 'modules/library/utils/EnumUtils'
import ProcessTypes from 'modules/app/enum/ProcessTypes'
const LogicEvents = {
  VUEX: 'vuex',
  TEST_LOGIC: 'testLogic'
}
EnumUtils.wrap(LogicEvents, ProcessTypes.LOGIC)

export default LogicEvents

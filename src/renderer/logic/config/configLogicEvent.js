import LogicEvents from 'general/enum/LogicEvents'
import StartupLevt from '@/logic/event/StartupLevt'
import VuexLevt from '@/logic/event/VuexLevt'
import AppEvents from 'modules/app/enum/AppEvents'
import PowerLevt from '@/logic/event/PowerLevt'
import TestLogicLevt from '@/logic/event/TestLogicLevt'

let list = [
  [AppEvents.LOGIC_STARTUP, StartupLevt],
  [AppEvents.LOGIC_POWER, PowerLevt],
  [LogicEvents.VUEX, VuexLevt],
  // DEMO
  [LogicEvents.TEST_LOGIC, TestLogicLevt]
]
let configLogicEvent = new Map(list)
export default configLogicEvent

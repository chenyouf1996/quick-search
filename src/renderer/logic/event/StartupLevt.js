import BaseEvent from 'modules/event/BaseEvent'
import VuexUtils from '@/utils/VuexUtils'

class StartupLevt extends BaseEvent {
  async execute () {
    VuexUtils.init()
  }
}
export default StartupLevt

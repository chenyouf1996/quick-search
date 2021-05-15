import BaseEvent from 'modules/event/BaseEvent'
import {remote} from 'electron'
import VuexUtils from '@/utils/VuexUtils'
import ISO from 'modules/app/ISO'
import WindowUtils from 'modules/app/utils/WindowUtils'

class StartupGevt extends BaseEvent {
  async execute () {
    VuexUtils.init()

    let win = remote.getCurrentWindow()
    console.log('GUI启动了:' + win.id)
    WindowUtils.sendReady(ISO.session)
  }
}
export default StartupGevt

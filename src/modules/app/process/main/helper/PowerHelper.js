import BaseHelper from 'modules/app/unit/BaseHelper'
import { powerMonitor } from 'electron'
import AppEvents from 'modules/app/enum/AppEvents'

class PowerHelper extends BaseHelper {
  constructor () {
    super()
    powerMonitor.on('suspend', () => { // 挂起
      emit(AppEvents.MAIN_POWER, false)
    })
    powerMonitor.on('resume', () => { // 恢复
      emit(AppEvents.MAIN_POWER, true)
    })
  }
}
export default PowerHelper

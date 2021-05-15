import BaseEvent from 'modules/event/BaseEvent'
import AppMenuUtils from '@/utils/AppMenuUtils'
import MainFacade from 'modules/app/process/main/MainFacade'

class TrayMenuMevt extends BaseEvent {
  async execute (windowDatas) {
    let data = AppMenuUtils.createWindow(windowDatas)
    let template = AppMenuUtils.createTrayTemplate(data)
    MainFacade.getInstance().trayHelper.update(template)
  }
}
export default TrayMenuMevt

import BaseEvent from 'modules/event/BaseEvent'
import AppMenuUtils from '@/utils/AppMenuUtils'
import ISO from 'modules/app/ISO'
import MainFacade from 'modules/app/process/main/MainFacade'

class DockMenuMevt extends BaseEvent {
  execute () {
    if (!ISO.isMac) return
    let template = AppMenuUtils.createDockTemplate()
    MainFacade.getInstance().dockHelper.update(template)
  }
}
export default DockMenuMevt

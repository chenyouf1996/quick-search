import BaseAction from 'modules/action/BaseAction'
import WindowData from 'general/data/WindowData'
import { remote } from 'electron'
import WindowPropertys from 'modules/app/enum/WindowPropertys'

class WindowDataAction extends BaseAction {
  async execute () {
    let win = remote.getCurrentWindow()
    // let catalog = global.store.state.RootState.catalog
    // [ROCK] 暂时没用到Catalog
    let catalog = ''
    return WindowData.create(win.getTitle(), catalog, win[WindowPropertys.SESSION])
  }
}
export default WindowDataAction

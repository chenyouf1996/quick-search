import BaseAction from 'modules/action/BaseAction'
import MainFacade from 'modules/app/process/main/MainFacade'
import GUIActions from 'general/enum/GUIActions'
import _async from 'async'

class AllWindowDatasAction extends BaseAction {
  async execute () {
    return new Promise((resolve) => {
      let winList = MainFacade.getInstance().windowHelper.winList
      let re = []
      _async.eachSeries(winList, async (win, callback) => { // todo fang 这里使用AsyncUtils会出现错误
        let isGUI = MainFacade.getInstance().windowHelper.isGUI(win)
        if (isGUI) {
          let windowData = await run(GUIActions.WINDOW_DATA, null, win)
          re.push(windowData)
        }
        callback()
      }, (err) => {
        if (err) console.log('执行到这里了', err)
        resolve(re)
      })
    })
  }
}
export default AllWindowDatasAction

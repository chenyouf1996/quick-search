import BaseAction from 'modules/action/BaseAction'
import SaveRequest from 'general/data/SaveRequest'
import electron from 'electron'
class SaveDialogAction extends BaseAction {
  async execute (saveRequest) {
    return new Promise((resolve, reject) => {
      let fileName = SaveRequest.fileName(saveRequest) || ''
      let filters = SaveRequest.filters(saveRequest) || []
      let title = SaveRequest.title(saveRequest) || '保存文件'
      let win = electron.remote.getCurrentWindow()
      let option = {
        defaultPath: fileName,
        filters: filters,
        title: title
      }
      electron.remote.dialog.showSaveDialog(win, option, (file) => {
        if (file) {
          resolve(file)
        } else {
          resolve(null)
        }
      })
    })
  }
}
export default SaveDialogAction

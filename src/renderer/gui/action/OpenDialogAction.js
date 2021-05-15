import BaseAction from 'modules/action/BaseAction'
import electron from 'electron'
import OpenRequest from 'general/data/OpenRequest'
class OpenDialogAction extends BaseAction {
  async execute (openRequest) {
    return new Promise((resolve, reject) => {
      let filePath = OpenRequest.filePath(openRequest) || ''
      let properties = OpenRequest.properties(openRequest)
      let filters = OpenRequest.filters(openRequest) || []
      let title = OpenRequest.title(openRequest) || '选择文件'
      let win = electron.remote.getCurrentWindow()
      let option = {
        defaultPath: filePath,
        filters: filters,
        properties: properties,
        title: title
      }
      electron.remote.dialog.showOpenDialog(win, option, (files) => {
        if (files) {
          resolve(files[0])
        } else {
          resolve(null)
        }
      })
    })
  }
}
export default OpenDialogAction

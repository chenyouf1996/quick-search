import fs from 'fs'
import path from 'path'
import BaseEvent from 'modules/event/BaseEvent'
import xlsx from 'xlsx'
import GUIEvents from 'general/enum/GUIEvents'
import { DialogSetters } from '@/gui/enum/StoreSetters'

class SlectId extends BaseEvent {
  async execute (xlsxPath) {
    dispatch(DialogSetters.LOADING_STATUS, true)
    let configFolder = global.store.state.PathState.configFolder
    let files = fs.readdirSync(configFolder)
    let serachResult = []
    for (let fpath of files) {
      if (fpath === 'lang_chinese.json') {
        let json = await this.readJson(fpath, configFolder)
        let data = this.changeXlsx(json)
        serachResult = this.sereachMobile(data)
      }
    }
    let workBook = {
      SheetNames: ['Sheet1'],
      Sheets: {}
    }
    workBook.Sheets['Sheet1'] = xlsx.utils.json_to_sheet(serachResult)
    xlsx.writeFile(workBook, xlsxPath)
    emit(GUIEvents.SUCCESS_MESSAGE, 'SUCCES')
    dispatch(DialogSetters.LOADING_STATUS, false)
  }

  sereachMobile (data) {
    let result = []
    let formatList = []
    data.forEach((item) => {
      let id = item.ID
      if (id.match(/.*(_MOBILE)$/)) {
        item.ind = id.indexOf('_MOBILE')
        formatList.push(item)
      }
    })
    formatList.forEach((item) => {
      let checkStr = item.ID.substr(0, item.ind)
      data.forEach((val) => {
        if (val.ID === checkStr) {
          delete item.ind
          result.push(val)
          result.push(item)
        }
      })
    })
    return result
  }

  readJson (fpath, url) {
    return new Promise((resolve) => {
      let json = {}
      let jsonPath = path.join(url, fpath)
      fs.readFile(jsonPath, 'utf-8', (err, data) => {
        if (!err) {
          data = JSON.parse(data)
          Object.assign(json, data)
          resolve(json)
        }
      })
    })
  }
  changeXlsx (json) {
    let data = []
    let id = new Set()
    for (let i in json) {
      for (let j in json[i]) {
        id.add(j)
      }
    }
    id.forEach(key => {
      let row = {}
      row.ID = key
      for (let j in json) {
        row[j] = ''
        if (json[j][row.ID]) row[j] = json[j][row.ID]
      }
      data.push(row)
    })
    return data
  }
}
export default SlectId

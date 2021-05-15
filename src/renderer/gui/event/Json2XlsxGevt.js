import fs from 'fs'
import BaseEvent from 'modules/event/BaseEvent'
import xlsx from 'xlsx'
import GUIEvents from 'general/enum/GUIEvents'
import { DialogSetters } from '@/gui/enum/StoreSetters'
import DelayUtils from 'modules/library/utils/DelayUtils'

class Json2XlsxGevt extends BaseEvent {
  async execute (xlsxPath) {
    dispatch(DialogSetters.LOADING_STATUS, true)
    await DelayUtils.sleep(100)
    let configFile = global.store.state.PathState.configFolder
    let config = this.getConfig(configFile)
    let json = this.getJson(config)
    let data = this.changeXlsx(json)
    let workBook = {
      SheetNames: ['Sheet1'],
      Sheets: {
        'Sheet1': xlsx.utils.json_to_sheet(data)
      }
    }
    xlsx.writeFile(workBook, xlsxPath)
    emit(GUIEvents.SUCCESS_MESSAGE, 'SUCCES')
    dispatch(DialogSetters.LOADING_STATUS, false)
  }
  getConfig (configFile) {
    let configData = fs.readFileSync(configFile, 'utf8')
    return JSON.parse(configData)
  }
  getJson (config) {
    let data = config.data
    let json = {}
    for (const languageKey in data) {
      if (languageKey === 'comment') continue
      let languageConfig = data[languageKey]
      json[languageKey] = languageConfig
    }
    return json
  }
  readFile (url) {
    return new Promise((resolve, reject) => {
      fs.readFile(url, 'utf-8', (err, data) => {
        if (err) {
          console.error('解析文件失败: ', url)
          resolve({})
        } else {
          let json = JSON.parse(data)
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
export default Json2XlsxGevt

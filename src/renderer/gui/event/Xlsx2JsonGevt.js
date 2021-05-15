import fs from 'fs'
import BaseEvent from 'modules/event/BaseEvent'
import xlsx from 'xlsx'
import GUIEvents from 'general/enum/GUIEvents'
import { DialogSetters } from '@/gui/enum/StoreSetters'
import DelayUtils from 'modules/library/utils/DelayUtils'

class Xlsx2JsonGevt extends BaseEvent {
  async execute (url) {
    dispatch(DialogSetters.LOADING_STATUS, true)
    await DelayUtils.sleep(100)
    let workbook = xlsx.readFile(url)
    let fromData = this.selectFromData(workbook)
    let fileName = this.selectFileName(fromData)

    this.checkSpace(fromData)
    this.checkRepeat(fromData)
    if (this.isSpace || this.repeat) {
      dispatch(DialogSetters.SPACE_ID, this.spaceList)
      dispatch(DialogSetters.REPEAT_ID, this.repeatList)
      dispatch(DialogSetters.ID_DIALOG_STATUS, true)
      this.isSpace = false
      this.repeat = false
    } else {
      this.exportConfig(fileName, fromData)
      emit(GUIEvents.SUCCESS_MESSAGE, 'SUCESS')
    }
    dispatch(DialogSetters.LOADING_STATUS, false)
  }
  selectFromData (workbook) {
    let fromData = []
    for (let sheet in workbook.Sheets) {
      if (workbook.Sheets.hasOwnProperty(sheet)) {
        let data = xlsx.utils.sheet_to_json(workbook.Sheets[sheet])
        fromData = fromData.concat(data)
      }
    }
    return fromData
  }
  selectFileName (fromData) {
    let fileName = []
    for (let i in fromData) {
      for (let j in fromData[i]) {
        if (!fileName.includes(j) && j !== 'ID') fileName.push(j)
      }
    }
    return fileName
  }
  exportConfig (fileName, fromData) {
    let data = {comment: ''}
    fileName.forEach(name => {
      let json = {}
      for (let i in fromData) {
        let id = fromData[i].ID
        if (fromData[i][name]) json[id] = fromData[i][name]
      }
      data[name] = json
    })
    let exportJsonLock = {
      data,
      'metadata': {
        'android_path': null,
        'cli_version': '0.13',
        'cocos_path': 'Assets/StreamingAssets/Localization',
        'onesky_id': '156260',
        'projectName': 'app-apollo',
        'version': '76.101',
        'xcode_path': null
      }
    }
    exportJsonLock = JSON.stringify(exportJsonLock, null, 2)
    let configFile = global.store.state.PathState.configFolder
    fs.writeFileSync(configFile, exportJsonLock)
  }
  checkSpace (fromData) {
    this.spaceList = []
    for (let i = 0; i < fromData.length; i++) {
      if (fromData[i].ID.replace(/\s*/g, '') !== fromData[i].ID) {
        this.isSpace = true
        this.spaceList.push(fromData[i].ID)
      }
    }
  }
  checkRepeat (fromData) {
    let strArray = []
    this.repeatList = []
    for (let i = 0; i < fromData.length; i++) {
      strArray.push(fromData[i].ID)
    }
    let oldLength = strArray.length
    let newLength = new Set(strArray).size
    if (oldLength !== newLength) {
      this.repeat = true
      let hash = {}
      for (let i = 0; i < strArray.length; i++) {
        let checkVal = strArray[i]
        if (!hash[checkVal]) {
          hash[checkVal] = true
        } else {
          this.repeatList.push(checkVal)
        }
      }
    }
  }
}
export default Xlsx2JsonGevt

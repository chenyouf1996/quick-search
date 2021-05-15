
import IpcData from 'modules/library/data/IpcData'
class DebugDataUtil {
  static mapList (list) {
    let re = list.map((item) => {
      let temp = item
      if (item.length === 3) {
        temp = [item[0], IpcData.create(item[1], item[2])]
      }
      return temp
    })
    return new Map(re)
  }
}

export default DebugDataUtil

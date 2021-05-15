import path from 'path'
import AppUtils from 'modules/library/utils/AppUtils'
class TempPathUtils {
  static getTempDir () {
    let _app = AppUtils.app
    let re = path.join(_app.getPath('userData'), '_Temp')
    return re
  }
  static symbol = '<temp>'
  static encode (fpath) {
    let tempDir = TempPathUtils.getTempDir()
    return fpath.replace(tempDir, TempPathUtils.symbol)
  }
  static decode (fpath) {
    if (fpath.startsWith(TempPathUtils.symbol)) {
      let tempDir = TempPathUtils.getTempDir()
      return fpath.replace(TempPathUtils.symbol, tempDir)
    }
    return fpath
  }
}
export default TempPathUtils

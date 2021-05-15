'use strict'
import fs from 'fs'
class ValidateUtils {
  static validateFolder (targetPath, callback) {
    if (targetPath === '') {
      callback()
    } else if (!fs.existsSync(targetPath)) {
      callback(new Error('路径不存在'))
    } else {
      callback()
    }
  }
}

export default ValidateUtils

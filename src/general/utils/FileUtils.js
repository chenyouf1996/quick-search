'use strict'
/**
* Author : fangtao
* Date : 6 Feb 2018
* Support : 525398535@qq.com
*/
import fs from 'fs'
import path from 'path'
import isbinaryfile from 'isbinaryfile'
import AsyncUtils from 'modules/library/utils/AsyncUtils'
import isPathInside from 'is-path-inside'
import AppUtils from 'modules/library/utils/AppUtils'
import WordTypes from 'general/enum/WordTypes'
class FileUtils {
  static load (fpath) {
    let buffer = fs.readFileSync(fpath)
    return buffer
  }
  static del (fpath) {
    let stat = FileUtils.getStat(fpath)
    let isFile = FileUtils.isFile(stat)
    let isFolder = FileUtils.isFolder(stat)
    if (isFile) {
      fs.unlinkSync(fpath)
    } else if (isFolder) {
      let files = fs.readdirSync(fpath)
      AsyncUtils.forEach(files, async (filename) => {
        let fullpath = path.join(fpath, filename)
        this.del(fullpath)
      })
      fs.rmdirSync(fpath)
    }
  }

  static isBinaryPath (fpath) {
    return isbinaryfile.sync(fpath)
  }
  static isBinary (buffer) {
    return isbinaryfile.sync(buffer, buffer.length)
  }
  static isBinaryLite (buffer) {
    let len = buffer.length
    for (let i = 0; i < len; i++) {
      let code = buffer[i]
      let stat = code < 32 && code !== 9 && code !== 10 && code !== 13
      if (stat) {
        return true
      }
    }
    return false
  }
  /**
   * @static
   * @param {any} fpath
   * @returns {fs.Stats}
   * @memberof FileUtils
   */
  static getStat (fpath) {
    let stat
    try {
      stat = fs.lstatSync(fpath)
    } catch (err) {
      console.error(`文件stat无效${fpath} error: ${err}`)
      // 比如文件丢失
    }
    return stat
  }
  static suffixIsFolder (suffix) {
    return suffix === localize(WordTypes.WINDOW_FOLDER)
  }
  static isLink (stat) {
    return stat.isSymbolicLink()
  }
  static isFile (stat) {
    return stat.isFile()
  }
  static isFolder (stat) {
    return stat.isDirectory()
  }
  static async stat (fpath) {
    return new Promise(async (resolve, reject) => {
      fs.lstat(fpath, (err, stats) => {
        if (err) {
          resolve(null)
        } else {
          resolve(stats)
        }
      })
    })
  }

  static isSame (source, target) {
    let sourcePath = path.resolve(source)
    let targetPath = path.resolve(target)
    return sourcePath === targetPath
  }
  static isParent (parentPath, childPath) {
    // let parentType = (typeof parentPath) === 'string' // todo fang 报错打印代码
    // let childType = (typeof childPath) === 'string'
    // let success = parentType && childType
    // if (!success) {
    //   console.error('出错了')
    //   console.dir(parentPath)
    //   console.dir(childPath)
    //   console.error('*****')
    // }
    return isPathInside(childPath, parentPath)
  }
  static relativePath (fpath, catalog) {
    let re = path.join(path.sep, path.relative(catalog, fpath))
    return re
  }

  static async readFile (fpath) {
    return new Promise((resolve) => {
      if (!fs.existsSync(fpath)) {
        resolve(null)
      } else {
        let result = ''
        let fileReader = fs.createReadStream(fpath, {encoding: 'utf8'})
        fileReader.on('data', (data) => {
          result += data
        })
        fileReader.on('end', (err) => {
          if (err) {
            console.log(`读取文件${fpath}出错`, err)
            resolve(null) // todo fang 这里应该规范
          } else {
            resolve(result)
          }
        })
      }
    })
  }
  static async getIcon (path, size = 'noraml') {
    // small - 16x16
    // normal - 32x32
    let app = AppUtils.app
    let icon = await app.getFileIcon(path, {size: size})
    return icon.toDataURL()
  }
  static getSuffix (fpath) {
    let stat = FileUtils.getStat(fpath)
    let isFile = FileUtils.isFile(stat)
    let re = ''
    if (isFile) {
      re = path.extname(fpath)
    } else {
      re = localize(WordTypes.WINDOW_FOLDER)
    }
    return re
  }
}

export default FileUtils

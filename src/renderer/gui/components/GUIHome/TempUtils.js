import $ from 'jquery'
import crypto from 'crypto'
import { remote } from 'electron'
import fs from 'fs'
import path from 'path'

class TempUtils {
  // static langs = ['zh', 'en', 'jp']
  static langs = ['zh', 'en']
  static sleep (ms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(null)
      }, ms)
    })
  }
  static replaceKeyword (url, keyword, replaceWord) {
    let regExp = new RegExp('(' + replaceWord + ')', 'ig')
    return url.replace(regExp, keyword)
  }
  static sendGetRequest (url, data) {
    return new Promise(resolve => {
      $.ajax({
        url: url,
        type: 'get',
        dataType: 'jsonp',
        data: data,
        success: data => { resolve(data) }
      })
    })
  }
  static async getBaiduTranslateResult (keyword, from, to) {
    let url = 'http://api.fanyi.baidu.com/api/trans/vip/translate'
    let appid = '20200626000506975'
    let key = 'ckzbzRQbobqysrs_yQ_e'
    let salt = new Date().getTime()
    let query = keyword
    // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
    let concatStr = appid + query + salt + key
    let sign = this.createHash(concatStr)
    let data = {
      q: query,
      appid: appid,
      salt: salt,
      from: from,
      to: to,
      sign: sign,
      dict: 0
    }
    let re = await this.sendGetRequest(url, data)
    return re
  }
  static async getTranslateList (keyword, from) {
    let translateList = []
    let filterLangs = this.langs.filter(language => language !== from)
    for await (let lang of filterLangs) {
      let re = await this.getBaiduTranslateResult(keyword, from, lang)
      let transResult = re && re['trans_result']
      transResult && transResult.forEach(result => {
        let value = result.dst
        translateList.push({value, lang})
      })
      // await this.sleep(1000)
    }
    return translateList
  }
  static createHash (str) {
    let hash = crypto.createHash('md5')
    return hash.update(str).digest('hex')
  }
  static getCharType (str) {
    if (this.isChinese(str)) {
      return 'zh'
    } else if (this.isEnglish(str)) {
      return 'en'
    }
  }
  static isChinese (str) {
    let regExp = /.*[\u4e00-\u9fa5]+.*$/
    return regExp.test(str)
  }
  static isEnglish (str) {
    let regExp = /[^\u4E00-\u9FA5]/
    return regExp.test(str)
  }
  static setWindowContentSize (width, height) {
    remote.getCurrentWindow().setContentSize(width, height)
  }
  static getFullQueryUrl (url, keyword) {
    let replaceWord = '{{keyword}}'
    return TempUtils.replaceKeyword(url, keyword, replaceWord)
  }
  static async getChildrenFileList (folder) {
    let searchResult = []
    if (!fs.existsSync(folder)) {
      searchResult.push({value: '路径不存在'})
      return searchResult
    }
    let files = await this.readDir(folder)
    let fullPathFiles = files.map(file => path.join(folder, file))
    fullPathFiles.forEach(fullPathFile => {
      searchResult.push({value: fullPathFile})
    })
    return searchResult
  }
  static readDir (fpath) {
    return new Promise(resolve => {
      fs.readdir(fpath, (err, files) => {
        if (err) throw err
        resolve(files)
      })
    })
  }
}

export default TempUtils

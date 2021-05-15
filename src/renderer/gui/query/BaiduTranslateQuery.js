import BaseQuery from '@/gui/query/BaseQuery'
import QueryTypes from 'general/enum/QueryTypes'
import DelayUtils from 'modules/library/utils/DelayUtils'

class BaiduTranslateQuery extends BaseQuery {
  type = QueryTypes.BAIDU_TRANSLATE_QUERY
  label = '百度翻译'
  query = `https://fanyi.baidu.com/?aldtype=16047#auto/zh/${this.placeholder}`
  queryHeader = 'bdfy'
  async getSuggestion (keyword) {
    let resultList = await this.getTranslateList(keyword)
    return resultList
  }
  async getBaiduTranslateResult (keyword, to) {
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
      from: 'auto',
      to: to,
      sign: sign
    }
    let re = await this.sendGetRequest(url, data)
    return re
  }
  async getTranslateList (keyword) {
    let translateList = []
    for await (let lang of this.langs) {
      let re = await this.getBaiduTranslateResult(keyword, lang)
      let transResult = re && re['trans_result']
      transResult && transResult.forEach(result => {
        let value = result.dst
        translateList.push({value, lang})
      })
      await DelayUtils.sleep(1000)
    }
    return translateList
  }
}

export default BaiduTranslateQuery

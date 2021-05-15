import $ from 'jquery'
import crypto from 'crypto'

class BaseQuery {
  type = 'test'
  label = '测试'
  query = `http://test?q=${this.placeholder}`
  queryHeader = 'test'
  placeholder = '{{keyword}}'
  langs = ['zh', 'en']
  async response (keyword) {
    let re
    try {
      re = await this.execute(keyword)
    } catch (error) {
      console.log(`${this.type}查询抛出异常,${error}`)
    }
    return re
  }
  async execute (keyword) {
    return this.getQueryUrl(keyword)
  }
  getQueryUrl (keyword) {
    let regExp = new RegExp('(' + this.placeholder + ')', 'ig')
    return this.query.replace(regExp, keyword)
  }
  async getSuggestion (keyword) {
    return [{value: this.label}]
  }
  sendGetRequest (url, data) {
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
  createHash (str) {
    let hash = crypto.createHash('md5')
    return hash.update(str).digest('hex')
  }
}

export default BaseQuery

'use strict'
import BaseHelper from 'modules/app/unit/BaseHelper'
import KeyRegister from 'modules/library/unit/KeyRegister'
import _ from 'lodash'

class QueryHelper extends BaseHelper {
  constructor (facadeConfig) {
    super()
    let {configQuery} = facadeConfig
    this.register = new KeyRegister(configQuery)
  }
  async response (queryType, keyword) {
    let query = this.take(queryType)
    let queryUrl = await query.response(keyword)
    return queryUrl
  }
  take (type) {
    return this.register.take(type)
  }
  async getSuggestion (queryType, keyword) {
    let query = this.take(queryType)
    let suggestion = await query.getSuggestion(keyword)
    return suggestion
  }
  getQueryConfigList () {
    let configList = []
    let configDict = this.register.dict
    _.forEach(configDict, queryConfig => {
      let {queryHeader, label, type} = queryConfig
      configList.push({queryHeader, label, type})
    })
    return configList
  }
}

export default QueryHelper

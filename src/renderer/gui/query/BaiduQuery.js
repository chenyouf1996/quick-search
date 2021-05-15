import BaseQuery from '@/gui/query/BaseQuery'
import QueryTypes from 'general/enum/QueryTypes'

class BaiduQuery extends BaseQuery {
  type = QueryTypes.BAIDU_QUERY
  label = '百度搜索'
  query = `http://baidu.com/s?wd=${this.placeholder}`
  queryHeader = 'bd'
}

export default BaiduQuery

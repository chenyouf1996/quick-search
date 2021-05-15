import BaseQuery from '@/gui/query/BaseQuery'
import QueryTypes from 'general/enum/QueryTypes'
class BingQuery extends BaseQuery {
  type = QueryTypes.BING_QUERY
  label = 'bing搜索'
  query = `http://cn.bing.com/search?q=${this.placeholder}`
  queryHeader = 'bing'
}
export default BingQuery

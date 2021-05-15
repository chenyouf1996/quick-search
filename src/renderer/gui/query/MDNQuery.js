import BaseQuery from '@/gui/query/BaseQuery'
import QueryTypes from 'general/enum/QueryTypes'
class MDNQuery extends BaseQuery {
  type = QueryTypes.MDN_QUERY
  label = 'MDN站内搜索'
  query = `https://developer.mozilla.org/zh-CN/search?q=${this.placeholder}`
  queryHeader = 'mdn'
}
export default MDNQuery

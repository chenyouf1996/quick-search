import BaseQuery from '@/gui/query/BaseQuery'
import QueryTypes from 'general/enum/QueryTypes'
class TaobaoQuery extends BaseQuery {
  type = QueryTypes.TAOBAO_QUERY
  label = '淘宝站内搜索'
  query = `https://s.taobao.com/search?q=${this.placeholder}`
  queryHeader = 'tb'
}
export default TaobaoQuery

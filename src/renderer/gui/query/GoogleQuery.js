import BaseQuery from '@/gui/query/BaseQuery'
import QueryTypes from 'general/enum/QueryTypes'
class GoogleQuery extends BaseQuery {
  type = QueryTypes.GOOGLE_QUERY
  label = '谷歌搜索'
  query = `https://www.google.com/search?q=${this.placeholder}`
  queryHeader = 'gg'
}
export default GoogleQuery

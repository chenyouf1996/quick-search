import BaseQuery from '@/gui/query/BaseQuery'
import QueryTypes from 'general/enum/QueryTypes'
class NpmQuery extends BaseQuery {
  type = QueryTypes.NPM_QUERY
  label = 'npm站内搜索'
  query = `https://www.npmjs.com/package/${this.placeholder}`
  queryHeader = 'npm'
}
export default NpmQuery

import BaseQuery from '@/gui/query/BaseQuery'
import QueryTypes from 'general/enum/QueryTypes'
class ZhihuQuery extends BaseQuery {
  type = QueryTypes.ZHIHU_QUERY
  label = '知乎站内搜索'
  query = `https://www.zhihu.com/search?q=${this.placeholder}`
  queryHeader = 'zhihu'
}
export default ZhihuQuery

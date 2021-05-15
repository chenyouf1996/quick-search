import BaseQuery from '@/gui/query/BaseQuery'
import QueryTypes from 'general/enum/QueryTypes'
class YoudaoTranslateQuery extends BaseQuery {
  type = QueryTypes.YOUDAO_TRANSLATE_QUERY
  label = '有道翻译'
  query = `http://www.youdao.com/w/eng/${this.placeholder}/#keyfrom=dict2.index`
  queryHeader = 'ydfy'
}
export default YoudaoTranslateQuery

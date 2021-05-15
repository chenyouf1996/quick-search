// 查询
import QueryTypes from 'general/enum/QueryTypes'
import BaiduQuery from '@/gui/query/BaiduQuery'
import BingQuery from '@/gui/query/BingQuery'
import GoogleQuery from '@/gui/query/GoogleQuery'
import ZhihuQuery from '@/gui/query/ZhihuQuery'
import TaobaoQuery from '@/gui/query/TaobaoQuery'
import NpmQuery from '@/gui/query/NpmQuery'
import MDNQuery from '@/gui/query/MDNQuery'
// 翻译
import BaiduTranslateQuery from '@/gui/query/BaiduTranslateQuery'
import YoudaoTranslateQuery from '@/gui/query/YoudaoTranslateQuery'

let list = [
  // 查询
  [QueryTypes.BAIDU_QUERY, new BaiduQuery()],
  [QueryTypes.GOOGLE_QUERY, new GoogleQuery()],
  [QueryTypes.TAOBAO_QUERY, new TaobaoQuery()],
  [QueryTypes.ZHIHU_QUERY, new ZhihuQuery()],
  [QueryTypes.BING_QUERY, new BingQuery()],
  [QueryTypes.MDN_QUERY, new MDNQuery()],
  [QueryTypes.NPM_QUERY, new NpmQuery()],
  // 翻译
  [QueryTypes.BAIDU_TRANSLATE_QUERY, new BaiduTranslateQuery()],
  [QueryTypes.YOUDAO_TRANSLATE_QUERY, new YoudaoTranslateQuery()]
]

let configQuery = new Map(list)
export default configQuery

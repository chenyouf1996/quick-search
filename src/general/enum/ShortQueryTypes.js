import QueryTypes from 'general/enum/QueryTypes'

const list = [
  // 查询
  ['bd', QueryTypes.BAIDU_QUERY],
  ['bing', QueryTypes.BING_QUERY],
  ['gg', QueryTypes.GOOGLE_QUERY],
  ['zhihu', QueryTypes.ZHIHU_QUERY],
  ['tb', QueryTypes.TAOBAO_QUERY],
  ['mdn', QueryTypes.MDN_QUERY],
  ['npm', QueryTypes.NPM_QUERY],
  // 翻译
  ['bdfy', QueryTypes.BAIDU_TRANSLATE_QUERY],
  ['ydfy', QueryTypes.YOUDAO_TRANSLATE_QUERY]
]

const configQueryHeader = new Map(list)
export default configQueryHeader

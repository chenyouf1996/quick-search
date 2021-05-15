import _ from 'lodash'
class CaseUtils {
  static unCase (text) {
    return text.toUpperCase()
  }
  static format (text, caseSensitive) {
    if (!caseSensitive) {
      return CaseUtils.unCase(text)
    } else {
      return text
    }
  }
  static eachCase (word) {
    let re = new Set()
    re.add(CaseUtils.unCase(word))
    re.add(CaseUtils.unCase(_.camelCase(word)))
    re.add(CaseUtils.unCase(_.kebabCase(word)))
    re.add(CaseUtils.unCase(_.lowerCase(word)))
    re.add(CaseUtils.unCase(_.snakeCase(word)))
    return Array.from(re)
  }
}
export default CaseUtils

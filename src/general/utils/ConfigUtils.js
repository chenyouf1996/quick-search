class ConfigUtils {
  static list2KV (list) {
    let re = list.map((item) => {
      return [item.type, item]
    })
    return re
  }
}
export default ConfigUtils

class VueUtils {
  static updateList (list, item) {
    let index = list.indexOf(item)
    if (index !== -1) {
      list.splice(index, 1, item)
    } else {
      console.error(`无效的update ${item}`)
    }
  }
}
export default VueUtils

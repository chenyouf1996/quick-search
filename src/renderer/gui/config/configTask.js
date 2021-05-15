import ConfigUtils from 'general/utils/ConfigUtils'

let list = []
let configTask = new Map(ConfigUtils.list2KV(list))
export default configTask

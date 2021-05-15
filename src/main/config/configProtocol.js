import ConfigUtils from 'general/utils/ConfigUtils'

let list = [
]
let configProtocol = new Map(ConfigUtils.list2KV(list))
export default configProtocol

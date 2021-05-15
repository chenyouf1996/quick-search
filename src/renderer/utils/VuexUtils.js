import Flynn from 'general/Flynn'
import _ from 'lodash'
import HashUtils from 'modules/library/utils/HashUtils'
import { configSyncGlobal, configSyncWorkspace } from '@/config/configSync'

class VuexUtils {
  static init () {
    let keys = Array.from(configSyncGlobal.keys())
    keys.forEach(key => {
      let value = Flynn._.store.vGetter(key)
      if (value !== undefined) {
        global.store.pureCommit(key, value) // todo fang 这里需要进行类型判断
        // console.error(key, obj)
      }
    })
  }
  static worksapceInit (catalog) {
    let workspaceKey = HashUtils.encode(catalog)
    let keys = Array.from(configSyncWorkspace.keys())
    keys.forEach(key => {
      let value = Flynn._.store.wGetter(workspaceKey, key)
      if (value !== undefined) {
        global.store.pureCommit(key, value) // todo fang 这里需要进行类型判断
      }
    })
  }
  static mapActions (mutations) {
    let re = {}
    _.forEach(mutations, (value, key) => {
      re[key] = (store, data) => {
        global.store.pureCommit(key, data)
      }
    })
    return re
  }
}
export default VuexUtils

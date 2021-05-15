import ProcessTypes from 'modules/app/enum/ProcessTypes'
import ISO from 'modules/app/ISO'
import LogicEvents from 'general/enum/LogicEvents'
import GUIEvents from 'general/enum/GUIEvents'
import {configSyncGlobal, configSyncNone, configSyncWorkspace} from '@/config/configSync'
let _store = null
const save2Global = (setterType, lambda) => { // todo fang 应该改为阈值节流的方式存储数据
}
const save2Workspace = (setterType, lambda) => { // todo fang 应该改为阈值节流的方式存储数据
}

const SyncPlugin = store => {
  _store = store
  _store.subscribeAction({
    after: (action, state) => {
      let {type, payload} = action
      let syncEnable = false
      if (configSyncGlobal.has(type)) {
        save2Global(type, configSyncGlobal.get(type))
        console.warn(`global存储了${type}`)
        syncEnable = true
      }
      if (configSyncWorkspace.has(type)) {
        save2Workspace(type, configSyncWorkspace.get(type))
        console.warn(`workspace存储了${type}`)
        syncEnable = true
      }
      if (configSyncNone.has(type)) {
        syncEnable = true
      }
      if (syncEnable) {
        let data = {key: type, value: payload}
        if (ISO.processType === ProcessTypes.GUI) {
          emit(LogicEvents.VUEX, data)
        } else {
          emit(GUIEvents.VUEX, data)
        }
      }
    }
  })
}

export {
  SyncPlugin
}

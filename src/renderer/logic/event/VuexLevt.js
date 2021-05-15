import BaseEvent from 'modules/event/BaseEvent'

class VuexLevt extends BaseEvent {
  execute (data) {
    let {key, value} = data
    console.log(`vuexLevt ${key}`)
    global.store.pureCommit(key, value)
  }
}
export default VuexLevt

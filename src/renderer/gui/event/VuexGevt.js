import BaseEvent from 'modules/event/BaseEvent'

class VuexGevt extends BaseEvent {
  execute (data) {
    let {key, value} = data
    console.log(`vuexGevt ${key}`)
    global.store.pureCommit(key, value)
  }
}
export default VuexGevt

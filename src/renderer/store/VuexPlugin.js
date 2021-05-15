const VuexPlugin = store => {
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    // let {type, payload} = mutation
    // console.error(type, payload)
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    // console.error(mutation.type)
  })
  store.subscribeAction((action, state) => {
    // console.log(action.type)
    // console.log(action.payload)
  })
}
export default VuexPlugin

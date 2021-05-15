import _ from 'lodash'
class Counter {
  hitList = []
  add (key) {
    this.hitList.push(key)
  }
  info () {
    return _.countBy(this.hitList)
  }
}
export default Counter

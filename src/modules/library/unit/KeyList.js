class KeyList {
  dict = {}
  _takeList (key) {
    let hasKey = key in this.dict
    if (!hasKey) {
      this.dict[key] = []
    }
    return this.dict[key]
  }
  length (key) {
    return this._takeList(key).length
  }
  push (key, item) {
    this._takeList(key).push(item)
  }
  pop (key) {
    return this._takeList(key).pop()
  }
  shift (key) {
    return this._takeList(key).shift()
  }
  unshift (key, item) {
    this._takeList(key).unshift(item)
  }
}
export default KeyList

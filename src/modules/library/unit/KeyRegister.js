class KeyRegister {
  constructor (config = null, customRegist = null) {
    if (customRegist) {
      this.customRegist = customRegist
    }
    config && this.regist(config)
  }
  dict = {}
  /**
   * 函数类型
   * 参数三个
   * 第一个是存储对象
   * 第二个是key
   * 第三个是value
   */
  customRegist = (storage, key, value) => {
    storage[key] = value
  }
  values () {
    return Object.values(this.dict)
  }
  keys () {
    return Object.keys(this.dict)
  }
  get source () {
    return this.dict
  }
  regist (config) {
    config.forEach((value, key) => {
      this.registOne(key, value)
    })
  }
  registOne (type, item) {
    this.customRegist(this.dict, type, item)
  }
  take (type, nullDefault = null) {
    if (!type) return nullDefault
    let item = this.dict[type]
    return item || nullDefault
  }
}
export default KeyRegister

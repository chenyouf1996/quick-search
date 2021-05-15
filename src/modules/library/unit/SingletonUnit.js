class SingletonUnit {
  constructor (cls) {
    this.cls = cls
    this.instance = null
    this.isDestroy = false
  }
  getInstance () {
    if (!this.instance) {
      let Cls = this.cls
      this.instance = new Cls()
    }
    return this.instance
  }
  destroy () {
    this.cls = null
    this.instance = null
    this.isDestroy = true
  }
}
export default SingletonUnit

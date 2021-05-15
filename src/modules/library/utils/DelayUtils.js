class DelayUtils {
  static async sleep (ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, ms)
    })
  }
  static async waitTick () {
    return new Promise((resolve, reject) => {
      setImmediate(resolve)
    })
  }
}
export default DelayUtils

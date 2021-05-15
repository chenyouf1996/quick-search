import _async from 'async'
class AsyncUtils {
  static async map (iter, fn) {
    return new Promise(async (resolve) => {
      let re = []
      _async.eachOfLimit(iter, 32, async (item, index, callback) => {
        let single = await fn(item, index)
        re[index] = single
        setImmediate(callback)
      }, () => {
        resolve(re)
      })
    })
  }
  static async filter (iter, fn) {
    return new Promise(async (resolve) => {
      let re = []
      _async.eachOfLimit(iter, 32, async (item, index, callback) => {
        let has = await fn(item, index)
        if (has) re.push(item)
        setImmediate(callback)
      }, () => {
        resolve(re)
      })
    })
  }
  /**
   * 一个异步迭代器
   * @param {*} iter 迭代对象
   * @param {*} fn 当函数返回false时中止循环
   * @param {*} limit 并发数量
   */
  static async forEach (iter, fn, limit = 32) {
    return new Promise(async (resolve) => {
      _async.eachOfLimit(iter, limit, async (item, index, callback) => {
        let fnResult = await fn(item, index)
        let stop = fnResult === false // 必须明确返回false 才会中止loop
        let point = stop ? new Error('暂停队列') : null
        setImmediate(callback, point)
      }, () => {
        resolve()
      })
    })
  }
}
export default AsyncUtils

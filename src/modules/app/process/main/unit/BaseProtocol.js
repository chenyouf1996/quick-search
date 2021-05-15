
class BaseProtocol {
  type = ''
  response (url) {
    let content = url.split(this.type)[1]
    content = decodeURI(content)
    try {
      this.execute(content)
    } catch (err) {
      console.error(`${this.constructor.name} ${url}`, err)
    }
  }
  execute (content) {

  }
}

export default BaseProtocol

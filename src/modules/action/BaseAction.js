
class BaseAction {
  async response (data) {
    let re
    try {
      re = await this.execute(data)
    } catch (err) {
      console.error(`${this.constructor.name}`, err)
    }
    return re
  }
  async execute (data) {

  }
}

export default BaseAction

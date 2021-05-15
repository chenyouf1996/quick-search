import { remote } from 'electron'

class BaseMenu {
  menu = null
  dynamic = false
  async response (data) {
    if (!this.menu || this.dynamic) {
      let template
      try {
        template = await this.execute(data)
      } catch (err) {
        console.error(`${this.constructor.name} 菜单execute报错`, err)
        template = []
      }
      this.menu = remote.Menu.buildFromTemplate(template)
    }
    return this.menu
  }
  async execute (data) {
    return []
  }
}

export default BaseMenu

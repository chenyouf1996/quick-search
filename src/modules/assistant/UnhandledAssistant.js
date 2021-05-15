import BaseAssistant from 'modules/assistant/BaseAssistant'
import unhandled from 'electron-unhandled'

import ISO from 'modules/app/ISO'
class UnhandledAssistant extends BaseAssistant {
  constructor (stdout) {
    super(null)
    this.stdout = stdout
  }
  init () {
    if (!ISO.isDebug) {
      unhandled({logger: this.logger, showDialog: !ISO.isDebug})
    }
  }
  logger (...msg) {
    msg = String(msg)
    console.error(msg)
    this.stdout.error(msg)
  }
}

export default UnhandledAssistant

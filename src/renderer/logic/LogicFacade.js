'use strict'
import BaseFacade from 'modules/app/unit/BaseFacade'
import SingletonUnit from 'modules/library/unit/SingletonUnit'
import ProcessTypes from 'modules/app/enum/ProcessTypes'
class LogicFacade extends BaseFacade {
  processType = ProcessTypes.LOGIC
  config = null
  initComplete () {
  }
  registHelper () {
  }
  static singleton = new SingletonUnit(LogicFacade)
  /**
   * @returns {LogicFacade}
   */
  static getInstance () {
    return LogicFacade.singleton.getInstance()
  }
}

export default LogicFacade

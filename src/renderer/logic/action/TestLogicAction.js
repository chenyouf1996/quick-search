import BaseAction from 'modules/action/BaseAction'

class TestLogicAction extends BaseAction {
  execute (data) {
    if (typeof (data) === 'undefined') {
      data = ''
    }
    let re = `${data}_LogicAction`
    return re
  }
}

export default TestLogicAction

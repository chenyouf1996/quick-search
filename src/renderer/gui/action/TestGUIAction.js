import BaseAction from 'modules/action/BaseAction'

class TestGUIAction extends BaseAction {
  execute (data) {
    if (typeof (data) === 'undefined') {
      data = ''
    }
    let re = `${data}_GUIAction`
    return re
  }
}
export default TestGUIAction

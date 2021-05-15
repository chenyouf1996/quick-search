import BaseEvent from 'modules/event/BaseEvent'

class TestLogicLevt extends BaseEvent {
  execute (data) {
    console.log('TEST LOGIC EVENT: ', data)
  }
}
export default TestLogicLevt

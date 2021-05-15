const Enum = {
  TYPE: 'type',
  START_EVENT: 'startEvent',
  EVENT_HOOK: 'endHook',
  PARAM: 'param'
}
class TaskData {
  static create (type, startEvent, param, eventHook) {
    let re = {}
    re[Enum.TYPE] = type
    re[Enum.START_EVENT] = startEvent
    re[Enum.EVENT_HOOK] = eventHook
    re[Enum.PARAM] = param
    return re
  }
  static type (taskData) {
    return taskData[Enum.TYPE]
  }
  static startEvent (taskData) {
    return taskData[Enum.START_EVENT]
  }
  static eventHook (taskData) {
    return taskData[Enum.EVENT_HOOK]
  }
  static param (taskData) {
    return taskData[Enum.PARAM]
  }
}
export default TaskData

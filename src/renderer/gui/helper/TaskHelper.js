import BaseHelper from 'modules/app/unit/BaseHelper'
import KeyRegister from 'modules/library/unit/KeyRegister'
import IpcData from 'modules/library/data/IpcData'
import TaskData from 'general/data/TaskData'
import GUIActions from 'general/enum/GUIActions'

class TaskHelper extends BaseHelper {
  queue = []
  currentHook = null
  constructor (facadeConfig) {
    super()
    let {configTask} = facadeConfig
    this.register = new KeyRegister(configTask)
  }
  /**
   * @param {any} type
   * @returns {BaseTask}
   * @memberof TaskHelper
   */
  take (type) {
    return this.register.take(type)
  }
  finishTask (eventType) {
    if (this.currentHook === eventType) {
      this.currentHook = null
      this.check()
    }
  }
  addTask (queue) {
    queue.forEach((ipcData) => {
      let taskType = IpcData.type(ipcData)
      let param = IpcData.data(ipcData)
      let baseTask = this.take(taskType)
      let taskData = baseTask.create(param)
      this.queue.push(taskData)
    })
    this.check()
  }
  check () {
    if (this.currentHook) {
      return
    }
    if (this.queue.length < 1) {
      // console.error('没有任务了!')
      run(GUIActions.ALERT, '任务队列运行完成.')
      return
    }
    setTimeout(() => {
      let taskData = this.queue.shift()
      console.log(taskData)
      let eventType = TaskData.startEvent(taskData)
      let data = TaskData.param(taskData)
      this.currentHook = TaskData.eventHook(taskData)
      emit(eventType, data)
    }, 100) // todo fang 因为一些状态不稳定所以这里先延时处理
  }
}
export default TaskHelper

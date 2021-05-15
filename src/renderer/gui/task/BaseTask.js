import TaskData from 'general/data/TaskData'

class BaseTask {
  type = 'test'
  start = ''
  end = ''
  label = '默认标签'
  create (param) {
    let taskData = TaskData.create(this.type, this.start, param, this.end)
    return taskData
  }
}
export default BaseTask

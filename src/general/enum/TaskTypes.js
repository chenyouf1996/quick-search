import EnumUtils from 'modules/library/utils/EnumUtils'

const TaskTypes = {
  LOAD_CATALOG: 'loadCatalog',
  SEARCH: 'search',
  SAVE_DOC: 'saveDoc',
  SORT: 'sort',
  SET_ATTRIBUTE: 'setAttribute',
  SAVE_CONFIG: 'saveConfig',
  SET_SORT: 'setSort'
}
EnumUtils.wrap(TaskTypes, 'TaskTypes')
export default TaskTypes

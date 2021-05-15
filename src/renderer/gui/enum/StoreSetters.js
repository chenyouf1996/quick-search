import EnumUtils from 'modules/library/utils/EnumUtils'

const DialogSetters = {
  SETTING_DIALOG: 'settingDialog',
  MODIFY_DIALOG: 'modifyDialog'
}

const QuerySetters = {
  QUERY_CONFIG_LIST: 'queryConfigList'
}

EnumUtils.wrap(DialogSetters, 'DialogSetters')
EnumUtils.wrap(QuerySetters, 'QuerySetters')

export {
  DialogSetters,
  QuerySetters
}

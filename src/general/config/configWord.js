import WordTypes from 'general/enum/WordTypes'
/* eslint-disable no-template-curly-in-string */

let list = [
  [WordTypes.WINDOW_FOLDER, '文件夹'],
  [WordTypes.DEMO_EVENT_TITLE, '输入传入Event的值,对应线程的Console中会打印接受到的事件的值'],
  [WordTypes.BTN_GUI_EVENT, '发送GUIEvent'],
  [WordTypes.BTN_LOGIC_EVENT, '发送LogicEvent'],
  [WordTypes.DEMO_ACTION_TITLE, '输入传入Action的值,执行Actin后会在传的值后面添加对应线程的后缀并返回'],
  [WordTypes.BTN_GUI_ACTION, '发送GUIAction'],
  [WordTypes.BTN_LOGIC_ACTION, '发送LogicAction'],
  [WordTypes.DEMO_ACTION_RESULT, 'Action结果: '],
  [WordTypes.DEMO_VUEX_TITLE, 'Vuex'],
  [WordTypes.SETTING_PARH_DIALOG_TITLE, '选择文本配置文件'],
  [WordTypes.SELECT_XLSX_FILE, '选择xlsx文件'],
  [WordTypes.SAVA_XLSX_FILE, '保存xlsx文件']
]
let configWord = new Map(list)
export default configWord

import BaseEvent from 'modules/event/BaseEvent'
import electron, { app } from 'electron'
import {createGroup, createItem, createRole, createSeparator} from 'modules/library/utils/MenuUtils'
import ISO from 'modules/app/ISO'
import MainEvents from 'general/enum/MainEvents'
class InitMenuMevt extends BaseEvent {
  execute () {
    const menu = electron.Menu.buildFromTemplate(InitMenuMevt.template())
    electron.Menu.setApplicationMenu(menu)
  }
  static template () {
    let fileGroup = createGroup('文件', [
      createItem('新建', MainEvents.CREATE_NEW_SEARCH, null, 'CommandOrControl+N'),
      createSeparator(),
      createRole('退出', 'quit')
    ])
    let windowEditGroup = createGroup('编辑', [
      createRole('撤销', 'undo'),
      createRole('重做', 'redo'),
      createSeparator(),
      createRole('全选', 'selectall'),
      createRole('复制', 'copy'),
      createRole('剪切', 'cut'),
      createRole('黏贴', 'paste')
    ])
    let macEditGroup = createGroup('编辑', [
      createRole('撤销', 'undo'),
      createRole('重做', 'redo'),
      createSeparator(),
      createRole('全选', 'selectall'),
      createRole('复制', 'copy'),
      createRole('剪切', 'cut'),
      createRole('黏贴', 'paste'),
      createSeparator(),
      createGroup('听写', [
        createRole('开始听写', 'startspeaking'),
        createRole('结束听写', 'stopspeaking')
      ])
    ])

    let viewGroup = createGroup('视图', [
      createRole('重载', 'reload'),
      createRole('Forcereload', 'forcereload'),
      createRole('Toggledevtools', 'toggledevtools'),
      createSeparator(),
      createRole('重置缩放', 'resetzoom', 'CommandOrControl+0'),
      createRole('放大', 'zoomin', 'CommandOrControl+='),
      createRole('缩小', 'zoomout', 'CommandOrControl+-'),
      createSeparator(),
      createRole('Togglefullscreen', 'togglefullscreen')
    ])
    let macAppGroup = createGroup(app.getName(), [
      createRole('About', 'about'),
      createSeparator(),
      createGroup('Services', [], 'services'),
      createSeparator(),
      createRole('Hide', 'hide'),
      createRole('Hideothers', 'hideothers'),
      createRole('Unhide', 'unhide'),
      createSeparator(),
      createRole('Quit', 'quit')
    ])
    let macInterfaceGroup = createGroup('窗口', [
      createRole('最小化', 'minimize'),
      createRole('Zoom', 'zoom'),
      createSeparator(),
      createRole('Front', 'front')
    ])
    let macHelpGroup = createGroup('帮助', [
      createItem('查看日志', MainEvents.OPEN_LOG_DIR),
      createItem('清除缓存', MainEvents.CLEAN_CACHE)
    ], 'help')
    let windowInterfaceGroup = createGroup('窗口', [
      createRole('最小化', 'minimize')
    ])
    let windowHelpGroup = createGroup('帮助', [
      createItem('查看日志', MainEvents.OPEN_LOG_DIR),
      createItem('清除缓存', MainEvents.CLEAN_CACHE)
    ])
    let re = []
    if (ISO.isMac) {
      re = [macAppGroup, fileGroup, macEditGroup, viewGroup, macInterfaceGroup, macHelpGroup]
    } else {
      re = [fileGroup, windowEditGroup, viewGroup, windowInterfaceGroup, windowHelpGroup]
    }
    return re
  }
}
export default InitMenuMevt

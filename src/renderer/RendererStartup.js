import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import App from '@/App'
import router from '@/router'
import ISO from 'modules/app/ISO'
import Flynn from 'general/Flynn'
import {remote} from 'electron'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueClipboard from 'vue-clipboard2'
import SvgIcon from '@/gui/components/SvgIcon'
import '@/assets/icons/index'
import modules from '@/store/modules'
import VuexPlugin from '@/store/VuexPlugin'
import {SyncPlugin} from '@/store/SyncPlugin'
import WindowPropertys from 'modules/app/enum/WindowPropertys'
import ProcessTypes from 'modules/app/enum/ProcessTypes'
import GUIFacade from '@/gui/GUIFacade'
import LogicFacade from '@/logic/LogicFacade'
import contentmenu from 'v-contextmenu'
import EnvTypes from 'modules/app/enum/EnvTypes'
import '@/assets/css/contextmenu.css'
import '@/assets/css/animate.css'
import configGUI from '@/gui/config/configGUI'
import configLogic from '@/logic/config/configLogic'
import HashUtils from 'modules/library/utils/HashUtils'

function RendererStartup () {
  if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
  global.Promise = require('bluebird')
  let win = remote.getCurrentWindow()
  ISO.processType = win[WindowPropertys.TYPE]
  ISO.session = win[WindowPropertys.SESSION] // gui 和 logic 的相等
  Vue.http = Vue.prototype.$http = axios
  Vue.config.productionTip = false
  console.log(`我是${ISO.processType}`)
  Vue.use(ElementUI)
  Vue.use(VueClipboard)
  Vue.use(Vuex)
  Vue.use(contentmenu)
  Vue.component('svg-icon', SvgIcon)
  let store = new Vuex.Store({
    modules,
    strict: ISO.envType !== EnvTypes.PRODUCTION,
    plugins: [VuexPlugin, SyncPlugin]
  })
  let pureCommit = store.commit
  store.pureCommit = pureCommit
  store.commit = (type, value) => {
    throw new Error('无法使用commit,请使用dispatch')
  }
  global.store = store
  global.dispatch = global.store.dispatch
  global.hash = HashUtils.encode

  let facade
  let config
  if (ISO.processType === ProcessTypes.GUI) {
    facade = GUIFacade.getInstance()
    config = configGUI
  } else if (ISO.processType === ProcessTypes.LOGIC) {
    facade = LogicFacade.getInstance()
    config = configLogic
  }
  Flynn._.registFacade(facade, config)
  Flynn._.unhandled.init()

  new Vue({
    components: { App },
    router,
    store,
    template: '<App/>'
  }).$mount('#app')
}
export default RendererStartup

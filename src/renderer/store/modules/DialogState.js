import { DialogSetters } from '@/gui/enum/StoreSetters'
import VuexUtils from '@/utils/VuexUtils'

const state = {
  settingDialog: false,
  modifyDialog: false
}

const mutations = {
  [DialogSetters.SETTING_DIALOG] (state, data) {
    state.settingDialog = data
  },
  [DialogSetters.MODIFY_DIALOG] (state, data) {
    state.modifyDialog = data
  }
}

const actions = VuexUtils.mapActions(mutations)

export default {
  state,
  mutations,
  actions
}

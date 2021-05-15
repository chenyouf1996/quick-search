import { QuerySetters } from '@/gui/enum/StoreSetters'
import { QueryMutations } from '@/gui/enum/StoreMutations'
import VuexUtils from '@/utils/VuexUtils'
import _ from 'lodash'

const state = {
  queryConfigList: []
}

const mutations = {
  [QuerySetters.QUERY_CONFIG_LIST] (state, data) {
    state.queryConfigList = data
  },
  [QueryMutations.UPDATE_QUERY_CONFIG_LIST] (state, data) {
    let {queryHeader, index} = data
    let cloneQueryConfigList = _.cloneDeep(state.queryConfigList)
    cloneQueryConfigList[index].queryHeader = queryHeader
    dispatch(QuerySetters.QUERY_CONFIG_LIST, cloneQueryConfigList)
  }
}

const actions = VuexUtils.mapActions(mutations)

export default {
  state,
  mutations,
  actions
}

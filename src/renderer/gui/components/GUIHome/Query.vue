<template>
  <div id="query-wrapper">
    <!-- 带提示的输入框 -->
    <transition
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeInLeft">
      <el-autocomplete
        placeholder="查询头 + 关键字，如：bd abc"
        @keydown.enter.native="searchHandler"
        ref="queryRef"
        :fetch-suggestions="queryAsync"
        :debounce="1000"
        :trigger-on-focus="false"
        v-model="query"
        @focus="autocompleteInputFocus"
        @blur="autocompleteInputBlur">
        <el-button slot="append" icon="el-icon-setting" @click="settingHandler" />
      </el-autocomplete>
    </transition>
    <setting-dialog />
  </div>
</template>

<script>
import { shell, remote } from 'electron'
import TempUtils from './TempUtils'
import GUIFacade from '@/gui/GUIFacade'
import SettingDialog from '@/gui/components/GUIHome/SettingDialog'
import { DialogSetters, QuerySetters } from '@/gui/enum/StoreSetters'

export default {
  name: 'query',
  data () {
    return {
      callback: null,
      query: '',
      queryResult: []
    }
  },
  created () {
    let queryConfigList = GUIFacade.getInstance().queryHelper.getQueryConfigList()
    dispatch(QuerySetters.QUERY_CONFIG_LIST, queryConfigList)
  },
  components: { SettingDialog },
  mounted () {
    this.$refs.queryRef.focus()
  },
  computed: {
    queryConfigList () {
      return this.$store.state.QueryState.queryConfigList
    },
    shortQueryHeader () {
      // 查询头(缩写)
      let queryTirm = this.query.trim()
      return queryTirm.split(' ')[0]
    },
    queryKeyword () {
      // 查询关键字
      let queryTirm = this.query.trim()
      return queryTirm.split(' ')[1]
    },
    currentQuery () {
      // 查询是否存在
      let queryConfig = this.queryConfigList.find(queryConfig => {
        return queryConfig.queryHeader === this.shortQueryHeader
      })
      return queryConfig
    },
    fullQueryHeader () {
      // 查询头(完整)
      return this.currentQuery && this.currentQuery.type
    },
    settingDialogVisibl () {
      return this.$store.state.DialogState.settingDialog
    }
  },
  methods: {
    async searchHandler () {
      if (!this.currentQuery) return
      // 搜索
      let queryHelper = GUIFacade.getInstance().queryHelper
      let queryUrl = await queryHelper.response(
        this.fullQueryHeader,
        this.queryKeyword
      )
      shell.openExternal(queryUrl)
      // 回车后的操作
      this.query = ''
      remote.getCurrentWindow().hide()
      TempUtils.setWindowContentSize(600, 40)
    },
    async queryAsync (queryString, cb) {
      if (!this.callback) this.callback = cb
      this.queryResult = []
      let resultList = []
      if (!this.shortQueryHeader || !this.currentQuery) {
        resultList.push({ value: '查询头未输入或不存在' })
      } else if (!this.queryKeyword) {
        resultList.push({ value: '查询关键字未输入' })
      } else {
        let queryHelper = GUIFacade.getInstance().queryHelper
        let suggestion = await queryHelper.getSuggestion(
          this.fullQueryHeader,
          this.queryKeyword
        )
        resultList = suggestion
      }
      this.queryResult = resultList
      cb(this.queryResult)
    },
    queryFocus () {
      this.$refs.queryRef.focus()
    },
    autocompleteInputFocus () {
      TempUtils.setWindowContentSize(600, 600)
    },
    async autocompleteInputBlur () {
      // await TempUtils.sleep(700)
      // this.callback && this.callback(this.queryResult)
      // this.queryResult = []
      TempUtils.setWindowContentSize(600, 40)
    },
    settingHandler () {
      dispatch(DialogSetters.SETTING_DIALOG, true)
    }
  }
}
</script>

<style lang="scss">
#query-wrapper {
  .el-autocomplete {
    display: block;
  }
}
</style>

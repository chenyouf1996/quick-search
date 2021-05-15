<template>
  <el-dialog
    width="50%"
    title="修改查询头"
    :visible.sync="modifyDialogVisible"
    append-to-body
    id="modify-dialog">
    <el-input
      placeholder="请输入新的查询头"
      v-model="queryHeader"
      @keydown.enter.native="confirmHandler"
      ref="modifyInputRef">
      <template slot="prepend">{{queryLabel}}</template>
      <el-button slot="append" icon="el-icon-finished" @click="confirmHandler" />
    </el-input>
  </el-dialog>
</template>

<script>
import { DialogSetters } from '@/gui/enum/StoreSetters'
import { QueryMutations } from '@/gui/enum/StoreMutations'
import GUIEvents from 'general/enum/GUIEvents'

export default {
  name: 'modify-dialog',
  data () {
    return {
      queryHeader: ''
    }
  },
  props: ['queryListIndex', 'currentQueryHeader', 'queryLabel'],
  computed: {
    modifyDialogVisible: {
      get () {
        return this.$store.state.DialogState.modifyDialog
      },
      set (val) {
        dispatch(DialogSetters.MODIFY_DIALOG, val)
      }
    }
  },
  methods: {
    confirmHandler () {
      if (!this.queryHeader) {
        emit(GUIEvents.WARNING_MESSAGE, '查询头为空')
        return
      }
      let data = { queryHeader: this.queryHeader, index: this.queryListIndex }
      dispatch(QueryMutations.UPDATE_QUERY_CONFIG_LIST, data)
      this.modifyDialogVisible = false
    }
  },
  watch: {
    modifyDialogVisible (val) {
      if (!val) return
      this.queryHeader = this.currentQueryHeader
      this.$nextTick(() => {
        this.$refs.modifyInputRef.focus()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
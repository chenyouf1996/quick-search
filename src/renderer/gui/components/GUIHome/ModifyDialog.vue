<template>
  <div>
    <el-input
      placeholder="请输入新的查询头"
      v-model="queryHeader"
      @keydown.enter.native="confirmHandler"
      ref="modifyInputRef"
    >
      <template slot="prepend">{{ queryLabel }}</template>
      <el-button
        slot="append"
        icon="el-icon-finished"
        @click="confirmHandler"
      />
    </el-input>
  </div>
</template>

<script>
import { QueryMutations } from '@/gui/enum/StoreMutations'
import GUIEvents from 'general/enum/GUIEvents'

export default {
  name: 'modify-dialog',
  data () {
    return {

    }
  },
  computed: {
    queryHeader: {
      get () {
        return this.currentQueryHeader
      },
      set (val) {
        this.$emit('update:currentQueryHeader', val)
      }
    }
  },
  props: ['queryListIndex', 'currentQueryHeader', 'queryLabel'],
  methods: {
    confirmHandler () {
      if (!this.queryHeader) {
        emit(GUIEvents.WARNING_MESSAGE, '查询头为空')
        return
      }
      let data = { queryHeader: this.queryHeader, index: this.queryListIndex }
      dispatch(QueryMutations.UPDATE_QUERY_CONFIG_LIST, data)
    }
  }
}
</script>

<style lang="scss">
.el-dropdown-menu {
  padding: 0;
  .el-dropdown-menu__item {
    padding: 0;
  }
}
</style>
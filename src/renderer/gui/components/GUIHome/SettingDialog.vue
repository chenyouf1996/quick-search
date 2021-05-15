<template>
  <!-- <transition-group enter-active-class="animated fadeIn"> -->
  <el-dialog
    :modal="false"
    title="查询头设置"
    :visible.sync="settingDialogVisible"
    width="70%"
    class="setting-dialog"
    :key="Date.now()"
  >
    <!-- 查询配置表格 -->
    <el-table :data="queryConfigList" stripe size="small" height="70vh">
      <el-table-column
        prop="label"
        label="查询名称"
        width="210"
      ></el-table-column>
      <el-table-column
        prop="queryHeader"
        label="查询头"
        width="210"
      ></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-dropdown :hide-on-click="false" trigger="click">
            <span class="el-dropdown-link">
              <el-button
                type="text"
                size="small"
                @click="modifyClickHandler(scope)"
                >修改
              </el-button>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <!-- 修改查询头弹窗 -->
                <modify-dialog
                  :queryListIndex="queryListIndex"
                  :currentQueryHeader.sync="currentQueryHeader"
                  :queryLabel="queryLabel"
                />
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
  </el-dialog>

  <!-- </transition-group> -->
</template>

<script>
import { DialogSetters } from '@/gui/enum/StoreSetters'
import ModifyDialog from '@/gui/components/GUIHome/ModifyDialog'
import TempUtils from './TempUtils'
import GUIEvents from 'general/enum/GUIEvents'

export default {
  name: 'setting-dialog',
  data () {
    return {
      modifyDialogVisible: false,
      queryListIndex: 0,
      currentQueryHeader: '',
      queryLabel: ''
    }
  },
  components: { ModifyDialog },
  computed: {
    settingDialogVisible: {
      get () {
        return this.$store.state.DialogState.settingDialog
      },
      set (val) {
        dispatch(DialogSetters.SETTING_DIALOG, val)
      }
    },
    queryConfigList () {
      return this.$store.state.QueryState.queryConfigList
    }
  },
  methods: {
    modifyClickHandler (scope) {
      dispatch(DialogSetters.MODIFY_DIALOG, true)
      this.queryListIndex = scope.$index
      this.currentQueryHeader = scope.row.queryHeader
      this.queryLabel = scope.row.label
    }
  },
  watch: {
    async settingDialogVisible (val) {
      if (val) {
        TempUtils.setWindowContentSize(900, 600)
        emit(GUIEvents.WINDOW_CENTER, 0)
      } else {
        TempUtils.setWindowContentSize(600, 40)
        emit(GUIEvents.WINDOW_CENTER, 100)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.setting-dialog {
  overflow: hidden;
}
</style>
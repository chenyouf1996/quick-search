<template>
  <div id='app'>
    <GUI-Home v-if="isGUI" />
    <logic-home v-if="isLogic" />
  </div>
</template>

<script>
import GUIHome from '@/gui/components/GUIHome'
import LogicHome from '@/logic/components/LogicHome'
import ProcessTypes from 'modules/app/enum/ProcessTypes'
import ISO from 'modules/app/ISO'
export default {
  name: 'cyf-search',
  components: {
    GUIHome,
    LogicHome
  },
  created () {
    // 阻止空格的默认事件
    document.onkeydown = (event) => {
      if (event.target.nodeName === 'TEXTAREA' || event.target.nodeName === 'INPUT') {
        return
      }
      if (event.keyCode === 32) {
        event.preventDefault()
      }
    }
  },
  computed: {
    isGUI () {
      return ISO.processType === ProcessTypes.GUI
    },
    isLogic () {
      return ISO.processType === ProcessTypes.LOGIC
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/font/font.css";
@import "~@/assets/scss/global.scss";
@import "~@/assets/scss/app.scss";
html,body{
  height: 100vh;
  overflow: hidden;
}
#app{
  height: 100%;
}
</style>


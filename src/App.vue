<template>
  <Layout />
  <r-modal v-model:show="showSearch" @clickMask="clickSearchModalMask" :bodyOverflow="false">
    <searchModal />
  </r-modal>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import searchModal from './components/searchModal/index.vue';
import Layout from './layout/index.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'App',
  components: {
    Layout, searchModal
  },
  mounted() {
    // console.log('mounted', this.$route)
  },
  setup(){
    const store = useStore()
    const clickSearchModalMask = function(){
      store.commit('setShowSearchState', false)
    }
    return {
      showSearch: computed(() => store.state.showSearch),
      clickSearchModalMask
    }
  }
})
</script>

<style lang="scss">
body {
  margin: 0;
  font-size: 16px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
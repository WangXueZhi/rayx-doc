<template>
  <Layout />
  <r-modal class="search-overlayer" v-model:show="showSearch" @clickMask="clickSearchModalMask" :bodyOverflow="false">
    <searchModal />
  </r-modal>
  <r-scroll-bar v-if="showMenu" class="block md:hidden fixed right-0 top-[3.8rem] bottom-0 bg-white shadow-sm">
    <SideBar :menu="menu"/>
  </r-scroll-bar>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import searchModal from './components/searchModal/index.vue';
import Layout from './layout/index.vue'
import SideBar from './layout/SideBar.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'App',
  components: {
    Layout, searchModal, SideBar
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
      showMenu: computed(() => store.state.showMenu),
      menu: computed(() => store.state.menu),
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

.search-overlayer{
  .r-modal-wrapper{
    max-width: 700px;
    width: 80%;

    .r-modal-content{
      width: 100%;
    }
  }
}
</style>
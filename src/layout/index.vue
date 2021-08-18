<template>
  <Head />
  <r-scroll-bar class="layout-menu">
    <div class="layout-menu-wrapper"><Menu :menu="menu"/></div>
  </r-scroll-bar>
  <Content />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from "vuex";
import Menu from './Menu.vue'
import Content from './Content.vue'
import Head from './Head.vue'
export default defineComponent({
  name: 'Layout',
  components: { Menu, Content, Head },
  setup(){
    const store = useStore();

    return {
      menu: computed(() => store.state.menu)
    }
  }
})
</script>

<style scoped lang="scss">
.layout-menu {
  width: 13%;
  position: fixed !important;
  top: 3.6rem;
  bottom: 0;
  border-right: 1px solid #f0f0f0;
  background-color: #fff;
  padding: 10px 0;
}
</style>

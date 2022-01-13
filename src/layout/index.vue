<template>
  <Head />
  <r-scroll-bar class="layout-menu">
    <div class="layout-menu-wrapper"><SideBar :menu="menu"/></div>
  </r-scroll-bar>
  <Content />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from "vuex";
import SideBar from './SideBar.vue'
import Content from './Content.vue'
import Head from './Head.vue'
export default defineComponent({
  name: 'Layout',
  components: { SideBar, Content, Head },
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
  // width: 13%;
  // position: fixed !important;
  // top: 3.6rem;
  // bottom: 0;
  // border-right: 1px solid #f0f0f0;
  // background-color: #fff;
  // padding: 10px 0;

  @apply hidden lg:block fixed z-20 inset-0 top-[3.8125rem] right-auto w-[13rem];
}
</style>

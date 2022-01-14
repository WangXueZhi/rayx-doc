<template>
  <div class="layout-head">
    <div class="project-name">RayxDoc<span class="hidden md:inline-block"> - 方便团队快速搭建的轻量文档系统</span></div>
    <div class="head-right">
      <div class="head-right-search" @click="showSearch">
        <r-icon name="iconicon-test7" class="demo-icon" />
        <span class="head-right-search-text">Search</span>
      </div>
      <div class="head-right-sidebar" @click="toggleShowMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, h, createVNode } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import useCurrentInstance from '../hooks/useCurrentInstance';

export default defineComponent({
  name: "layout-head",
  setup: () => {
    const store = useStore();
    const showMenu = computed(() => store.state.showMenu)
    const showSearch = function () {
      store.commit('setShowSearchState', true)
    }
    const toggleShowMenu = function () {
      store.commit('setShowMenuState', !showMenu.value)
    }
    document.addEventListener('keydown', (e)=>{
      if(e.ctrlKey && e.key == 'k'){
        store.commit('setShowSearchState', true)
        e.preventDefault()
      }
      if(e.key == 'Escape'){
        store.commit('setShowSearchState', false)
        e.preventDefault()
      }
    })
    return {
      showSearch,
      toggleShowMenu,
    };
  },
});
</script>

<style scoped lang="scss">
.layout-head {
  @apply sticky z-50 w-full;
  top: 0;
  left: 0;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
  padding: 10px 26px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  height: 3.6rem;
  align-items: center;

  .project-name {
    font-size: 20px;
  }

  .head-right {
    display: flex;
    align-items: center;
    
    .head-right-search {
      align-items: center;
      background: #ebedf0;
      border: 0;
      border-radius: 40px;
      color: #969faf;
      cursor: pointer;
      display: flex;
      font-weight: 500;
      height: 36px;
      margin: 0 0 0 16px;
      padding: 0 10px;
      user-select: none;
      .head-right-search-text {
        margin: 0 5px;
      }

      &:hover {
        background: #fff;
        box-shadow: inset 0 0 0 2px var(--main-color);
        color: #1c1e21;
        outline: none;
      }
    }

    .head-right-sidebar{
      @apply flex lg:hidden;
      width: 20px;
      height: 25px;
      margin-left: 0;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 20px;
      span{
        width: 100%;
        height: 2px;
        display: inline-block;
        background-color: #1c1e21;
      }
    }
  }
}
</style>

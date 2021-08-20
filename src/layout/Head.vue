<template>
  <div class="layout-head">
    <div class="project-name">Rayx - 适合团队使用的轻量文档系统</div>
    <div class="head-right">
      <div class="head-right-search" @click="show">
        <r-icon name="iconicon-test7" class="demo-icon" />
        <span class="head-right-search-text">Search</span>
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
    const show = function () {
      store.commit('setShowSearchState', true)
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
      show
    };
  },
});
</script>

<style scoped lang="scss">
.layout-head {
  width: 100%;
  position: fixed !important;
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
  }
}
</style>

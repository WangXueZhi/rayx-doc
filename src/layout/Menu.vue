<template>
  <ScrollBar class="layout-menu">
    <div class="layout-menu-item" v-for="item in menu" :key="item.path">
      <div
        class="layout-menu-item-name"
        :class="{
          'layout-menu-item-hasChildren':
            item.children && item.children.length > 0,
          'layout-menu-item-noChildren': !(
            item.children && item.children.length > 0
          ),
          'layout-menu-item-active':
              item.title === activeDocPath
        }"
        @click="itemClick(item)"
      >
        {{ item.title }}
      </div>
      <div class="layout-menu-item-subChildren">
        <div
          class="layout-menu-item-sub"
          :class="{
            'layout-menu-item-active':
              `${item.title},${subitem.title}` === activeDocPath,
          }"
          v-for="subitem in item.children"
          :key="subitem.path"
          @click="itemClick(subitem)"
        >
          {{ subitem.title }}
        </div>
      </div>
    </div>
  </ScrollBar>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import {
  useRouter,
} from 'vue-router'
import { Menu } from '@src/types'
import ScrollBar from '@components/scroll-bar/scroll-bar.vue'

export default defineComponent({
  name: 'layout-menu',
  props: {},
  components: { ScrollBar },
  setup: () => {
    const store = useStore()
    const router = useRouter()

    return {
      menu: computed(() => store.state.menu),
      activeDocPath: computed(() => store.state.activeDocPath),
      itemClick: (data: Menu) => {
        if (data.children && data.children.length > 0) {
          return
        }
        if (data.path) {
          router.push(data.path)
        }
      },
    }
  },
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
  .layout-menu-item {
    padding: 5px 26px;
    position: relative;
    z-index: 1;

    .layout-menu-item-name {
      transition: all 0.2s ease-in-out;
      font-size: 18px;

      &.layout-menu-item-active {
        color: #1890ff !important;
        // background-color: #e6f7ff;
        // border-right: 1px solid #1890ff;
      }

      &.layout-menu-item-hasChildren {
        border-bottom: 1px solid #f0f0f0;
        padding-bottom: 5px;
      }

      &.layout-menu-item-noChildren {
        cursor: pointer;
        &:hover {
          color: #1890ff;
        }
      }
    }

    .layout-menu-item-subChildren {
      padding: 5px 0;
      .layout-menu-item-sub {
        transition: all 0.2s ease-in-out;
        font-size: 14px;
        cursor: pointer;
        padding: 5px 0;
        &:hover {
          color: #1890ff;
        }
        &.layout-menu-item-active {
          color: #1890ff !important;
          // background-color: #e6f7ff;
          // border-right: 1px solid #1890ff;
        }
      }
    }
  }
}
</style>

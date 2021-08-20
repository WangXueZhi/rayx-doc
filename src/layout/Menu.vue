<template>
  <div
    :class="[`layout-menu-item-${level}`]"
    v-for="item in menu"
    :key="item.path"
  >
    <template v-if="item.children && item.children.length > 0">
      <div class="layout-menu-item-name layout-menu-item-hasChildren">
        {{ item.title }}
      </div>
      <layout-menu :menu="item.children" :level="level + 1" />
    </template>
    <div
      v-else
      class="layout-menu-item-name layout-menu-item-noChildren"
      :class="{
        'layout-menu-item-active': item.path === activeRoutPath,
      }"
      @click="itemClick(item)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Menu } from "@src/types";

export default defineComponent({
  name: "layout-menu",
  props: {
    menu: {
      type: Array,
      default: () => [],
    },
    level: {
      type: Number,
      default: 0,
    },
  },
  setup: () => {
    const store = useStore();
    const router = useRouter();
    return {
      activeRoutPath: computed(() => store.state.activeRoutPath),
      itemClick: (data: Menu) => {
        if (data.children && data.children.length > 0) {
          return;
        }
        if (data.path) {
          router.push(data.path);
        }
      },
    };
  },
});
</script>

<style scoped lang="scss">
.layout-menu-item-name {
  transition: all 0.2s ease-in-out;
  padding: 5px 0;
  color: #2c3e50;
  &.layout-menu-item-active {
    color: #1890ff !important;
  }
  &.layout-menu-item-hasChildren {
    padding: 5px 0;
  }
  &.layout-menu-item-noChildren {
    cursor: pointer;
    &:hover {
      color: #1890ff !important;
    }
  }
}

.layout-menu-item-0 {
  padding-left: 26px;
  position: relative;
  z-index: 1;
  margin-top: 15px;
  &:first-child{
    margin-top: 0;
  }

  & > .layout-menu-item-name {
    font-size: 18px;
  }

  .layout-menu-item-1 {
    padding-left: 15px;
    & > .layout-menu-item-name {
      font-size: 16px;
      color: #727272;
    }

    .layout-menu-item-2 {
      padding-left: 15px;
      & > .layout-menu-item-name {
        font-size: 14px;
      }
    }
  }
}
</style>

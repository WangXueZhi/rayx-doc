<template>
  <div class="layout-head">
    <div class="project-name">XXX文档</div>
    <div class="head-right">
      <div class="head-right-search">
         <Icon name="iconicon-test7" class="demo-icon" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Icon from '@components/icon/index.js'

export default defineComponent({
  name: 'layout-head',
  props: {},
  components: { Icon },
  setup: () => {
    const store = useStore()
    const router = useRouter()

    return {}
  },
})
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

  .head-right{
    .head-right-search{
      
    }
  }
}
</style>

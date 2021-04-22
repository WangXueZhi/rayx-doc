<template>
  <div class="layout-content">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'layout-content',
})
</script>

<style scoped lang="scss">
.layout-content {
    margin: 0 13%;
    padding: 26px;
}
</style>

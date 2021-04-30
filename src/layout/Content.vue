<template>
  <div class="layout-content">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'layout-content',
  mounted(){
    // console.log('mounted', this.$route)
  },
})
</script>

<style scoped lang="scss">
.layout-content {
    margin: 0 13%;
    padding: 0px 26px;
    margin-top: 50px;
    padding-top: 1px;
}
</style>

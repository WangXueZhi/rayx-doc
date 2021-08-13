<template>
  <div class="layout-content">
    <router-view  v-slot="{ Component, route }">
      <Md
        :md="Component"
      />
    </router-view>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Md from './MD.vue'
export default defineComponent({
  name: 'layout-content',
  components: {Md},
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

<template>
  <div class="search-modal">
    <r-input style="width: 200px">
      <template #prefix><r-icon name="icon-email" /></template>
    </r-input>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'layout-search-modal',
  mounted(){
    // console.log('mounted', this.$route)
  },
})
</script>

<style scoped lang="scss">
.search-modal {
    background: rgba(101,108,133,0.8);
    border-radius: 6px;
    box-shadow: inset 1px 1px 0 0 hsla(0,0%,100%,0.5),0 3px 8px 0 #555a64;
    flex-direction: column;
    margin: 60px auto auto;
    max-width: 560px;
    position: relative;
}
</style>

<template>
  <component
    :is="md"
  />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'layout-content',
  props: ['md'],
  mounted(){
    // console.log('mounted', this.$route)
    setTimeout(()=>{
      console.log(this)
    })
  },
})
</script>

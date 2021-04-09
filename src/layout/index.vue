<template>
  <Menu />
  <Content />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Menu from './Menu'
import Content from './Content'
export default defineComponent({
  name: 'HelloWorld',
  components: {Menu, Content},
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    
  }
})
</script>

<style scoped>

</style>

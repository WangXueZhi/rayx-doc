<template>
  <Menu />
  <Content />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Menu from './Menu.vue'
import Content from './Content.vue'
export default defineComponent({
  name: 'Layout',
  components: {Menu, Content},
})
</script>

<style scoped>

</style>

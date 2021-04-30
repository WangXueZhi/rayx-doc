<template>
  <Head />
  <Menu />
  <Content />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Menu from './Menu.vue'
import Content from './Content.vue'
import Head from './Head.vue'
export default defineComponent({
  name: 'Layout',
  components: { Menu, Content, Head },
})
</script>

<style scoped>
</style>

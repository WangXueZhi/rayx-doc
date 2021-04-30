<template>
  <div class="project-name">文档</div>
  <Menu />
  <Content />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Menu from './Menu.vue'
import Content from './Content.vue'
export default defineComponent({
  name: 'Layout',
  components: { Menu, Content },
})
</script>

<style scoped>
.project-name {
  padding: 19px 26px;
  position: fixed;
  left: 0;
  top: 0;
  font-size: 20px;
}
</style>

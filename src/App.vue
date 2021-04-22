<template>
  <Layout />
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import Layout from './layout/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    Layout
  },
  // setup(){
  //   onMounted(()=>{
  //     console.log(this)
  //   })
  // },
  mounted(){
  }
})
</script>

<style>
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
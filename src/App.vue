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
    Layout,
  },
  // setup(){
  //   onMounted(()=>{
  //     console.log(this)
  //   })
  // },
  mounted() {
    // console.log('mounted', this.$route)
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter >>', to, from, next)
    next()
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate >>', to, from, next)
    next()
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave >>', to, from, next)
    next()
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  },
})
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.md-code-hijs {
  padding: 10px;
  background-color: #fafafa;
  border: 1px solid #eaeefb;
  line-height: 1.5;
  font-size: 13px;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
  border-radius: 4px;
  -webkit-font-smoothing: auto;

  &:before {
    content: none;
  }
}
</style>
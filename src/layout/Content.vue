<template>
  <div class="layout-content">
    <router-view></router-view>
    <div v-if="state.headingNav.length > 0" class="layout-heading-menu">
      <div class="layout-heading-menu-wrapper">
        <div v-for="(item, index) in state.headingNav" :key="index" class="layout-heading-menu-item" @click="goHeading(item)">
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { watch, defineComponent, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'layout-content',
  setup(){
    const route = useRoute()
    const router = useRouter()
    
    const state = reactive({
      headingNav: [],
      path: route.path
    })
    
    watch(
      () => route.path,
      async newPath => {
        console.log(newPath)
        state.path = newPath
        const mdHeadingMapStr: any = sessionStorage.getItem('md-heading-map')

        if(mdHeadingMapStr){
          const mdHeadingMap = JSON.parse(mdHeadingMapStr)
          const headings = mdHeadingMap[route.path]
          state.headingNav = headings
        }
      }
    )

    const goHeading = function(headingName: string){
      router.push(state.path+'?p='+headingName)
    }

    return {
      state,
      goHeading
    }
  }
})
</script>

<style scoped lang="scss">
.layout-content {
    margin: 0 13%;
    padding: 0px 26px;
    margin-top: 50px;
    padding-top: 1px;
    .layout-heading-menu{
      position: fixed;
      right: 100px;
      top: 70px;
      border-left: 1px solid #f0f0f0;
      padding-left: 20px;
      min-width: 100px;

      .layout-heading-menu-wrapper{
        position: relative;

        // &::before{
        //   content: '';
        //   position: absolute;
        //   left: 0;
        // }

        .layout-heading-menu-item{
          margin-bottom: 10px;
          font-size: 13px;
          color: #515a6e;
          cursor: pointer;
          &:hover{
            color: var(--main-color);
          }
        }
      }
      
    }
}
</style>

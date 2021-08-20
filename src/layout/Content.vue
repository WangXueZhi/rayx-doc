<template>
  <div class="layout-content">
    <router-view></router-view>
    <r-scroll-bar class="layout-heading-menu" :class="{'layout-heading-menu-moreHeading': state.moreHeading}" v-if="state.headingNav.length > 0">
      <div class="layout-heading-menu-wrapper">
        <div v-for="(item, index) in state.headingNav" :key="index" class="layout-heading-menu-item" @click="goHeading(item)">
          {{item}}
        </div>
      </div>
      <r-icon name="iconicon-test40" class="layout-heading-menu-arrow" :class="{'layout-heading-menu-arrow-moreHeading': state.moreHeading}" @click="switchHeading"/>
    </r-scroll-bar>
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
      path: route.path,
      moreHeading: false
    })

    const switchHeading = function(){
      // state.moreHeading = !state.moreHeading
    }
    
    watch(
      () => route.path,
      async newPath => {
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
      goHeading,
      switchHeading
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
      right: 26px;
      top: 58px;
      bottom: 0;
      width: 230px;
      padding-left: 20px;
      padding-top: 20px;
      transition: all .3s ease 0s;
      background-color: #fff;

      &:hover{
        width: 400px;
        .layout-heading-menu-arrow{
          transform: rotate(180deg);
        }
      }

      &.layout-heading-menu-moreHeading{
        width: 350px;
      }

      .layout-heading-menu-arrow{
        position: absolute;
        left: 0;
        top: 20px;
        cursor: pointer;
        transition: transform .3s ease 0s;
        transform-origin: center;
        &.layout-heading-menu-arrow-moreHeading{
          transform: rotate(180deg);
        }
      }

      .layout-heading-menu-wrapper{
        position: relative;
        padding-right: 20px;
        border-left: 1px solid #f0f0f0;
        padding-left: 20px;
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
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          &:hover{
            color: var(--main-color);
          }
        }
      }
      
    }
}
</style>

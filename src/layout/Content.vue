<template>
  <div class="layout-content">
    <div class="layout-content-wrapper">
      <div class="layout-content-md">
        <router-view></router-view>
      </div>
     <div class="layout-content-right"></div>
    </div>
     <r-scroll-bar class="layout-heading-menu" v-if="state.headingNav.length > 0">
      <div class="layout-heading-menu-wrapper">
        <div v-for="(item, index) in state.headingNav" :key="index" class="layout-heading-menu-item" @click="goHeading(item)">
          {{item.text}}
        </div>
      </div>
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
    })
    
    watch(
      () => route.path,
      async newPath => {
        let realPath = route.path
        if(route.params.id){
          const pathArr = route.path.split('/')
          realPath = pathArr.slice(0, pathArr.length-1).join('/')
        }
        state.path = realPath
        const mdHeadingMapStr: any = sessionStorage.getItem('md-heading-map')

        if(mdHeadingMapStr){
          const mdHeadingMap = JSON.parse(mdHeadingMapStr)
          const headings = mdHeadingMap[realPath]
          state.headingNav = headings
        }
      }
    )

    const goHeading = function(headingItem: any){
      router.push(state.path+'/'+ encodeURIComponent(headingItem.text))
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
    .layout-content-wrapper{
      @apply relative flex lg:pl-[calc(13rem+10px)] pl-[calc(2rem+5px)];
      padding-top: 3.8125rem;
      .layout-content-md{
        flex: 1;
        @apply  md:pr-0 pr-[calc(2rem+5px)];
      }
      .layout-content-right{
        @apply hidden md:block;
        flex-basis: 13rem;
        padding-right: 20px;
        padding-left: 20px;
      }
    }
    .layout-heading-menu{
      @apply fixed hidden md:block;
      top: 4rem;
      right: 0;
      bottom: 0;
      width: 12.5rem;
      transition: all .3s ease 0s;
      background-color: #fff;

      .layout-heading-menu-wrapper{
        position: relative;
        padding-right: 20px;
        border-left: 1px solid #f0f0f0;
        padding-left: 20px;

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

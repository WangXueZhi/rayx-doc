<template>
  <div class="layout-content">
    <div class="layout-content-wrapper">
      <div class="layout-content-md">
        <router-view></router-view>
      </div>
      <r-scroll-bar class="layout-heading-menu" :class="{'layout-heading-menu-moreHeading': state.moreHeading}" v-if="state.headingNav.length > 0">
        <div class="layout-heading-menu-wrapper">
          <div v-for="(item, index) in state.headingNav" :key="index" class="layout-heading-menu-item" @click="goHeading(item)">
            {{item.text}}
          </div>
        </div>
      </r-scroll-bar>
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

    const goHeading = function(headingItem: any){
      router.push(state.path+'?p='+headingItem.text)
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
    .layout-content-wrapper{
      @apply overflow-y-auto fixed flex lg:left-[calc(13rem+10px)] left-[calc(2rem+5px)] right-0 bottom-0;
      top: 3.8125rem;
      .layout-content-md{
        flex: 1;
        @apply  md:pr-0 pr-[calc(2rem+5px)];
      }
      .layout-heading-menu{
        @apply sticky hidden md:block;
        top: 0;
        flex-basis: 13rem;
        padding-left: 5px;
        padding-top: 5px;
        transition: all .3s ease 0s;
        background-color: #fff;

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
    
}
</style>

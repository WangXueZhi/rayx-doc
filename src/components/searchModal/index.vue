<template>
  <div class="search-modal">
    <div class="search-input">
      <r-input size="big" @input="searchInput">
        <template #prefix><r-icon name="iconicon-test7" /></template>
      </r-input>
    </div>
    <div class="search-scroll">
      <r-scroll-bar class="search-scroll-wrapper">
        <div>
          <div v-for="(item, index) in state.searchRes" :key="index">
            <div v-if="item.isPageName" class="search-scroll-item" @click="goPage(item.data.url.slice(1))">
              <r-icon name="iconform" :size="20" class="search-scroll-item-left"/>
              <div v-html="item.matchHtml" class="search-scroll-item-content search-scroll-item-mainText"></div>
            </div>
            <div v-else class="search-scroll-item"  @click="goPage(`${item.data.url.slice(1)}`,`?p=${item.matchContent}`)">
              <div class="search-scroll-item-left">#</div>
              <div class="search-scroll-item-content">
                <div v-html="item.matchHtml" class="search-scroll-item-mainText"></div>
                <div class="search-scroll-item-content-heading">{{item.data.name}}</div>
              </div>
            </div>
          </div>
        </div>
      </r-scroll-bar>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter, onBeforeRouteLeave } from 'vue-router'
import { fixRouterPath } from '../../util/util'

type searchResType = {
  data: Object
  isPageName: Boolean
  pageName?: String
  matchContent?: String
  matchHtml: String
  searchValue: String,
}

type stateType = {
  searchRes: searchResType[]
}

export default defineComponent({
  name: 'layout-search-modal',
  mounted(){
    // console.log('mounted', this.$route)
  },
  setup(){
    const store = useStore()
    const router = useRouter()
    const state: stateType = reactive({
      searchRes: []
    })

    const goPage = function(path: string, query: string){
      router.push(fixRouterPath(path)+(query || ''))
      store.commit('setShowSearchState', false)
    }

    const searchInput = function(v: string){
      state.searchRes = []
      if(v){
        store.state.docsData.forEach((item: any) => {
          if(item.name.includes(v)){
            state.searchRes.push({
              data: item,
              isPageName: true,
              pageName: item.name,
              matchHtml: `<div>${item.name.replace(v, `<span style="color: var(--main-color)">${v}</span>`)}</div>`,
              searchValue: v
            })
          }
          // item.keyWords
          item.keyWords.forEach((keyword: string) => {
            const kdIndex = keyword.indexOf(v)
            if(kdIndex >= 0){
              state.searchRes.push({
                data: item,
                isPageName: false,
                pageName: item.name,
                matchHtml: `<div>${keyword.replace(v, `<span style="color: var(--main-color)">${v}</span>`)}</div>`,
                searchValue: v,
                matchContent: keyword
              })
            }
          });
        });
      }
    }

    return {
      goPage,
      searchInput,
      state
    }
  }
})
</script>

<style scoped lang="scss">
.search-modal {
    background: #f5f6f7;
    border-radius: 6px;
    box-shadow: inset 1px 1px 0 0 hsla(0,0%,100%,0.5),0 3px 8px 0 #555a64;
    max-width: 560px;
    position: relative;
    width: 500px;
    height: 400px;

    .search-input{
      padding: 10px;
    }

    .search-scroll{
      padding: 10px;
      padding-top: 0;
      .search-scroll-wrapper{
        height: 300px;

        .search-scroll-item{
          cursor: pointer;
          display: flex;
          background: #fff;
          border-radius: 4px;
          box-shadow: 0 1px 3px 0 #d4d9e1;
          padding-left: var(--docsearch-spacing);
          padding: 12px;
          align-items: center;
          height: 56px;
          box-sizing: border-box;
          margin-bottom: 5px;

          .search-scroll-item-left{
            width: 20px;
            display: flex;
            justify-content: center;
          }

          .search-scroll-item-content{
            padding-left: 10px;

            .search-scroll-item-content-heading{
              color: #90a4b7;
              font-size: 12px;
            }
          }

          .search-scroll-item-mainText{
            font-size: 15px;
          }
        }
      }
    }
}
</style>

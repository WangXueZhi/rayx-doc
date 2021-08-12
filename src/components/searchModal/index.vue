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
            <div v-if="item.isPageName">
              <div>
                <r-icon name="iconform" :size="20"/>
                <div v-html="item.matchHtml"></div>
              </div>
            </div>
            <div v-else>
              <div>
                <div>#</div>
                <div>
                  <div>{{item.v}}</div>
                  <div>所在页面：{{item.data.name}}</div>
                </div>
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

type searchResType = {
  data: Object
  isPageName: Boolean
  pageName?: String
  matchContent?: String
  matchHtml: String
  v: String,
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

    const searchInput = function(v: string){
      state.searchRes = []
      store.state.docsData.forEach((item: any) => {
        if(item.name.includes(v)){
          state.searchRes.push({
            data: item,
            isPageName: true,
            pageName: item.name,
            matchHtml: `<div>${item.name.replace(v, `<span style="color: green">${v}</span>`)}</div>`,
            v
          })
        }
        // item.keyWords
      });
      console.log(state.searchRes)
    }

    return {
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
      .search-scroll-wrapper{
        height: 300px;
        background-color: #fff;
      }
    }
}
</style>

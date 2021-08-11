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
          <div v-for="(item, index) in searchRes" :key="index">
            <div v-if="item.isName">
              <div>{{item.data.name}}</div>
              <div>页面</div>
            </div>
            <div v-else>
              <div>{{item.v}}</div>
              <div>所在页面：{{item.data.name}}</div>
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
export default defineComponent({
  name: 'layout-search-modal',
  mounted(){
    // console.log('mounted', this.$route)
  },
  setup(){
    const store = useStore()
    const router = useRouter()
    const searchRes: any[] = reactive([])

    const searchInput = function(v: string){
      console.log(v)
      store.state.docsData.forEach((item: any) => {
        if(item.name.includes(v)){
          searchRes.push({
            data: item,
            isName: true,
            v
          })
        }
        if(item.keyWords.includes(v)){
          searchRes.push({
            data: item,
            isName: false,
            v
          })
        }
        if(item.content.includes(v)){
          searchRes.push({
            data: item,
            isName: false,
            v
          })
        }
      });
    }

    return {
      searchInput,
      searchRes
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

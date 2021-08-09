<template>
  <div class="search-modal">
    <div class="search-input">
      <Input size="big">
        <template #prefix><Icon name="iconicon-test7" /></template>
      </Input>
    </div>
    <div class="search-scroll">
      <ScrollBar class="search-scroll-wrapper">

      </ScrollBar>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { Input, Icon, ScrollBar } from 'rayx-ui'
export default defineComponent({
  name: 'layout-search-modal',
  mounted(){
    // console.log('mounted', this.$route)
  },
  components:{Input, Icon, ScrollBar}
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

<template>
  <article class="markdown-wrapper" v-html="content"></article>
</template>

<script lang="ts">
export default {
  props: {
    content: {
      type: String,
      default: ''
    },
  },
};
</script>
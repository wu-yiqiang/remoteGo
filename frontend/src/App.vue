<template>
  <section class="Layout">
    <ConnectLists />
    <Content />
  </section>
</template>


<script lang="ts" setup>
import ConnectLists from './layout/ConnectLists/index.vue'
import Content from './layout/Content/index.vue'
</script>

<style scoped>
.Layout {
  display: flex;
}
</style>

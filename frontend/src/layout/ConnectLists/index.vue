<template>
  <section class="ConnectLists">
   <div class="opts">
    操作区域
   </div>
   <div class="items">
    <div class="item">连接1</div>
    <div class="item">连接2</div>
    <div class="item">连接1</div>
    <div class="item">连接2</div>
    <div class="item">连接1</div>
    <div class="item">连接2</div>
    <div class="item">连接1</div>
    <div class="item">连接2</div>
    <div class="item">连接1</div>
    <div class="item">连接2</div>
    <div class="item">连接1</div>
    <div class="item">连接2</div>
    <div class="item">连接1</div>
    <div class="item">连接2</div>
    <div class="item">连接1</div>
    <div class="item">连接2</div>
    <div class="item">连接1</div>
    <div class="item">连接2</div>
    <div class="item">连接1</div>
    <div class="item">连接2</div>
    <div class="item">连接1</div>
    <div class="item">连接2</div>
    <div class="item">连接1</div>
    <div class="item">连接111112</div>
   </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'

</script>
<style scoped>
.ConnectLists{
  width: 200px;
  height: 100vh;
  border-right: 1px solid gray;
  .opts {
    height: 80px;
    display: grid;
    place-items: center;
  }
  .items {
    height: calc(100vh - 80px);
    overflow-y: auto;
    .item {
      padding: 10px;
      border-bottom: 1px solid gray;
      cursor: pointer;
    }
  }
}
</style>

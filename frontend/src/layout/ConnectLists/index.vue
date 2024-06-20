<template>
  <section class="ConnectLists">
    <div class="opts">
      <n-button text style="font-size: 24px">
        <n-icon>
          <Add />
        </n-icon>
      </n-button>
      <n-button text style="font-size: 24px">
        <n-icon>
          <Folder />
        </n-icon>
      </n-button>
      <n-input placeholder="搜索">
        <template #prefix>
          <n-icon :component="FlashOutline" />
        </template>
      </n-input>
         <n-button text style="font-size: 24px">
        <n-icon>
          <MenuOutline />
        </n-icon>
      </n-button>
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
import SvgIcon from '../../components/SvgIcon.vue'
import { Add, Folder, FlashOutline, MenuOutline } from '@vicons/ionicons5'
</script>
<style scoped lang="scss">
.ConnectLists {
  width: 260px;
  height: 100vh;
  border-right: 1px solid gray;
  .opts {
    height: 60px;
    padding: 0 10px;
    display: flex;
    place-items: center;
    column-gap: 10px;
    border-bottom: 1px solid gray;
  }
  .items {
    height: calc(100vh - 60px);
    overflow-y: auto;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
    .item {
      padding: 10px;
      border-bottom: 1px solid gray;
      cursor: pointer;
    }
  }
}
</style>

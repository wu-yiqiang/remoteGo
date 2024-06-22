<template>
  <n-modal
    v-model:show="open"
    :mask-closable="false"
    preset="dialog"
    show-icon="false"
    positive-text="确认"
    negative-text="取消"
    @positive-click="onPositiveClick"
    @negative-click="onNegativeClick"
  >
  <n-tabs
      class="card-tabs"
      default-value="signin"
      size="large"
      animated
      pane-wrapper-style="margin: 0 -4px"
      pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
    >
  <n-tab-pane name="signin" tab="登录">
        <n-form>
          <n-form-item-row label="用户名">
            <n-input />
          </n-form-item-row>
          <n-form-item-row label="密码">
            <n-input />
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block secondary strong>
          登录
        </n-button>
      </n-tab-pane>
      <n-tab-pane name="signup" tab="注册">
        <n-form>
          <n-form-item-row label="用户名">
            <n-input />
          </n-form-item-row>
          <n-form-item-row label="密码">
            <n-input />
          </n-form-item-row>
          <n-form-item-row label="重复密码">
            <n-input />
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block secondary strong>
          注册
        </n-button>
      </n-tab-pane>
    </n-tabs>
  </n-modal>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref, defineEmits, defineProps } from 'vue'
const emit = defineEmits(['ok', 'close', 'update:visible'])
const props = defineProps({
    visible: {
        type: Boolean,
        required: true,
        default: false
    },
    // uuid: {
    //     type: String,
    //     required: true,
    //     default: ''
    // }
})
const open = computed({
    get() {
        return props.visible
    },
    set(value) {
      emit('update:visible', value)
    }
})
const onPositiveClick = () => {
  open.value = false
}
const onNegativeClick = () => {
  open.value = false
}
</script>
<style lang="scss" scoped>
//.setting-dialog{}
</style>

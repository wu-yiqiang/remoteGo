<template>
  <n-modal v-model:show='open' transform-origin="center">
    asdasd
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
    uuid: {
        type: String,
        required: true,
        default: ''
    }
})
const open = computed({
    get() {
        return props.visible
    },
    set(value) {
      emit('update:visible', value)
    }
})
</script>
<style lang="scss" scoped>
//.setting-dialog{}
</style>

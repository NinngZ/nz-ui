<template>
<div>
  <Button @click="toggle">打开对话框</Button>
  <Dialog v-model:visible="dialogVisible" :closeOnClickOverlay="false" :ok="okFn" :cancel="cancelFn">
    <template v-slot:content>
      <strong>hi</strong>
      <div>hi2</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
</div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'

export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const dialogVisible = ref(false)
    const toggle = () => {
      dialogVisible.value = !dialogVisible.value
    }
    const okFn = () => {
      return false
    }
    const cancelFn = () => {}
    return {
      dialogVisible,
      toggle,
      okFn,
      cancelFn
    }
  }
}
</script>
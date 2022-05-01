<template>
  <h1>Dialog示例</h1>
  <div>
    <CodeDemo :newcomponent="Dialog1Demo" title="常规使用" :codeStr="DIALOG_DEMO_01" />
    <CodeDemo :newcomponent="Dialog2Demo" title="一键打开 Dialog" :codeStr="DIALOG_DEMO_02" />
  </div>
  <!--<h1>示例1</h1>
  <Button @click="toggle">切换按钮</Button>
  
  <Dialog
    v-model:visible="isVisible"
    :clickOnOverlay="false"
    :ok="fn1"
    :cancel="fn2"
  >
    <template v-slot:title>
      <h1>加粗标题</h1>
    </template>
    <template v-slot:content>
      <h3>正文</h3>
      <div>11111111</div>
      <div>22222222</div>
      
    </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="toggle">切换按钮2</Button>-->
  
</template>
<script lang="ts">
import CodeDemo from './CodeDemo.vue';
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';
import {DIALOG_DEMO_01,DIALOG_DEMO_02} from './codeString.js'
export default {
  name: "DidlogDemo",
  components: {
    CodeDemo,
    Dialog1Demo,
    Dialog2Demo
  },
  setup() {
    
    return {
      Dialog1Demo,
      Dialog2Demo,
      DIALOG_DEMO_01,
      DIALOG_DEMO_02
    };
  },
};
</script>
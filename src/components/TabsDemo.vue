<template>
  <div>
    <h1>Tabs示例</h1>
    <CodeDemo :newcomponent="Tabs1Demo" title="常规使用" :codeStr="TABS_DEMO_01" />
    <!--
      <Tabs v-model:selected="x">
        <Tab title="导航11">内容11</Tab>
        <Tab title="导航22">内容22</Tab>
      </Tabs>
    -->
  </div>
</template>
<script lang="ts">

import CodeDemo from './CodeDemo.vue'
import Tabs1Demo from './Tabs1.demo.vue'
import {TABS_DEMO_01} from './codeString.js'
export default {
  name: "TabDemo",
  components: {
    CodeDemo,
    Tabs1Demo
  },
  setup() {
    
    return {
      CodeDemo,
      Tabs1Demo,
      TABS_DEMO_01
    };
  },
};
</script>
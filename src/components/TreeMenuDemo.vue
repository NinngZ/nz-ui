<template>
  <h1>TreeMenu 示例</h1>
  <h1>示例1</h1>
  <div>
    <CodeDemo
      :newcomponent="TreeMenu1Demo"
      title="常规使用"
      :codeStr="TREEMENU_DEMO_01"
    />
  </div>
</template>
<script lang="ts">
import CodeDemo from "./CodeDemo.vue";
import TreeMenu1Demo from "./TreeMenu1.demo.vue";
import { TREEMENU_DEMO_01 } from "./codeString.js";
export default {
  name: "StarsDemo",
  components: {
    CodeDemo,
    TreeMenu1Demo,
  },
  setup() {
    return {
      TreeMenu1Demo,
      TREEMENU_DEMO_01,
    };
  },
};
</script>
<style lang="scss">

</style>
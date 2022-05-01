
<template>
  <div>
    <h1>组件示例</h1>
    <CodeDemo
      :newcomponent="Switch1Demo"
      title="常规用法"
      :codeStr="SWIITCH_DEMO_01"
    />
    <CodeDemo
      :newcomponent="Switch2Demo"
      title="支持 disabled"
      :codeStr="SWIITCH_DEMO_02"
    />

    <!--<pre><code>{{Switch2Demo.data().demoCode}}</code></pre>-->
  </div>
</template>
<script lang="ts">
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import CodeDemo from "./CodeDemo.vue";
import {SWIITCH_DEMO_01,SWIITCH_DEMO_02} from './codeString'
import "prismjs";
import "prismjs/themes/prism.css";
const Prism = (window as any).Prism;
export default {
  name: "SwitchDemo",
  components: {
    Switch1Demo,
    Switch2Demo,
    CodeDemo,
  },
  setup() {
    return {
      Prism,
      Switch1Demo,
      Switch2Demo,
      SWIITCH_DEMO_01,
      SWIITCH_DEMO_02
    };
  },
};
</script>
<style lang="scss">
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  border-radius: 6px;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
      > code {
        font-weight: bold;
      }
    }
  }
}
</style>
<style lang="scss">
@import "prismjs/themes/prism.css";
</style>
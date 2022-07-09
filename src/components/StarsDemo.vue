<template>
  <h1>Stars 示例</h1>
  <h1>示例1</h1>
  <div class="text">
    <p><b>num</b>: 控制初始点亮的星星数</p>
    <p><b>size</b>: 控制星星的像素大小</p>
    <p><b>getStarNum</b>: 每次点击星星后的回调事件</p>
  </div>
  <div>
    <CodeDemo
      :newcomponent="Stars1Demo"
      title="常规使用"
      :codeStr="STARS_DEMO_01"
    />
  </div>
</template>
<script lang="ts">
import CodeDemo from "./CodeDemo.vue";
import Stars1Demo from "./Stars1.demo.vue";
import { STARS_DEMO_01 } from "./codeString.js";
export default {
  name: "StarsDemo",
  components: {
    CodeDemo,
    Stars1Demo,
  },
  setup() {
    return {
      Stars1Demo,
      STARS_DEMO_01,
    };
  },
};
</script>
<style lang="scss">
.text {
  padding-left: 2px;

  p {
    line-height: 30px;
  }
}
</style>
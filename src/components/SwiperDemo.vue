<template>
  <h1>Swiper 示例</h1>
  <h1>示例1</h1>
  <div class="text">
    <p><b>autoplay</b>: 控制是否自动轮播</p>
    <p><b>duration</b>: 控制轮播的时间间隔，时间单位喂毫秒(ms)</p>
    <p><b>initial</b>: 控制从第几张图片开始展示</p>
    <p><b>hasDot</b>: 控制是否是否显示小圆点</p>
    <p><b>hasDirector</b>: 控制是否显示 ‘向前/后’ 箭头</p>
  </div>
  <div>
    <CodeDemo
      :newcomponent="Swiper1Demo"
      title="常规使用"
      :codeStr="SWIPER_DEMO_01"
    />
  </div>
</template>
<script lang="ts">
import CodeDemo from "./CodeDemo.vue";
import Swiper1Demo from "./Swiper1.demo.vue";
import { SWIPER_DEMO_01 } from "./codeString.js";
export default {
  name: "SwiperDemo",
  components: {
    CodeDemo,
    Swiper1Demo,
  },
  setup() {
    return {
      Swiper1Demo,
      SWIPER_DEMO_01,
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
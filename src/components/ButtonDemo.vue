<template>
  <h1>Button 示例</h1>
  <h1>示例1</h1>
  <div>
    <CodeDemo :newcomponent="Button1Demo" title="常规使用" :codeStr="BUTTON_DEMO_01" />
    <CodeDemo :newcomponent="Button2Demo" title="支持 size" :codeStr="BUTTON_DEMO_02" />
    <CodeDemo :newcomponent="Button3Demo" title="支持 level" :codeStr="BUTTON_DEMO_03" />
    <CodeDemo :newcomponent="Button4Demo" title="支持 disabled" :codeStr="BUTTON_DEMO_04" />
    <CodeDemo :newcomponent="Button5Demo" title="支持显示加载中" :codeStr="BUTTON_DEMO_05" />
  </div>
  <!--<div>
    <Button @click="onClick" @focus="onClick" @mouseover="onClick"
      >默认按钮</Button
    >
    <Button theme="button">按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文本按钮</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button size="big">大大大</Button>
    <Button>普普通</Button>
    <Button size="small">小小小</Button>
  </div>
  <div>
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">普普通</Button>
    <Button theme="link" size="small">小小小</Button>
  </div>
  <div>
    <Button size="big" theme="text">大大大</Button>
    <Button theme="text">普普通</Button>
    <Button theme="text" size="small">小小小</Button>
  </div>
  <h1>示例3</h1>
  <div>
    <Button level="main">主要按钮</Button>
    <Button>普通按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="link" level="main">主要链接按钮</Button>
    <Button theme="link">普通链接按钮</Button>
    <Button theme="link" level="danger">危险链接按钮</Button>
  </div>
  <div>
    <Button theme="text" level="main">主要文字按钮</Button>
    <Button theme="text">普通文字按钮</Button>
    <Button theme="text" level="danger">危险文字按钮</Button>
  </div>
  <h1>示例4</h1>
  <div>
    <Button disabled>默认按钮</Button>
    <Button theme="link" disabled>链接按钮</Button>
    <Button theme="text" disabled>文字按钮</Button>
  </div>
  <h1>示例5</h1>
  <div>
      <Button loading>加载中</Button>
      <Button>加载完毕</Button>
  </div>-->
</template>
<script lang="ts">
import CodeDemo from "./CodeDemo.vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";
import {BUTTON_DEMO_01,BUTTON_DEMO_02,BUTTON_DEMO_03,BUTTON_DEMO_04,BUTTON_DEMO_05} from './codeString.js'
export default {
  name: "ButtonDemo",
  components: {
    CodeDemo,
    Button1Demo,
    Button2Demo,
    Button3Demo,
    Button4Demo,
    Button5Demo
    
  },
  setup() {
    
    return {Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
      BUTTON_DEMO_01,
      BUTTON_DEMO_02,
      BUTTON_DEMO_03,
      BUTTON_DEMO_04,
      BUTTON_DEMO_05
    };
  },
};
</script>
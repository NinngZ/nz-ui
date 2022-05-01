<template>
    <div class="demo">
      <h2>{{title}}</h2>
      <div class="demo-component">
        <component :is="newcomponent" :key="title" />
        
      </div>
      <div class="demo-actions">
        <Button @click="toggle">{{codeVisible?'隐藏代码': '查看代码'}}</Button>
        <Button @click="copy">复制代码</Button>
      </div>
      <div class="demo-code" v-if="codeVisible">
        <pre class="language-html">
          <code  v-html="html" />
        </pre>
      </div>
    </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.min.css";
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
//const Prism = (window as any).Prism;
import useClipboard from 'vue-clipboard3'
import { Message } from '../lib/message'
export default {
  name: "CodeDemo",
  props:{
      newcomponent:{
          type:Object
      },
      codeStr:String,
      title:String
  },
  components: {
    Button,
  },
  setup(props) {
      const { toClipboard } = useClipboard()
      const html = computed(()=>{
          return Prism.highlight(props.codeStr, Prism.languages.html, 'html')
      })
      const codeVisible = ref(false);
      const toggle = ()=>{
          codeVisible.value = !codeVisible.value
      }
      const copy = async () => {
      
      try {
        await toClipboard(props.codeStr)
        Message({
          type:'success',
          message:'已成功复制代码到剪贴板。'
        })
        
      } catch (e) {
        Message({
          type:'danger',
          message:'复制失败，请重新操作。'
        })
        
      }
    }
    return {
      Prism,
      codeVisible,
      toggle,
      html,
      copy
    };
  },
};
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  border-radius: 6px;
  margin: 16px 0 32px;
  max-width: 1000px;
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
    
    > code {
      line-height: 1.1;
      margin: 0;
      
    }
  }
}
</style>
<style lang="scss">
@import "prismjs/themes/prism-tomorrow.min.css";
</style>

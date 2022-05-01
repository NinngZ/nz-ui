<template>
  <div class="nz-tabs">
    <div class="nz-tabs-nav" ref="container">
      <div
        v-for="(title, index) in titles"
        :key="index"
        :class="{selected:title === selected}"
        class="nz-tabs-nav-item"
        @click="select(title)"
        :ref="(el)=>{if(title === selected) selectedItem = el}"
      >
        {{ title }}
      </div>
      <div class="nz-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="nz-tabs-content">
      <!--
        原采用的通过css中display的方式
        <component
        v-for="(d, index) in defaults"
        :is="d"
        :key="index"
        
        class="nz-tabs-content-item"
        :class="{selected:d.props.title === selected}"
      ></component>
      -->
      <!--改进后的方案-->
      <component :is="current" :key="current.props.title"></component>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from '@vue/reactivity';
import Tab from "./Tab.vue";
import { computed, onMounted, watchEffect } from '@vue/runtime-core';
export default {
  components: {
    Tab,
  },
  props:{
      selected:{
          type:String
      }
  },
  setup(props, context) {
    const selectedItem = ref< HTMLDivElement >(null);
    const indicator = ref< HTMLDivElement>(null);
    const container = ref< HTMLDivElement>(null);
    
    const x=()=>{
        const {width} = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + 'px';
        const {left:lefContainer} = container.value.getBoundingClientRect();
        const {left:leftSelected} = selectedItem.value.getBoundingClientRect();
        const left = leftSelected - lefContainer;
        indicator.value.style.left = left + 'px';
    }
    onMounted(()=>{
        watchEffect(()=>{
        const {width} = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + 'px';
        const {left:lefContainer} = container.value.getBoundingClientRect();
        const {left:leftSelected} = selectedItem.value.getBoundingClientRect();
        const left = leftSelected - lefContainer;
        indicator.value.style.left = left + 'px';
    })
    })
    
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 的子标签必须是Tab组件");
      }
    });
    const current = computed(()=>{
        return defaults.find(tag=>tag.props.title === props.selected)
    })
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title:string)=>{
        context.emit('update:selected',title)
    }
    return {
      defaults,
      titles,
      select,
      selectedItem,
      container,
      indicator,
      current
    };
  },
};
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.nz-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
        position: absolute;
        height: 3px;
        background: $blue;
        left: 0;
        bottom: -1px;
        width: 10px;
        transition: all 0.5s;
    }
  }
  &-content {
    padding: 8px 0;
    
  }
  
}
/*&-item {
      display: none;
      &.selected {
          display: block;
      }
  }*/
</style>

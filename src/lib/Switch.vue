<template>
  <div>
    <button class="nz-switch" :class="{ 'nz-checked': value }" @click="toggle"  :disabled="!!disabled">
      <span></span>
    </button>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  name: "Switch",
  props: {
    value: {
      type:Boolean
    },
    disabled:{
      type: Boolean,
      default:false
    }
  },
  
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return {
      toggle
    };
  },
};
</script>
<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.nz-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: calc($h / 2);
  position: relative;
  &[disabled] {
    cursor: not-allowed;
  }
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: calc($h2 / 2);
    transition: all 250ms ease-in;
  }
  &.nz-checked {
    background: #1890ff;
    > span {
      left: calc(100% - $h2 - 2px);
    }
  }

  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.nz-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
      /*按钮宽度增加后，向左移动一定的距离，保持原有的效果，不会超出右侧背景边缘*/
    }
  }
}
</style>
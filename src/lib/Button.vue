<template>
  <button class="nz-button" :class="nzButtonClasses" :disabled="disabled" >
    <span v-if="loading" class="nz-loadingIndicator"></span>
    <slot />
    
  </button>
</template>
<script lang="ts">
import { computed } from "@vue/runtime-core";
export default {
  name: "Button",
  //inheritAttrs:false,       //取消默认绑定，子元素不继承父元素的属性 onClick等
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const { theme, size, level } = props;
    const nzButtonClasses = computed(() => {
      return {
        [`nz-theme-${theme}`]: theme,
        [`nz-size-${size}`]: size,
        [`nz-level-${level}`]: level,
      };
    });
    return {
      nzButtonClasses,
    };
  },
};
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey:gray;
.nz-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer; /*手型鼠标*/
  display: inline-flex; /**/
  justify-content: center;
  align-items: center;
  white-space: nowrap; /**/
  background: white;
  color: $color;
  border: 1px solid $border-color;
  box-shadow: 0 1px 0 fade-out($color: #000000, $amount: 0.95);
  transition: background 0.5s;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    /*兼容firefox的focus */
    border: 0;
  }
  &.nz-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($color: blue, $amount: 10%);
    }
  }
  &.nz-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken($color: white, $amount: 5%);
    }
  }
  &.nz-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.nz-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.nz-theme-button {
    &.nz-level-main {
      background: $blue;
      color: white;
      border-color: $border-color;
      &:hover,
      &:focus {
        background: darken($blue, 10%); /*darken lighten*/
        border-color: darken($blue, 10%);
      }
    }
    &.nz-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.nz-theme-link {
    &.nz-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.nz-theme-text {
    &.nz-level-main {
      color:$blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.nz-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.nz-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.nz-theme-link, &.nz-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .nz-loadingIndicator{
      display: inline-block;
      width: 14px;
      height: 14px;
      margin-right: 6px;
      border-radius: 8px;
      border-color: $blue $blue $blue transparent;
      border-style: solid;
      border-width: 2px;
      animation: nz-spin 2s infinite linear;
  }
}
@keyframes nz-spin{
    0%{ transform: rotate(0deg)}
    100%{ transform: rotate(360deg)}
}
</style>
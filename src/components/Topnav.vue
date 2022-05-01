<template>
  <div class="topnav">
    <router-link to="/" class="logo" >
      <svg class="icon">
        <use xlink:href="#icon-cat_1"></use>
      </svg>
      <h3>NZ UI</h3>
    </router-link>

    <ul class="menu">
        <li>
            <router-link to="/doc/intro" >文档</router-link>
        </li>
    </ul>
    
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleAside">
    <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import { Ref, inject } from "vue";
export default {
  name: "Topnav",
  props:{
      toggleMenuButtonVisible:{
          type:Boolean,
          default:false
      }
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {
      toggleAside,
    };
  },
};
</script>
<style lang="scss" scoped>
$color: #007974;

.topnav {
  background: rgb(134, 198, 240);
  opacity: 1;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  color: $color;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid rgb(134, 198, 240);
  box-shadow: 0px 1px 3px rgb(187, 189, 190);
  > .logo {
    max-width: 10em;
    min-width: 110px;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    text-decoration: none;
    > svg{
        width: 32px;
        height: 32px;
    }
    
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1.5em;
    }
  }
  > .toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 1em;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    border-radius: 4px;
    &:active,
    &:hover {
        background: fade-out($color: gray, $amount: 0.6);
    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
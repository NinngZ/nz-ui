
<template>
  <router-view></router-view>
</template>
<script lang="ts">
import { ref,provide } from 'vue'
import {router} from './router'

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
export default {
  name:'App',
  setup(){
    const clientWidth = document.documentElement.clientWidth;
    //获取页面的宽度，来判断是否需要显示列表栏
    const asideVisible = ref(clientWidth <= 500 ? false : true);
    provide('asideVisible',asideVisible)
    router.afterEach(()=>{
      if(clientWidth <= 500){
        asideVisible.value = false;
      }
    })


    return {
      asideVisible
    }
  }
}
</script>

<style>

</style>

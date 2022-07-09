<template>
  <div class="sub-menu"
    @mouseenter="showSubMenu"
    @mouseleave="hideSubMenu"
  >
    <div class="title">
        <slot name="title"></slot>
        <span class="sub-icon">&gt;</span>
    </div>
    <div class="sub-item" v-if="subMenuShow">
        <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name:'SubMenu',
    setup(){
        const subMenuShow = ref(false);
        let timer = null;
        const showSubMenu = () => {
            timer = setTimeout(()=>{
                subMenuShow.value = true;
            },300)        
        }
        const hideSubMenu = () => {
            clearTimeout(timer);
            timer = null;
            subMenuShow.value = false;
        }
        return {
            subMenuShow,
            showSubMenu,
            hideSubMenu
        }
    }
}
</script>

<style lang="scss" scoped>
.sub-menu{
    position: relative;
    border: 1px solid #fff;
    background-color: rgb(134, 198, 240);
    border-radius: 5px;
    .title{
        height: 40px;
        line-height: 40px;
        text-align: center;
        position: relative;
        .sub-icon{
            position: absolute;
            top: 0;
            right: 10px;
        }
    }
    .sub-item{
        position: absolute;
        top: 0;
        left: 100%;
        width: 100%;
        
    }
}
</style>
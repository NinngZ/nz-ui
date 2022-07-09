<template>
  <div class="topnavAndBanner">
    <Topnav />
    <div class="banner">
      <h1>NZ-UI</h1>
      <h2>一个组件库demo</h2>
      <p class="actions">
        <a href="https://github.com/NinngZ/nz-ui" target="_blank">GitHub</a>
        <router-link to="/doc/intro">开始</router-link>
      </p>
    </div>
    <div class="featrues">
      <div class="featrues-item">
        <svg class="icon">
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <h3 class="title">Vue 3</h3>
        <p class="content">使用了 Vue3 Composition API</p>
      </div>
      <div class="featrues-item">
        <svg class="icon">
          <use xlink:href="#icon-study"></use>
        </svg>
        <h3 class="title">学习</h3>
        <p class="content">用借鉴引导学习。</p>
        
      </div>
      
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  name: "Home",
  components: {
    Topnav,
  },
};
</script>
<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 5px;
$color: #007974;
.topnavAndBanner {
  background:rgb(134, 198, 240);
  /*clip-path: ellipse(80% 60% at 50% 40%);*/
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.banner {
    color: $color;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 500px;
    flex-grow: 1;
    border-bottom: 2px solid rgb(187, 189, 190);
    
    >.actions{
        padding: 8px 0;
        a{
            margin: 0 8px;
            background: rgb(45, 123, 172);
            
            color: white;
            display: inline-block;
            padding: 8px 24px;
            border-radius: $border-radius;
            &:hover{
                text-decoration: none;
            }
        }
    }
}
.featrues{
  flex-basis: 500px;
  flex-grow: 1;
  
  display: flex;
  justify-content: space-around;
  
  padding: 100px 0 0;
  @media (max-width:800px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0;
  }
  &-item{
    width: 400px;
    height: 100px;
    background: rgba(251,251,251,0.2);
    box-shadow: 1px 1px 2px rgb(163, 166, 167);
    backdrop-filter: blur(5px);
    border-radius: 6px;
    display: grid;
    grid-template-areas: "icon title" 
                         "icon content";
    grid-template-columns: 120px auto;
    grid-template-rows: 11fr 9fr;
    justify-content: start;
    align-content: space-around;
    align-items: center;
    >svg{
      grid-area: icon;
      width: 100px;
      height: 100px;
      
    }
    > h3{
      grid-area: title;
      font-size: xx-large;
      
    }
    > p{
      grid-area: content;
      font-size: larger;
      
    } 
      
  }
}
</style>
<template>
  <div class="ui-stars">
    <span
      v-for="num in 5"
      :key="num"
      :class="['iconfont icon-Star', num <= starNum ? 'active' : '']"
      :style="{ fontSize: size + 'px' }"
      @click="setStarNum(num)"
    ></span>
  </div>
</template>

<script>
import { useStars} from './star'
export default {
  name: "Stars",
  props:{
    num:{
      type:Number,
      default:0
    },
    size:{
      type:Number,
      default:16
    }
  },
  setup(props,ctx){
    const [starNum,setStarNum] =  useStars(props.num,()=>{
      ctx.emit('getStarNum',starNum.value)
    })

    return {
      starNum,
      setStarNum
    }
  }
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "iconfont"; /* Project id 3505528 */
  src: url('iconfont.woff2?t=1657136483541') format('woff2'),
       url('iconfont.woff?t=1657136483541') format('woff'),
       url('iconfont.ttf?t=1657136483541') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #999;
  &.icon-Star:before {
    padding-left: 10px;
    content: "\e712";
  }
  &.active {
    color: #fbab06;
  }
}
  
</style>

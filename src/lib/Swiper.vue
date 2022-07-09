<template>
  <div class="swiper" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div class="inner">
        <SwiperDot
         :hasDot="hasDot"
         :itemLen="itemLen"
         :currentIndex="currentIndex"
         :dotBgColor="dotBgColor"
         @dotClick="dotClick"
        />
        <Director dir="prev" @dirClick="dirClick"/>
        <Director dir="next" @dirClick="dirClick"/>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, onMounted, onBeforeMount,getCurrentInstance } from "vue";
import SwiperDot from './swiper/Dot.vue'
import Director from './swiper/Director.vue'
export default {
  name: "Swiper",
  components:{
      SwiperDot,
      Director
  },
  props: {
    autoplay: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    initial: {
      type: Number,
      default: 0,
    },
    hasDot: {
      type: Boolean,
      default: true,
    },
    hasDirector: {
      type: Boolean,
      default: true,
    },
    dotBgColor:String
  },
  setup(props) {
      const instance = getCurrentInstance();
    const state = reactive({
      currentIndex: props.initial,
      itemLen:0
    });
    let t = null;
    const autoplay =  () => {
      if (props.autoplay) {
        t = setInterval(() => {
            setIndex('next');
        }, props.duration);
      }
    };
    const setIndex = (dir) => {
        switch(dir){
            case 'next':
                state.currentIndex += 1;
                if(state.currentIndex === state.itemLen){
                    state.currentIndex = 0;
                }
                break;
            case 'prev':
                state.currentIndex -= 1;
                if(state.currentIndex === -1){
                    state.currentIndex = state.itemLen - 1;
                }
                break;
            default:
                break;
        }
    }
    const dotClick =(index) => {
        state.currentIndex = index;
    }
    const mouseEnter = () => {
        _clearIntervalFn();
    }
    const mouseLeave = () => {
        autoplay();
    }
    const dirClick = (dir) => {
        setIndex(dir);
    }
    onMounted(() => {
      state.itemLen = instance.slots.default()[0].children.length
      autoplay();
    });
    onBeforeMount(() => {
      _clearIntervalFn();
    });
    function _clearIntervalFn(){
        clearInterval(t);
        t = null;
    }
    return {
      ...toRefs(state),
      dotClick,
      mouseEnter,
      mouseLeave,
      dirClick
    };
  },
};
</script>
<style lang="scss">
.swiper {
  width: 100%;
  height: 100%;
  .inner {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
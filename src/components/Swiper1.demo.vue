<template>
    <div class="container">
        <Swiper 
            :autoplay="true" 
            :duration="3000" 
            :initial="0" 
            :hasDot="true" 
            :hasDirector="true" 
            dotBgColor="orange"
        >
            <SwiperItem v-for="(item,index) of swiperList" :key="index">
                <img :src="`/src/assets/${item.img_name}`" alt="">
            </SwiperItem>
        </Swiper>
    </div>
</template>
<script>
import Swiper from "../lib/Swiper.vue";
import SwiperItem from "../lib/SwiperItem.vue";
import swiperList from "./imgData"
export default {
    name:'Swiper1Demo',
    components:{
        Swiper,
        SwiperItem
    },
    setup(){
        
        return {
            swiperList
        }
    }
}
</script>
<style lang="scss" scoped>
.container{
    width: 350px;
    height: 200px;
}
</style>
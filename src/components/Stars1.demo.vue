<template>
  <Stars
   :num="3"
   :size="50"
   @getStarNum="getStarNum"
  />
</template>
<script>
import Stars from "../lib/Stars.vue";
export default {
    name:'StarsDemo',
    components:{
        Stars
    },
    setup(){
        const getStarNum = (num) => {
            console.log(num)
        }
        return{
            getStarNum
        }
    }
}
</script>
<template>
    <transition name="nz-message-fade" @before-leave="onClose" @after-leave="$emit('destory')">
        <div class="nz-message" :class="[messageClass,centerClass]" :style="customStyle" v-show="visible" :key="id" >
            <span>
                <svg class="icon">
                    <use :xlink:href="icon"></use>
                </svg>
                <span>{{message}}</span>
            </span>
         </div>
    </transition>   
</template>
<script lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
export default {
    props:{
        type:{type:String,default:'info'},
        message:{type:String},
        offset:{type:Number,default:20},
        id:{type:String},
        onClose:{type:Function},
        duration:{type:Number,default:3000},
        center:{type:Boolean,default:false}
    },
    setup(props){
        const messageClass = computed(()=>{
            return `nz-message-${props.type}`
        })
        const icon = computed(()=>{
            return `#icon-${props.type}`
        })
        const visible = ref(false)
        let timer = null;
        const startTimer = ()=>{
            
            timer = setTimeout(()=>{
                visible.value = false;
            },props.duration >=1000 ? props.duration :1000)
        }
        const customStyle = computed(()=>{
            return  {
                top:`${props.offset}px`
            }
        })
        const centerClass = computed(()=>{
            return props.center? 'nz-message-center' : null;
        })
        
        onMounted(()=>{
            visible.value = true
            startTimer()
        })
        onUnmounted(()=>{
            clearTimeout(timer)
        })
        return {
            messageClass,
            icon,
            visible,
            customStyle,
            centerClass
        }
    }
}
</script>
<style lang="scss" >
$color-success:rgba(103, 194, 58,0.3);
$color-warn:rgba(230, 162, 60,0.3);
$color-danger:rgba(245, 108, 108,0.3);
$color-info:rgba(144, 147, 153,0.3);
$message-height:50px;
.nz-message{
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    min-width: 300px;
    background: rgb(211, 209, 209);
    height:$message-height;
    line-height: $message-height;
    padding: 0 1rem;
    border-radius: 4px;
    color: #fff;
    background-color: transparent;
    display: flex;
    transition: all 0.5s linear;
    &-center{
        justify-content: center;
    }
    > span{
        display: flex;
        align-items: center;
        >svg{
            display: inline-block;
            width: 1.2em;
            height: 1.2em;
            margin-right: 5px;
        }
    }
    &-info{
        background: $color-info;
        color: rgb(144, 147, 153);
    }
    &-success {
        background: $color-success;
        color: rgb(103, 194, 58);
    }
    &-warn {
        background: $color-warn;
        color: rgb(230, 162, 60);
    }
    &-danger {
        
        background: $color-danger;
        color: rgb(245, 108, 108);
    }
}
.nz-message-fade-enter-from,.nz-message-fade-leave-to{
    transform: translate(-50%,-100%);
    opacity: 0;
}

</style>
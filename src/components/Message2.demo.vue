<template>
    <div>
        <Button @click="showMessage({message:'这是一条默认3s的message',type:'info',duration:3000,center:false})" >
            默认停留3秒
        </Button>
        <Button @click="showMessage({message:'这是一条停留10s的message',type:'info',duration:10000,center:false})" >
            通过传入duration，设置为停留10秒
        </Button>
        
    </div>
</template>
<script lang="ts">
import MessageVue from "../lib/Message.vue"
import Button from "../lib/Button.vue"
import {Message} from '../lib/message'
export default {
    components:{
        MessageVue,
        Button
    },
    setup(){       
        const showMessage = (options)=>{
            Message(options)
        }
        return {
            showMessage
        }
    }
}
</script>
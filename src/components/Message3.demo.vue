<template>
    <div>
        <Button @click="showMessage({message:'这是一条内容居中的message',type:'info',duration:3000,center:true})" >
            内容居中
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
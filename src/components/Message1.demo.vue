<template>
    <div>
        <Button @click="showMessage({message:'这是一条【成功】的message',type:'success',duration:3000,center:false})" >
            success
        </Button>
        <Button @click="showMessage({message:'这是一条【失败】的message',type:'danger',duration:3000,center:false})" >
            danger
        </Button>
        <Button @click="showMessage({message:'这是一条【警告】的message',type:'warn',duration:3000,center:false})" >
            warn
        </Button>
        <Button @click="showMessage({message:'这是一条【普通】的message',type:'info',duration:3000,center:false})" >
            info
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


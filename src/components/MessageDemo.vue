<template>
    <div>
        <h1>Message 示例</h1>     
        <CodeDemo :newcomponent="Message1Demo" title="常规使用" :codeStr="MESSAGE_DEMO_01" />
        <CodeDemo :newcomponent="Message2Demo" title="支持设置停留时长" :codeStr="MESSAGE_DEMO_02" />
        <CodeDemo :newcomponent="Message3Demo" title="支持设置居中" :codeStr="MESSAGE_DEMO_03" />
    </div>
</template>
<script lang="ts">
import CodeDemo from "./CodeDemo.vue";
import Message1Demo from "./Message1.demo.vue";
import Message2Demo from "./Message2.demo.vue";
import Message3Demo from "./Message3.demo.vue";
import {MESSAGE_DEMO_01,MESSAGE_DEMO_02,MESSAGE_DEMO_03} from './codeString.js'
export default {
    components:{
        CodeDemo,
        Message1Demo,
        Message2Demo
    },
    setup(){
        
        return {
            Message1Demo,
            Message2Demo,
            Message3Demo,
            MESSAGE_DEMO_01,
            MESSAGE_DEMO_02,
            MESSAGE_DEMO_03
        }
    }
}
</script>
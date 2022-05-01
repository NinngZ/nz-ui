<template>
    <article class="markdown-body" v-html="content"> 
        
    </article>
</template>
<script lang="ts">
import { ref } from '@vue/reactivity'
    export default{
        props:{
            path:{
                type:String,
                required:true
            }
        },
        setup(props){
            console.log(1111111)
            console.log(typeof props.path)
            const content = ref< string >(null);
            
            /*import(props.path).then(result=>{
                console.log(result)
                console.log(222222222)
                content.value = result.default;
                console.log(content)
                console.log(333333)
            })*/
            return {
                content
            }
        }
    }
</script>
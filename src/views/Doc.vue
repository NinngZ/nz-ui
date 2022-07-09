<template>
    <div class="layout">
        <Topnav toggleMenuButtonVisible class="nav"/>
        <div class="content">
            <aside v-if="asideVisible">
                <h2>文档</h2>
                <ol>
                    <li>
                        <router-link to="/doc/intro">介绍</router-link>
                    </li>
                    <!--
                    <li>
                        <router-link to="/doc/install">安装</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/get-started">开始使用</router-link>
                    </li>
                    -->
                </ol>
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/message">Message 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/swiper">Swiper 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/stars">Stars 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/treemenu">TreeMenu 组件</router-link>
                    </li>
                </ol>
                    
            </aside>
            <main>
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>
<script lang="ts">
    import { Ref,inject } from 'vue'
    import Topnav from "../components/Topnav.vue";
    export default{
        name:'Home',
        components:{
            Topnav
        },
        setup(){
            const asideVisible = inject<Ref<boolean>>('asideVisible')

            return {
                asideVisible
            }
        }
    }
</script>
<style lang="scss" scoped>
    .layout{
        display: flex;
        flex-direction: column;
        height: 100vh;
        > .nav{
            flex-shrink: 0;
        }
        > .content{
            flex-grow: 1;
            padding-top: 50px;
            padding-left: 186px;
            @media (max-width:500px) {
                padding-left: 0;
            }
        }
    }
    .content{
        display: flex;
        >aside{
            flex-shrink: 0;
        }
        >main{
            flex-grow: 1;
            padding:28px  16px 0;
            background: white;
            
        }
    }
    aside{
        background: rgba(134, 198, 240,0.8);
        width: 180px;
        padding: 16px 0;
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 85px;
        height: 100%;
        z-index: 10;
        
        > h2{
            margin-bottom: 4px;
            padding: 5px 16px; /*为了和链接保持纵向对其*/
        }
        > ol{
            > li{
                /*让li标签完全包裹了里面的router-link*/
                >a{
                    display: block;
                    padding: 10px 25px;
                    text-decoration: none;
                }
                .router-link-active{
                    background:rgba(255, 255, 255, 0.3);
                    border-left: 5px solid rgb(246, 246, 129);
                    /*background: #C8EE44;*/
                    padding-left: 20px;
                }
            }
        }
       
    }
    
    main{
        overflow: auto;
    }
</style>
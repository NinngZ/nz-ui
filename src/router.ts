import {createWebHashHistory,createRouter,createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DocDemo from './components/DocDemo.vue'
import MessageDemo from './components/MessageDemo.vue'
import SwiperDemo from './components/SwiperDemo.vue'
import StarsDemo from './components/StarsDemo.vue'
import TreeMenuDemo from './components/TreeMenuDemo.vue'
import GetStarted from './views/GetStarted.vue'
import Install from './views/Install.vue'
import Intro from './views/Intro.vue'

//import {h} from 'vue'
//import Markdown from './components/Markdown.vue';

/*const markdown = filename => h(Markdown,{
    path:`../markdown/${filename}.md`,
    key:filename
})*/

//`../markdown/${filename}.md`

const history = createWebHashHistory()
export const router = createRouter({
    history:history,
    routes:[
        
        {path:'/',component:Home},
        {path:'/doc',component:Doc,children:[
            {path:'',component:DocDemo},
            {path:'get-started',component:GetStarted},
            {path:'install',component:Install},
            {path:'intro',component:Intro},
            {path:'switch',component:SwitchDemo},
            {path:'button',component:ButtonDemo},
            {path:'dialog',component:DialogDemo},
            {path:'tabs',component:TabsDemo},
            {path:'message',component:MessageDemo},
            {path:'swiper',component:SwiperDemo},
            {path:'stars',component:StarsDemo},
            {path:'treemenu',component:TreeMenuDemo}
        ]}
        
    ]
})
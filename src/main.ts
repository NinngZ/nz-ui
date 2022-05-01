import { createApp } from 'vue'
import './index.scss'
import './lib/nz-ui.scss'
import 'github-markdown-css'
import App from './App.vue'

import {router} from './router'



const app = createApp(App)
app.use(router)
app.mount('#app')
//app.component('MarkDown',Markdown)  //注册全局组件
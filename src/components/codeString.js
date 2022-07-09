export const SWIITCH_DEMO_01 = `
<template>
<Switch v-model:value="bool" />
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
export default {
name:'Switch1Demo',
components: {
  Switch,
},
setup() {
  const bool = ref(false);
  return {
    bool
  };
},
};
</script>`;

export const SWIITCH_DEMO_02 = `
<template>
  <Switch v-model:value="bool" disabled />
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
export default {
  components: {
    Switch
  },
  setup() {
    const bool = ref(false);
    return {
      bool
    };
  },
};
</script>`;

export const BUTTON_DEMO_01 = `
<template>
<div>
  <Button>你好</Button>
  <Button theme="link">你好</Button>
  <Button theme="text">你好</Button>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>`;

export const BUTTON_DEMO_02 = `
<template>
<div>
  <div>
    <Button size="big">大大大</Button>
    <Button>普普通</Button>
    <Button size="small">小小小</Button>
  </div>
  <div>
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">普普通</Button>
    <Button size="small" theme="link">小小小</Button>
  </div>
  <div>
    <Button size="big" theme="text">大大大</Button>
    <Button theme="text">普普通</Button>
    <Button size="small" theme="text">小小小</Button>
  </div>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>`;

export const BUTTON_DEMO_03 = `
<template>
<div>
  <div>
    <Button level="main">主要按钮</Button>
    <Button>普通按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="link" level="main">主要链接按钮</Button>
    <Button theme="link">普通链接按钮</Button>
    <Button theme="link" level="danger">危险链接按钮</Button>
  </div>
  <div>
    <Button theme="text" level="main">主要文字按钮</Button>
    <Button theme="text">普通文字按钮</Button>
    <Button theme="text" level="danger">危险文字按钮</Button>
  </div>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>`;

export const BUTTON_DEMO_04 = `
<template>
<Button disabled>禁用按钮</Button>
<Button theme="link" disabled>禁用链接按钮</Button>
<Button theme="text" disabled>禁用按钮</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>`;

export const BUTTON_DEMO_05 = `
<template>
<div>
  <Button loading>加载中</Button>
  <Button>加载完毕</Button>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>`;

export const DIALOG_DEMO_01 = `
<template>
<div>
  <Button @click="toggle">打开对话框</Button>
  <Dialog v-model:visible="dialogVisible" :closeOnClickOverlay="false" :ok="okFn" :cancel="cancelFn">
    <template v-slot:content>
      <strong>hi</strong>
      <div>hi2</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
</div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'

export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const dialogVisible = ref(false)
    const toggle = () => {
      dialogVisible.value = !dialogVisible.value
    }
    const okFn = () => {
      return false
    }
    const cancelFn = () => {}
    return {
      dialogVisible,
      toggle,
      okFn,
      cancelFn
    }
  }
}
</script>`;

export const DIALOG_DEMO_02 = `
<template>
<div>
  <Button @click="showDialog">打开对话框</Button>
</div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import {
  ref,
  h
} from 'vue'
import {
  openDialog
} from '../lib/openDialog'
export default {
  components: {
    Button
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {
      showDialog
    }
  }
}
</script>`;

export const TABS_DEMO_01 = `
<template>
<Tabs v-model:selected="isSelected">
  <Tab title="导航1">内容1</Tab>
  <Tab title="导航2">内容2</Tab>
</Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Tabs,
    Tab
  },
  setup() {
    const isSelected = ref('导航2')
    return {
      isSelected
    }
  }
}
</script>`;

export const MESSAGE_DEMO_01 = `
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
</script>`;

export const MESSAGE_DEMO_02 = `
<template>
    <div>
        <Button @click="showMessage({message:'这是一条【成功】的message',type:'info',duration:3000,center:false})" >
            默认停留3秒
        </Button>
        <Button @click="showMessage({message:'这是一条【失败】的message',type:'info',duration:10000,center:false})" >
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
</script>`;

export const MESSAGE_DEMO_03 = `
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
</script>`;


export const SWIPER_DEMO_01 = `
<template>
    <div class="container">
        <Swiper 
            :autoplay="true" 
            :duration="3000" 
            :initial="0" 
            :hasDot="true" 
            :hasDirector="true" 
            dotBgColor="orange"
        >
            <SwiperItem v-for="(item,index) of swiperList" :key="index">
                <img :src="\`/src/assets/\${item.img_name}\`" alt="">
            </SwiperItem>
        </Swiper>
    </div>
</template>
<script>
import Swiper from "../lib/Swiper.vue";
import SwiperItem from "../lib/SwiperItem.vue";
import swiperList from "./imgData"
export default {
    name:'Swiper1Demo',
    components:{
        Swiper,
        SwiperItem
    },
    setup(){      
        return {
            swiperList
        }
    }
}
</script>
<style lang="scss" scoped>
.container{
    width: 350px;
    height: 200px;
}
</style>`;

export const STARS_DEMO_01=`
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
</script>`;

export const TREEMENU_DEMO_01 =`
<template>
  <div class="side-bar">
    <TreeMenu>
      <template v-for="item of menuData">
        <!--这里的tempalte 可以用div代替-->
        <MenuItem v-if="!item.children" :key="item.id">
          {{ item.title }}
        </MenuItem>
        <ReSubMenu v-else :key="item.title" :data="item"></ReSubMenu>
      </template>
    </TreeMenu>
  </div>
</template>

<script>
import TreeMenu from "../lib/treemenu/TreeMenu.vue";
import MenuItem from "../lib/treemenu/MenuItem.vue";
import ReSubMenu from "../lib/treemenu/ReSubMenu.vue";
export default {
  name: "TreeMenuDemo",
  components: {
    TreeMenu,
    MenuItem,
    ReSubMenu,
  },
  data() {
    return {
      menuData: [
        {
          id: 1,
          title: "菜单 1",
        },
        {
          id: 2,
          title: "菜单 2",
        },
        {
          id: 3,
          title: "菜单 3",
          children: [
            {
              id: 31,
              title: "菜单 3-1",
            },
            {
              id: 32,
              title: "菜单 3-2",
            },
            {
              id: 33,
              title: "菜单 3-3",
              children: [
                {
                  id: 331,
                  title: "菜单 3-3-1",
                },
                {
                  id: 332,
                  title: "菜单 3-3-2",
                },
                {
                  id: 333,
                  title: "菜单 3-3-3",
                },
                {
                  id: 334,
                  title: "菜单 3-3-4",
                },
              ],
            },
            {
              id: 34,
              title: "菜单 3-4",
            },
            {
              id: 35,
              title: "菜单 3-5",
            },
          ],
        },
        {
          id: 4,
          title: "菜单 4",
        },
        {
          id: 5,
          title: "菜单 5",
          children: [
            {
              id: 51,
              title: "菜单 5-1",
            },
            {
              id: 52,
              title: "菜单 5-2",
            },
            {
              id: 53,
              title: "菜单 5-3",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.side-bar {
  width: 300px;
}
</style>`;

export const X_DEMO_00 = ``;

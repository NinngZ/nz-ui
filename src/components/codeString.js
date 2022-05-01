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

export const X_DEMO_00 = ``;

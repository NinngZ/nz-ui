# 开始使用
请先[安装](#/doc/install)本组件库。

然后在代码中写入下面的代码

```
import {Button, Tabs, Switch, Dialog} from "nz-ui-demo"
```

就可以使用相应的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog} from "nz-ui-demo"
export default {
  components: {Button}
}
</script>
```
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
</style>
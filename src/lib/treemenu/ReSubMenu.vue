<template>
  <SubMenu>
    <template v-slot:title>{{ data.title }}</template>
    <template v-for="c of data.children" :key="c.id">
      <MenuItem v-if="!c.children">{{ c.title }}</MenuItem>
      <ReSubMenu v-else :key="c.id" :data="c"></ReSubMenu>
    </template>
  </SubMenu>
</template>

<script>
import MenuItem from "./MenuItem.vue";
import SubMenu from "./SubMenu.vue";
export default {
  name: "ReSubMenu",
  components: {
    SubMenu,
    MenuItem
  },
  props:{
    data:Object
  }
};
</script>

<style>
</style>
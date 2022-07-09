<template>
  <div class="menu-item">
    <a href=""><slot></slot></a>
  </div>
</template>

<script>
export default {
    name:'MenuItem'
}
</script>

<style lang="scss" scoped>
.menu-item{
    height: 40px;
    text-align: center;
    line-height: 40px;
    border: 1px solid #fff;
    background-color: rgb(134, 198, 240);
    border-radius: 5px;
    a{
      text-decoration: none;
    }
}
</style>
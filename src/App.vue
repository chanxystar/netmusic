<template>
  <div class="container">
    <div class="tabBar">
    <TabBar></TabBar>
    </div>
    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
import TabBar from './components/TabBar/index.vue'
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  height: 100vh;
   .tabBar{
    flex-basis: 16%;
  }
  .page{
    flex: 1;
  }
}
</style>


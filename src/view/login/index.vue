<template>
  <div class="container">
    <img src="@/assets/login/login.png" alt="login" />
     <router-view></router-view>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 100vh;
  overflow: hidden;

  img {
    height: 130vh;
  }
}


</style>

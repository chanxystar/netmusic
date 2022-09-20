<template>
  <div class="container">
    <img src="../../assets/login.png" alt="login">
    <div class="login">
      <img src="../../assets/logo.png" alt="logo">
      <div class="loginBox"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container{
  display: flex;
  height: 100vh;
  overflow: hidden;
  
  img{
    height: 135vh;
  }
}

.login{
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
  img{
    margin:  auto;
    margin-bottom: 5rem;
    height: 5rem;
  }
   .loginBox{
    background-color: #1E242C;
    height: 40rem;
    width: 30rem;
    border-radius: 1.5rem;
   }
}
</style>

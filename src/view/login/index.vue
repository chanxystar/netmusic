<template>
  <div class="container">
    <img src="@/assets/login/login.png" alt="login" />
    <div class="login">
      <img src="../../assets/logo.png" alt="logo" />
      <div class="loginBox">
        <div class="title">登 入</div>
        <div class="form">
          <van-form @submit="onSubmit">
            <van-cell-group inset>
              <van-field 
                v-model="username"
                name="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
              />
              <van-field
                v-model="password"
                type="password"
                name="密码"   
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
              />
            </van-cell-group>
            <div style="margin: 16px">
              <van-button round block type="primary" native-type="submit">
                提交
              </van-button>
            </div>
          </van-form>
        </div>
        <div class="submitArea"></div>
        <div class="about"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 100vh;
  overflow: hidden;

  img {
    height: 130vh;
  }
}

.login {
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
  img {
    margin: auto;
    margin-bottom: 5rem;
    height: 5rem;
  }
  .loginBox {
    padding: 3rem;
    background-color: #1e242c;
    height: 34rem;
    width: 25rem;
    border-radius: 1.5rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    .title {
      font-size: 2rem;
      color: #cdf564;
      word-spacing: 1.5rem;
      margin-bottom: 3rem;
    }
    .form{
       &:deep(.van-field__control){
        width:22rem;
        height: 2rem;
        border-radius: 0.5rem;
        padding: 0.5rem;
        background-color: #16191E;
       }
       
      
      
    }
  }
}
</style>

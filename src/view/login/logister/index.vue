<template>
  <div class="login">
    <img src="../../../assets/logo.png" alt="logo" />
    <div class="loginBox">
      <div class="title">Sign Up</div>
      <div class="back" @click="backLogin">
        <i class="iconfont icon-shangyishou backIcon"></i>
      </div>
      <div class="form">
        <van-form @submit="onSubmit">
          <div class="inputBox">
            <van-field
            v-model="formData.userName"
            name="userName"
            placeholder="用户名或邮箱"
            autocomplete="off"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="formData.password"
            type="password"
            name="password"
            placeholder="密码"
            autocomplete="off"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <van-field
            v-model="formData.confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="确认密码"
            autocomplete="off"
            :rules="[{ required: true, message: '请确认密码' }]"
          />
          <van-field
            v-model="formData.nickName"
            type="text"
            name="nickName"
            placeholder="昵称"
            autocomplete="off"
            :rules="[{ required: true, message: '请输入一个昵称' }]"
          />
          </div>
          <div class="radio">
            <van-field name="sex">
            <template #input>
              <van-radio-group v-model="formData.sex" direction="horizontal">
                <van-radio name="1">男</van-radio>
                <van-radio name="2">女</van-radio>
              </van-radio-group>
            </template>
          </van-field>
          </div>
        
          <div class="submitArea">
            <van-button round block type="primary" native-type="submit">
              完成注册
            </van-button>
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const formData = reactive({
  userName: "",
  password: "",
  confirmPassword: "",
  nickName: "",
  sex: "1",
});
const onSubmit = (data: object) => {
  console.log(data);
};

//返回登入
const backLogin = () => {
  router.replace("/login");
};
</script>

<style lang="scss" scoped>
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
    position: relative;
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
      word-spacing: 0.5rem;
      margin-bottom: 3rem;
    }
    .back {
      cursor: pointer;
      height: 3rem;
      width: 3rem;
      border-radius: 1.5rem;
      background-color: #cdf564;
      line-height: 3rem;

      position: absolute;
      left: 2rem;
      top: 3rem;
      text-align: center;

      .backIcon {
        font-size: 1.5rem;
      }
    }
    .form {
      width: 22rem;
      margin-bottom: 5rem;
      display: flex;
      flex-flow: column nowrap;
      .inputBox{
        &:deep(.van-field) {
        margin-bottom: 1rem;
        border-radius: 0.3rem;
        background-color: #16191e;
        border-color: #16191e;
        input {
          color:#FFFFFF;
        }
        &::after {
          display: none;
        }
      }
      }
      
      &:deep(.van-field__error-message) {
        color: #cdf564;
      }
      .radio {
        &:deep(.van-field) {
          margin-bottom: 1rem;
          border-radius: 0.3rem;
          background-color: #1e242c;
          padding: 0;
          
        }
        &:deep(.van-radio){
          margin-right: 2rem;
        }
        &:deep(.van-radio__label){
          color: #FFFFFF;
        }
        &:deep(.van-icon){
          background-color: #16191e;
          border-color: #16191e;
          border-radius: 0;
          
        }
      }
      .submitArea {
        
        text-align: center;
        position: absolute;
        bottom: 2.5rem;
        .forgetPwd {
          font-size: 0.5rem;
          letter-spacing: 0.5rem;
          margin: 2rem 0;
          cursor: help;
        }
        &:deep(.van-button) {
          cursor: pointer;
          width: 22rem;
          height: 3.5rem;
          background-color: #cdf564;
          font-size: 1.5rem;
          line-height: 1.5rem;
          text-align: center;
          border-radius: 0.5rem;
          word-spacing: 0.5rem;
          color: #000000;
          border-color: #cdf564;
        }

      }
    }
  }
}
</style>

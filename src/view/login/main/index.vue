<template>
  <div class="login">
    <img src="../../../assets/logo.png" alt="logo" />
    <div class="loginBox">
      <div class="title">Sign In</div>
      <div class="form">
        <van-form @submit="onSubmit" label-width="0">
          <van-field
            v-model="formData.userName"
            name="userName"
            placeholder="用户名或邮箱"
            autocomplete="off"
            :rules="[{ required: true, message: '请填写用户名!' }]"
          />
          <van-field
            v-model="formData.password"
            type="password"
            name="password"
            placeholder="密码"
            autocomplete="off"
            :rules="[{ required: true, message: '请填写密码!' }]"
          />

          <div class="submitArea">
            <div class="forgetPwd">忘记密码？</div>
            <van-button round block type="primary" native-type="submit">
              登 入
            </van-button>
          </div>
        </van-form>
      </div>
      <div class="about">
        <div class="other" @click="Toast('暂未开放，敬请期待')">
          <img src="../../../assets/login/wx.png" />
          <div>通过微信扫码登入</div>
        </div>
        <div class="other" @click="router.replace('/logister')">
          <img src="../../../assets/login/new.png" />
          <div>新用户？现在注册</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { loginApi } from "../../../service/index";
import { Md5 } from "ts-md5";
import { Toast } from "vant";
import Cookies from "js-cookie";
import {useStore} from '../../../store/user'
const router = useRouter();
const store = useStore()
interface Iform {
  userName: string;
  password: string;
}
const formData = reactive({
  userName: "",
  password: "",
});
const onSubmit = async (data: Iform) => {
  const { userName, password } = data;
  const res: any = await loginApi({
    email: userName,
    md5_password: Md5.hashStr(password),
  });
  if (res.code === 200) {
    //储存用户信息
    store.setInfo(res.profile)
    store.setToken(res.token)
    router.replace({
      path: "/home",
    });
  } else {
    Toast(res.message);
  }
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
    .form {
      width: 22.5rem;
      &:deep(.van-field) {
        margin-bottom: 2rem;
        border-radius: 0.3rem;
        background-color: #16191e;
        border-color: #16191e;
        input {
          color: rgba($color: white, $alpha: 0.5);
        }
        &::after {
          display: none;
        }
      }
      &:deep(.van-field__error-message) {
        color: #cdf564;
      }
      .submitArea {
        color: aliceblue;
        text-align: center;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        position: absolute;
        bottom: 15rem;
        left: 0;
        right: 0;
        .forgetPwd {
          font-size: 0.5rem;
          letter-spacing: 0.5rem;
          margin-bottom: 1rem;
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
          border-color: #cdf564;
          color: #000000;
        }
      }
    }
    .about {
      align-self: flex-start;
      position: absolute;
      bottom: 5rem;
      .other {
        margin-left: 2.3rem;
        color: aliceblue;
        font-size: 0.4rem;
        display: flex;
        height: 2rem;
        letter-spacing: 0.1rem;
        cursor: pointer;
        img {
          height: 1rem;
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>

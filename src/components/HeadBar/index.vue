<template>
  <div class="container">
    <div class="searchArea">
      <div class="searchInput">
        <input
          type="text"
          class="input"
          placeholder="search..."
          v-model="keywords"
          
        />
      </div>
      <div @click="search" class="btn iconfont icon-sousuo"></div>
    </div>
    <div class="others">
      <div class="vip">RealTone会员</div>
      <div class="icon" @click="Toast('敬请期待')">
        <img src="../../assets/headIcon.png" alt="headIcon" />
      </div>
      <van-popover
      v-if="store.isLogin"
        v-model:show="personPopData.show"
        @select="selectOption"
        :actions="personPopData.options"
        placement="bottom-end"
      >
        <template #reference>
          <div class="person">{{ nickname }}</div>
        </template>
      </van-popover>
      <div v-if="!store.isLogin" @click="goLogin" class="person">{{nickname}}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import { useStore } from "../../store/user";
import { useRouter } from "vue-router";
import { logout } from "../../service/index";
import { Toast } from "vant";
const store = useStore();
const router = useRouter();
let nickname = ref("");
const goLogin = () => {
  router.push("/login");
};
const logOut = async () => {
  store.reomoveToken();
  store.removeInfo();
  localStorage.removeItem("cookie");
  store.changeStatus(false);
  await logout({});
  nickname.value = "请登入";
};

interface OptionItem {
  text: string;
  disable: boolean;
}
//点击昵称弹出层相关
const personPopData = reactive({
  show: false,
  options: [
    { text: "个人中心", disable: true },
    { text: "退出登入", disable: true },
  ],
});
const selectOption = (option: OptionItem, index: number) => {
  switch (index) {
    case 0:
      router.push('/personal')
      break;
    case 1:
      logOut();
      break;
  }
};

//搜索跳转
let keywords = ref('') 
const search = ()=>{
  if(keywords.value=='')return Toast('搜索内容为空')
  router.push({
    path:'/searchResult',
    query:{
      keywords:keywords.value
    }
  })
  
}
onMounted(() => {
  
  nickname.value =
    store.userInfo === "" ? "请登入" : JSON.parse(store.userInfo).nickname;
});
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 3rem;
  text-align: center;
  .searchArea {
    display: flex;
    .searchInput {
      width: 46rem;
      height: 3rem;
      background-color: #cdf564;
      color: #000000;
      font-size: 0.75rem;
      border-radius: 0.5rem;
      margin: auto 2rem;
      .input {
        width: 43.5rem;
        height: 0.5rem;
        background-color: #cdf564;
        color: rgba($color: #000000, $alpha: 0.6);
        font-size: 0.75rem;
        border-radius: 0.5rem;
        border: 0px;
        padding: 1rem;
        font-size: 1rem;
      }
    }
    .btn {
      width: 3rem;
      height: 3rem;
      border-radius: 1.5rem;
      background-color: #cdf564;
      color: #000000;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
  .others {
    display: flex;
    width: 30rem;
    justify-content: space-evenly;
    .vip {
      width: 17rem;
      height: 3rem;
      border-radius: 0.5rem;
      background-color: #cdf564;
      color: #000000;
      font-size: 1rem;
      letter-spacing: 0.4rem;
      cursor: pointer;
    }
    .icon {
      width: 3rem;
      height: 3rem;
      cursor: pointer;
    }
    .person {
      color: #cdf564;
      cursor: pointer;
      font-size: 1rem;
    }
  }
}
</style>

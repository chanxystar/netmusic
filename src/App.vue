<template>
  <div class="container">
    <div v-if="tabShow" class="tabBar">
    <TabBar></TabBar>
    </div>
    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
import TabBar from './components/TabBar/index.vue'
import {useRouter} from 'vue-router'
import {ref,watch,onMounted} from 'vue'
import {useStore} from './store/user'
const store = useStore()
//当登入页面时，隐藏tabbar
const router = useRouter()
const tabShow = ref(false)
watch(()=>router.currentRoute.value.fullPath,(newVal)=>{
  tabShow.value = (newVal!== '/loginMain'&& newVal!== '/logister')
})
onMounted(()=>{
  let flag = localStorage.getItem('userInfo')
  if(flag) store.isLogin = true
  
  
})
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
    overflow-y: scroll;
  }
  .page::-webkit-scrollbar{
    display: none;
  }
}
</style>


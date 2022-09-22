<template>

    <div class="headBar"><HeadBar></HeadBar></div>
    <router-view></router-view>
  
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import HeadBar from "../components/HeadBar/index.vue";
import {loginStatus,userAccount} from '../service/index'
const status = async()=>{
   const res  = await userAccount({})
}
onMounted(()=>{
  status()
})
</script>

<style lang="scss" scoped>
 
.headBar {
  background-color: #16191E;;
  height: 6rem;
  top: 0;
  position: sticky;
  z-index: 999;

}
</style>

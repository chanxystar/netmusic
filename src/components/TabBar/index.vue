<template>
  <div class="container">
    <div class="logo" @click="router.push('/home')">
      <img src="../../assets/logo.png" alt="logo" />
    </div>
    <div class="navigation">
      <div v-for="(item, index) in tilteArr" :key="index" class="navItem">
        <div class="title">{{item}}</div>
        <div
          v-for="(child, i) in navArr[index]"
          :key="index"
          class="child"
        >{{child}}</div>
      </div>
    </div>
    <div class="player"></div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
//标题
const tilteArr = reactive<string[]>(['Home','Library','Blog']);
const navArr = reactive<string[][]>([
  ["新发行", "趋势", "青年", "新人", "周榜"],
  ["最喜欢", "老歌", "近期"],
  ["艺人故事", "邮寄"],
]);
</script>

<style lang="scss" scoped>
.container {
  background-color: #1e242c;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  .logo { 
    margin:2rem auto;
    margin-bottom: 1rem;
  }
  .navigation {
    width: 9rem;
    
    .navItem {
      display: flex;
      flex-flow: column nowrap;
      
      margin-bottom: 1rem;
      .title{
        font-size: 1.5rem;
        color: #B9FF00;
      }
      .child{
        font-size: 1.25rem;
        color: rgba($color: #E5E5E5, $alpha: 0.5);
        margin: 0.2rem 0;
        
      }
      .child:hover{
        color: #E5E5E5;
        cursor: pointer;
      }
    }
  }
}
</style>

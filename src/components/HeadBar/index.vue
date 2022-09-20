<template>
  <div class="container">
    <div class="searchArea">
      <div class="searchInput">
        <input type="text" class="input" placeholder="search..." v-model="searchValue" />
      </div>
      <div class="btn iconfont icon-sousuo"></div>
    </div>
    <div class="others">
      <div class="vip">RealTone会员</div>
      <div class="icon">
        <img src="../../assets/headIcon.png" alt="headIcon" />
      </div>
      <div class="person">Dan Persie</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
let searchValue = ref("");
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
      font-size: 0.75rem;
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

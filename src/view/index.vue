<template>
  <div class="headBar"><HeadBar></HeadBar></div>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import HeadBar from "../components/HeadBar/index.vue"

</script>

<style lang="scss" scoped>
.headBar{
  height: 6rem;
}
</style>

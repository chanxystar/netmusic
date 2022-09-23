<template>
  <div class="container">
    <div class="songsList">
      <LongStrip v-for="(item, index) in songsList" :data="item"></LongStrip>

    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted,onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { cloudsearch } from "../../service/index";
import LongStrip from "../../components/SongCard/LongStrip/index.vue";
const route = useRoute();
const searchParams = reactive({
  keywords: route.query.keywords,
  limit: 30,
  offset: 0,
});
interface songsItem {
  name: string;
  id: string;
  [key: string]: any;
}
let songsList = reactive<songsItem[]>([]);
const search = async () => {
  const res = await cloudsearch(searchParams);
  songsList.push(...res.data.result.songs);
};
onBeforeMount(() => {
  search();
  
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  .songsList {
    background-color: #1e242c;
    padding: 2rem;
    margin:  1rem 2rem;
  }
}
</style>

<template>
  <div class="container">
    <div class="songsList">
      <LongStrip v-for="(item, index) in songsData.songsList" :data="item"></LongStrip>

    </div>
    
  </div>
</template>

<script setup lang="ts">
import { reactive, watch,onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { cloudsearch } from "../../service/index";
import LongStrip from "../../components/SongCard/LongStrip/index.vue";
const route = useRoute();
const searchParams = reactive({
  keywords: route.query.keywords,
});
interface songsItem {
  name: string;
  id: string;
  [key: string]: any;
}
const songsData = reactive({
  songsList:[] as songsItem[]
})
const search = async () => {
  searchParams.keywords = route.query.keywords
  const res = await cloudsearch(searchParams);
  console.log(searchParams,res.data);
  songsData.songsList = res.data.result.songs
};
watch(()=>route.fullPath,(newVal)=>{
    search()
})
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

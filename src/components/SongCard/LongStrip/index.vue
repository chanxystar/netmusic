<template>
  <div class="container">
    <div class="detail">
      <img :src="props.data.al.picUrl" @click="playerMusic" />
      <div class="name-artist">
        <div @click="goSong" class="name">{{ props.data.name }}</div>
        <div @click="goArtist" class="artist">{{ props.data.ar[0].name }}</div>
      </div>
    </div>
    <div @click="goAlbum" class="album">{{ props.data.al.name }}</div>
    <div class="btns">
      <i class="iconfont icon-xihuan1"></i>
      <div class="more">···</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Toast } from "vant";
import { useStore } from "../../../store/player";
import { reactive, onMounted, watch } from "vue";
const store = useStore();
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});
const playerMusic = () => {
  let obj = {
    coverUrl: props.data.al.picUrl,
    id: props.data.id,
    name: props.data.name,
    artist: props.data.ar[0].name,
  };
  store.setData(obj);
};
const goSong = () => {
  Toast("进入歌曲");
};
const goArtist = () => {
  Toast("进入艺人");
};
const goAlbum = () => {
  Toast("进入专辑");
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  height: 7rem;
  width: 100%;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  .detail {
    height: 6rem;
    width: 30rem;
    display: flex;
    align-items: center;
    img {
      height: 6rem;
      width: 6rem;
      border-radius: 0.1rem;
      margin-right: 2rem;
      cursor: pointer;
    }
    .name-artist {
      color: #ffffff;
      .name {
        font-size: 1.6rem;
      }
      .artist {
        font-size: 1rem;
        cursor: pointer;
      }
    }
  }
  .album {
    width: 20rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: none;
    text-align: center;
    color: rgba($color: #ffffff, $alpha: 0.6);
    cursor: pointer;
  }
  .btns {
    display: flex;
    align-items: center;
    color: #ffffff;
    i {
      color: #cdf564;
      font-size: 1.8rem;
      cursor: pointer;
    }
    .more {
      margin-left: 1rem;
      font-size: 2rem;
      cursor: pointer;
    }
  }
}
</style>

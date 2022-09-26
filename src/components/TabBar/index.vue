<template>
  <div class="container">
    <div class="logo" @click="router.push('/home')">
      <img src="../../assets/logo.png" alt="logo" />
    </div>
    <div class="navigation">
      <div v-for="(item, index) in tilteArr" :key="index" class="navItem">
        <div class="title">{{ item }}</div>
        <div v-for="(child, i) in navArr[index]" :key="index" class="child">
          {{ child }}
        </div>
      </div>
    </div>
    <div class="player">
      <img class="cover" :src="playerData.coverUrl" />
      <div class="songName">{{playerData.name}}</div>
      <div class="artist-like">
        <div class="artist">{{ playerData.artist }}</div>
        <i class="iconfont like icon-xihuan1"></i>
      </div>
      <div class="progress">
        <van-progress pivot-text=" " :percentage="50" color="#B9FF00" />
      </div>
      <div class="btnArea">
        <i class="iconfont icon-24gf-playlistHeart4"></i>
        <div class="group">
           <i class="iconfont icon-shangyishou"></i>
           <i class="iconfont icon-bofang player"></i>
           <i class="iconfont icon-xiayishou"></i>
        </div>
        <i class="iconfont icon-a-27Gxunhuanbofang"></i>
      </div>
      <audio :src="playerData.playUrl" autoplay></audio>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive,watch,onMounted } from "vue";
import { useRouter } from "vue-router";
import {useStore} from '../../store/player'
import defaultCover from "@/assets/login/login.png";
const router = useRouter();
const store = useStore()

//标题
const tilteArr = reactive<string[]>(["Home", "Library", "Blog"]);
const navArr = reactive<string[][]>([
  ["新发行", "趋势", "青年", "新人", "周榜"],
  ["最喜欢", "老歌", "近期"],
  ["艺人故事", "邮寄"],
]);


//播放器相关
interface Player {
  coverUrl: string;
  playUrl: string;
  name: string;
  artist: string;
}
const playerData =reactive<Player>({
  coverUrl:  store.coverUrl || defaultCover,
  playUrl: store.playUrl,
  name:store.name || '---',
  artist: store.artist || '----',
})
watch(()=>store.musicId,(newVal,oldVal)=>{
  playerData.coverUrl = store.coverUrl
  playerData.playUrl = store.playUrl
  playerData.name = store.name
  playerData.artist = store.artist
})
</script>

<style lang="scss" scoped>
.container {
  background-color: #1e242c;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  .logo {
    margin: 2rem auto;
    margin-bottom: 1rem;
  }
  .navigation {
    width: 9rem;

    .navItem {
      display: flex;
      flex-flow: column nowrap;

      margin-bottom: 1rem;
      .title {
        font-size: 1.5rem;
        color: #b9ff00;
      }
      .child {
        font-size: 1.25rem;
        color: rgba($color: #e5e5e5, $alpha: 0.5);
        margin: 0.2rem 0;
      }
      .child:hover {
        color: #e5e5e5;
        cursor: pointer;
      }
    }
  }
}

.player {
  .cover {
    width: 14rem;
    height: 14rem;
    border-radius: 0.5rem;
    object-fit: fill;
  }
  .songName {
    font-size: 1.5rem;
    color: #ffffff;
    width: 13rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .artist-like {
    display: flex;
    .artist {
      font-size: 1rem;
      color: rgba($color: #ffffff, $alpha: 0.7);
    }
    .like {
      color: #b9ff00;
      vertical-align: top;
    }
  }
  .progress {
    &:deep(.van-progress__pivot) {
      min-width: 0.5rem;
      min-height: 0.5rem;
    }
  }
  .btnArea {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    i{
      color: #b9ff00;
      cursor: pointer;
    }
    .group{
      display: flex;
      align-items: center;
      .player{
        height: 2rem;
        width: 2rem;
        border-radius: 1rem;
        color:#1e242c;
        background-color: #b9ff00;
        line-height: 2rem;
        text-align: center;
        margin:auto 1rem;
      }
    }
  }
}
</style>

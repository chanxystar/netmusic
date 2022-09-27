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
      <div class="songName">{{ playerData.name }}</div>
      <div class="artist-like">
        <div class="artist">{{ playerData.artist }}</div>
        <i class="iconfont like icon-xihuan1"></i>
      </div>
      <div class="progress">
        <van-slider
          v-model="playerData.progress"
          @change="changeProgress"
          button-size="15px"
          active-color="#B9FF00"
        />
      </div>
      <div class="btnArea">
        <i class="iconfont icon-24gf-playlistHeart4"></i>
        <div class="group">
          <i class="iconfont icon-shangyishou"></i>
          <i
            :class="
              playerData.status
                ? 'iconfont icon-bofangzanting player'
                : 'iconfont icon-bofang player'
            "
            @click="switchPlay"
          ></i>
          <i class="iconfont icon-xiayishou"></i>
        </div>
        <div class="rightBtn">
          <van-popover v-model:show="volShow" placement="top">
             
              <van-slider
                v-model="volProgress"
                active-color="#B9FF00"
                vertical
                @change="volChange"
                :reverse="true"
                button-size="10px"
              />
            

            <template #reference>
              <i class="iconfont icon-shengyin_shiti"></i>
            </template>
          </van-popover>
          <i class="iconfont icon-a-27Gxunhuanbofang"></i>
        </div>
      </div>
      <audio
        ref="player"
        :src="playerData.playUrl"
        @ended="ended"
        autoplay
        :volume="playerData.volume"
        @timeupdate="updateTime"
      ></audio>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../../store/player";
import defaultCover from "@/assets/login/login.png";
const router = useRouter();
const store = useStore();
const player = ref();
//标题
const tilteArr = reactive<string[]>(["Home", "Library", "Blog"]);
const navArr = reactive<string[][]>([
  ["新发行", "趋势", "青年", "新人", "周榜"],
  ["最喜欢", "老歌", "近期"],
  ["艺人故事", "邮寄"],
]);
//audio控件按钮逻辑
interface Player {
  coverUrl: string; //封面
  playUrl: string; //播放地址
  name: string; //歌曲名
  artist: string; //艺术家
  status: boolean; //播放状态
  progress: number; //进度
  volume: number; //音量
}
const playerData = reactive<Player>({
  coverUrl: store.coverUrl || defaultCover,
  playUrl: store.playUrl,
  name: store.name || "---",
  artist: store.artist || "----",
  status: true,
  progress: 0,
  volume: 0.3,
});
//监控到store中的musicId变化后，将store中其他状态更新过来
watch(
  () => store.musicId,
  (newVal, oldVal) => {
    playerData.coverUrl = store.coverUrl;
    playerData.playUrl = store.playUrl;
    playerData.name = store.name;
    playerData.artist = store.artist;
  }
);

//播放与暂停
const switchPlay = () => {
  if (playerData.status) {
    player.value.pause();
  } else {
    player.value.play();
  }
  playerData.status = !playerData.status;
};

//播放进度条改变
const changeProgress = (value: number) => {
  player.value.currentTime = (value / 100) * player.value.duration;
};
//歌曲结束触发
const ended = () => {
  playerData.status = false;
};
//监听audio播放位置从而改变进度条位置
const updateTime = () => {
  const { currentTime, duration } = player.value;
  playerData.progress = (currentTime / duration) * 100;
};

//音量控制
let volShow = ref(false);
let volProgress = computed(()=>{
  return 100*playerData.volume
})
const volChange = (value: number) => {};
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
    i {
      color: #b9ff00;
      cursor: pointer;
    }
    .group {
      display: flex;
      align-items: center;
      .player {
        height: 2rem;
        width: 2rem;
        border-radius: 1rem;
        color: #1e242c;
        background-color: #b9ff00;
        line-height: 2rem;
        text-align: center;
        margin: auto 1rem;
      }
    }
    
  }
}
</style>

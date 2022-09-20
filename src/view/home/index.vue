<template>
  <div class="container">
    <div class="topGroup">
      <div class="left">
        <!-- 轮播图 -->
        <div class="banners">
          <van-swipe
            class="banners"
            lazy-render
            :autoplay="5000"
            indicator-color="white"
          >
            <van-swipe-item
              style="display: inline-block; white-space: nowrap"
              v-for="(item, index) in data.banners"
              :key="index"
            >
              <img :src="item.pic" alt="" />
            </van-swipe-item>
          </van-swipe>
        </div>
        <!-- 热门歌手 -->
        <div class="singers">
          <template v-for="(item, index) in data.topArtistList" :key="index">
            <div class="singer">
              <img :src="item.img1v1Url" />
              <div class="name">{{ item.name }}</div>
            </div>
          </template>
        </div>
      </div>
      <div class="right">
        <div class="weelyChart">
          <img src="../../assets/weelyChart.png" alt="weelyChart" />
          <span class="text">WeelyChart</span>
        </div>
        <div class="rankBox">
          <div class="top">
            <div class="playClub">
              <div class="play iconfont icon-bofang"></div>
              <span class="playAll">playAll</span>
            </div>
            <div class="download iconfont icon-xiazai"></div>
          </div>
          <div class="list">
            <div
              v-for="(item, index) in data.rankList"
              :key="index"
              class="cell"
            >
              <div class="detail">
                <img src="../../assets/logo.png" alt="" />
                <div>
                  <div class="song">{{ item.first }}</div>
                  <div class="artist">{{ item.second }}</div>
                </div>
              </div>

              <div class="ranking">#{{ index }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 雷达歌单 -->
    <div class="raderBox">
      <div class="title">Rader Songs</div>
      <div class="raderList">
        <div class="rader" v-for="(item, index) in data.raderList" :key="index">
          <img :src="item.imageUrl" alt="" />
          <div class="title">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { homepage, topArtist, topList } from "../../service/index";
interface bannerItem {
  bannerId: string;
  pic: string;
}
interface rankItem {
  first: string;
  second: string;
}
interface artistItem {
  id: number;
  img1v1Id: number;
  img1v1Url: string;
  isSubed: null;
  musicSize: number;
  name: string;
  picId: number;
  picUrl: string;
}
interface raderItem {
  imageUrl: string;
  title: string;
}
const data = reactive({
  banners: [] as bannerItem[],
  topArtistList: [] as artistItem[],
  rankList: [] as rankItem[],
  raderList: [] as raderItem[],
});
//请求、处理首页接口
const getHomeData = async () => {
  const res: any = await homepage({});
  //储存轮播图数据
  data.banners = res.data.blocks[0].extInfo.banners.map((e: any) => {
    return {
      bannerId: e.bannerId,
      pic: e.pic,
    };
  });

  //雷达歌单
  data.raderList = res.data.blocks[8].creatives.map((e: any) => {
    return {
      imageUrl: e.uiElement.image.imageUrl,
      title: e.uiElement.mainTitle.title,
    };
  });
};
//加载5位热门歌手
const getArtist = async () => {
  const res: any = await topArtist({
    limit: 5,
  });
  data.topArtistList = res.artists;
};
//加载周榜数据
const getTopList = async () => {
  const res: any = await topList({});
  data.rankList = res.list[3].tracks;
};
onMounted(() => {
  getHomeData();
  getArtist();
  getTopList();
});
</script>

<style lang="scss" scoped>
.container::-webkit-scrollbar {
  display: none;
}
.container {
  padding: 1.5rem;
  overflow-y: scroll;
}
// 主区域
.topGroup {
  display: flex;
  margin-bottom: 2rem;
  .left {
    margin-right: 1rem;
    .banners {
      height: 28rem;
      width: 70rem;
      margin-bottom: 1rem;
      overflow: hidden;
      position: relative;
      img {
        height: 28rem;
        width: 70rem;
        border-radius: 0.5rem;
      }
    }
    .singers {
      display: flex;
      justify-content: space-between;
      .singer {
        img {
          height: 10rem;
          width: 10rem;
          border-radius: 1rem;
          object-fit: fill;
        }
        .name {
          text-align: center;
          line-height: 2rem;
          font-size: 1rem;
          color: aliceblue;
        }
      }
    }
  }
  .right {
    flex: 1;
    height: 41rem;
    border-radius: 0.5rem;
    background-color: #1e242c;
    .weelyChart {
      position: relative;
      img {
        width: 100%;
        object-fit: contain;
      }
      .text {
        position: absolute;
        bottom: 1rem;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 3.5rem;
        color: aliceblue;
      }
    }
    .rankBox {
      height: 23rem;
      display: flex;
      flex-flow: column nowrap;
      padding: 1rem;
      .top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        .playClub {
          display: flex;
          cursor: pointer;
          .play {
            height: 2.5rem;
            width: 2.5rem;
            text-align: center;
            line-height: 2.5rem;
            background-color: #cdf564;
            border-radius: 1.5rem;
            margin-right: 0.5rem;
          }
          .playAll {
            font-size: 1.5rem;
            line-height: 2.5rem;
            color: #cdf564;
          }
        }
        .download {
          cursor: pointer;
          color: #cdf564;
          font-size: 1.5rem;
          line-height: 2.5rem;
        }
      }
      .list {
        margin: auto 0;
        .cell {
          color: aliceblue;
          display: flex;
          justify-content: space-between;
          margin-bottom: 2rem;
          width: 100%;
          align-items: center;

          .detail {
            height: 3.4rem;
            display: flex;
            align-items: center;
            img {
              height: 3.4rem;
              width: 3.4rem;

              object-fit: cover;
              margin-right: 1rem;
            }
            .song {
              font-size: 1.5rem;
            }
            .artist {
              font-size: 0.75rem;
            }
          }

          .ranking {
            font-size: 1.5rem;
          }
        }
      }
      .list::-webkit-scrollbar {
        display: none;
        width: 0 !important;
      }
    }
  }
}

//雷达歌单
.raderBox {
  .title {
    color: #cdf564;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .raderList {
    overflow-x: scroll;
    width: 100%;
    height: 15rem;
    display: flex;

    .rader {
      margin-right: 2rem;
      img {
        height: 10rem;
        width: 10rem;
        border-radius: 1rem;
      }
      .title {
        font-size: 0.5rem;
        color: aliceblue;
        width: 6rem;
        white-space: none;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .raderList::-webkit-scrollbar {
    display: none;
  }
}
</style>

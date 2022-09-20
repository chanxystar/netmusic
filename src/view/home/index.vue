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
          <img
          
          src="../../assets/weelyChart.png"
          alt="weelyChart"
        />
        <span class="text">WeelyChart</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { homepage, topArtist } from "../../service/index";
interface bannerItem {
  bannerId: string;
  pic: string;
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
const data = reactive({
  banners: [] as Array<bannerItem>,
  topArtistList: [] as artistItem[],
});
//请求、处理首页接口
const getHomeData = async () => {
  const res: any = await homepage({});
  data.banners = res.data.blocks[0].extInfo.banners.map((e: any) => {
    return {
      bannerId: e.bannerId,
      pic: e.pic,
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
onMounted(() => {
  getHomeData();
  getArtist();
});
</script>

<style lang="scss" scoped>
.container {
  padding: 1.5rem;
  .topGroup {
    display: flex;

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
      background-color:#1E242C ;
      .weelyChart{
        position: relative;
        img {
        width: 100%;
        object-fit: contain;
      }
      .text{
        position: absolute;
        bottom: 1rem;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 3.5rem;
        color: aliceblue;
      }
      }
      
    }
  }
}
</style>

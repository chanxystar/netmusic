<template>
  <div class="container">
    <div class="topGroup">
      <div class="left">
        <!-- 轮播图 -->
        <div class="banners">
          <van-swipe class="banners" :autoplay="5000" indicator-color="white">
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
          <template v-for="(item, index) in 6" :key="index">
            <div class="singer">
              <div class="img"></div>
              <div class="name">{{ index }}</div>
            </div>
          </template>
        </div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { homepage } from "../../service/index";
interface bannerItem {
  bannerId: string;
  pic: string;
}
const data = reactive({
  banners: [] as Array<bannerItem>,
  url: "",
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
  data.url = res.data.blocks[0].extInfo.banners[0].pic;
};
onMounted(() => {
  getHomeData();
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
        height: 24rem;
        width: 70rem;
        margin-bottom: 1rem;
        overflow: hidden;
        position: relative;
        img {
          height: 24rem;
          width: 70rem;
          border-radius: 0.5rem;
        }
      }
      .singers {
        display: flex;
        justify-content: space-between;
        .singer {
          .img {
            height: 10rem;
            width: 10rem;
            border-radius: 1rem;
            background-color: #cdf564;
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
      height: 36.5rem;
      background-color: #cdf564;
      border-radius: 0.5rem;
    }
  }
}
</style>

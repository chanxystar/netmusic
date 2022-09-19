<template>
  <div class="container">
    <div class="topGroup">
      <div class="left">
        <!-- 轮播图 -->
        <div class="banners">
          <img :src="data.url" alt="cover" />
        </div>
        <!-- 热门歌手 -->
        <div class="singers">
          <template v-for="(item, index) in 6" :key="index">
            <div class="singer">
              <div class="img"></div>
              <div class="name">{{index}}</div>
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
import { test } from "../../service/index";
const data = reactive({
  url: "",
});
//请求、处理首页接口
const demo = async () => {
  const res: any = await test({});
  data.url = res.data.data.blocks[0].extInfo.banners[0].pic;
  console.log(data.url);
};
onMounted(() => {
  demo();
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
        img {
          height: 24rem;
          width: 70rem;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
        }
      }
      .singers{
        display: flex;
        justify-content: space-between;
        .singer{
          
            .img{
              height: 10rem;
            width: 10rem;
            border-radius: 1rem;
            background-color: #CDF564;
            }
            .name{
              text-align: center;
              line-height: 2rem;
              font-size: 1rem;
              color: aliceblue;
            }
        }

      }
    }
    .right{
        flex: 1;
        height:36.5rem;
        background-color: #CDF564;
        border-radius: 0.5rem;
        
        
    }
  }
}
</style>

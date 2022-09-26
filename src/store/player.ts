import { defineStore } from "pinia";
import { musicUrl } from "../service/index";
interface Player<T> {
  coverUrl: T;
  id: T;
  name: T;
  artist: T;
}
export const useStore = defineStore("playerData", {
  state: () => {
    return {
      coverUrl: "",
      playUrl: "",
      name: "",
      artist: "",
      musicId:""
    };
  },
  actions: {
    async setData(data: Player<string>) {
      const { coverUrl, id, name, artist } = data;
      //从服务器获取歌曲播放地址
      const res = await musicUrl({ id });
      this.playUrl = res.data.data[0].url;
      this.coverUrl = coverUrl;
      this.name = name;
      this.artist = artist;
      this.musicId = id
    },
  },
});

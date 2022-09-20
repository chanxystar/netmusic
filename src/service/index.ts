import service from '../utils/network'
// 首页-发现 
export  function homepage(data:object){
  return service({
    url:'/homepage/block/page',
    method:'post',
    data
  })
}
//热门歌手
export function topArtist(data:object){
  return service({
    url:'/top/artists',
    method:'post',
    data
  })
}
//歌手分类列表
export function artist(data:object){
  return service({
    url:'/artist/list',
    method:'post',
    data
  })
}
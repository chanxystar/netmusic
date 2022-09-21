import service from '../utils/network'


//登入
export function loginApi(data:object){
  return service({
    url:'/login',
    method:'post',
    data
  })
}
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
//获取排行榜全部分类 
export function topList(data:object){
  return service({
    url:'/toplist/detail',
    method:'post',
    data
  })
}

//获取歌手详情
export function artistDetail(data:object){
  return service({
    url:'/artist/detail',
    method:'post',
    data
  })
}

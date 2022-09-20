import service from '../utils/network'
// 首页-发现 
export  function homepage(data:object){
  return service({
    url:'/homepage/block/page',
    method:'post',
    data
  })
}
import service from '../utils/network'

export  function test(data:object){
  return service({
    url:'/homepage/block/page',
    method:'post',
    data
  })
}
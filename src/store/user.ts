import {defineStore} from 'pinia'
interface IUser{

}
export const useStore = defineStore('userInfo',{
  state:()=>{
    return{
      token:localStorage.getItem('token')||'',
      userInfo:localStorage.getItem('userInfo')||''
    }
  },
 actions:{
    setToken(str:string){
      this.token  = str
      localStorage.setItem('token',str)
    },
    reomoveToken(){
      this.token = ''
      localStorage.removeItem('token')
    },
    setInfo(obj:object){
      this.userInfo  = JSON.stringify(obj)
      localStorage.setItem('userInfo',JSON.stringify(obj))
    },
    removeInfo(){
      this.userInfo =''
      localStorage.removeItem('userInfo')

    }
 }
})
import {defineStore} from 'pinia'

export const useStore = defineStore('userInfo',{
  state:()=>{
    return{
      isLogin:false,
      token:localStorage.getItem('token')||'',
      userInfo:localStorage.getItem('userInfo')||'',
    }
  },
 actions:{
    changeStatus(bool:boolean){
      this.isLogin = bool
    },
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

    },
 }
})
import { createRouter,createWebHistory,RouteRecordRaw} from "vue-router";
const routes:Array<RouteRecordRaw> =[
  {
    path:'/',
    redirect:'/index'
  },
  {
    path:'/index',
    redirect:'/home',
    component:()=>import('@/view/index.vue'),
    children:[
      {
        path:'/home',
        name:'home',
        component:()=>import('@/view/home/index.vue')

      }
    ]
  },
  
]
const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router
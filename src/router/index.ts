import { createRouter,createWebHistory,RouteRecordRaw} from "vue-router";
const routes:Array<RouteRecordRaw> =[
  {
    path:'/',
    redirect:'/login'
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
  {
    path:'/login',
    name:'login',
    redirect:'/loginMain',
    component:()=>import('@/view/login/index.vue'),
    children:[
      {
        path:'/loginMain',
        component:()=>import('@/view/login/main/index.vue')
      },
      {
        path:'/logister',
        component:()=>import('@/view/login/logister/index.vue')
      }
    ]
  }
  
]
const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router
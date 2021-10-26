import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views'
import Login from '@/views/Login'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    name:'home',
    path:"/",
    component:Index,
    redirect:"/home",
    children:[
      {
        path:"home",
        component:Home
      }
    ]
  },
  {
    name:"login",
    path:'/login',
    component:Login
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router

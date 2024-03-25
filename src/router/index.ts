import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component:() => import ('@/layout/index.vue'),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home.vue")
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
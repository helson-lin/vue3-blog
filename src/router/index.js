import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HomeIndex from '../views/Home/index.vue'
import Article from '../views/Home/article.vue'
import Classify from '../views/Home/classify.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        component: HomeIndex
      },
      {
        path: '/article',
        name: 'Article',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component:Article
      },
      {
        path: '/classify/:classification',
        name: 'Classify',
        component: Classify
      }
    ]
  }
]

const router = createRouter({
  //mode: 'hash',
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})


export default router

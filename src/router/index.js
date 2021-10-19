import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import HomeIndex from '../views/Home/index.vue'
import Article from '../views/Home/article.vue'
import Classify from '../views/Home/classify.vue'
import Subscribe from '../views/Home/subscribe.vue';
// admin
import Admin from '../views/Admin.vue';
import AdminHome from '../views/Admin/index.vue'
import User from '../views/Admin/User.vue';
import Application from '../views/Admin/Application.vue';

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
      },
      {
        path: '/subscribe',
        name: Subscribe,
        component: Subscribe,
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: '',
        component: AdminHome,
      },
      {
        path: 'user',
        component: User,
      },
      {
        path: 'application',
        component: Application,
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
]

const router = createRouter({
  //mode: 'hash',
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to.path,from);
  if (to.path === '/login') {
    next();
  } else {
    const token = localStorage.getItem('token'); //需要校验;
    if (to.path.indexOf('admin') !== -1) {
      if (token) {
        next();
      } else {
        next('/');
      }
    } else {
      next();
    }
  }
  // next();
});

export default router

import { createRouter, createWebHistory } from 'vue-router'

import CoachesList from './pages/coaches/CoachesList.vue'
import CoachRegistration from './pages/coaches/CoachRegistration.vue'
import NotFound from './pages/NotFound.vue'

import store from './store/index.js'

const CoachDetail = () => import('./pages/coaches/CoachDetail.vue')
const ContactCoach = () => import('./pages/requests/ContactCoach.vue')
const RequestsReceived = () => import('./pages/requests/RequestsReceived.vue')
const UserAuth = () => import('./pages/auth/UserAuth.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    {
      path: '/authentication',
      component: UserAuth,
      meta: { requiresUnauth: true }
    },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [{ path: 'contact', component: ContactCoach }]
    },
    { path: '/register', component: CoachRegistration, meta: { requiresAuth: true } },
    { path: '/requests', component: RequestsReceived, meta: { requiresAuth: true } },
    { path: '/:notFound(.*)', component: NotFound }
  ]
})

router.beforeEach(function (to, _from, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/authentication')
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches')
  } else {
    next()
  }
})

export default router

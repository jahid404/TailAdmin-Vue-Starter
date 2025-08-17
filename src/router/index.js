import { createRouter, createWebHistory } from 'vue-router'
import adminRoutes from './routes/admin-route'
import miscRoutes from './routes/misc-route'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes = [
  ...adminRoutes,
  ...miscRoutes,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  },
  routes,
})

// nprogress config & bind with router
NProgress.configure({
  minimum: 0.1,
  easing: "ease",
  speed: 500,
  showSpinner: false,
  trickleSpeed: 200,
  parent: "body",
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  document.title = `${to.meta.title} | BrainWave`

  next();
})

router.afterEach(() => {
  NProgress.done();
});

export default router

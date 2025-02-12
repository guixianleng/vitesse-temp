import { constantRoutes } from 'advint-user-admin'
import { createRouter, createWebHistory } from 'vue-router'
import { routes as fileRoutes } from 'vue-router/auto-routes'

fileRoutes.flat(Infinity).forEach((route) => {
  route.path = safeResolve(route.path)
})

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...fileRoutes,
    ...constantRoutes,
  ],
})

export default router

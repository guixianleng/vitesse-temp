import type { App } from 'vue'
import { router } from './router'
// import { pinia } from './pinia'

export function setupPlugins(app: App) {
  app.use(router)
  // app.use(pinia)
}

import type { App } from 'vue'
import { pinia } from './pinia'
import { router } from './router'

export function setupPlugins(app: App) {
  app.use(router)
  app.use(pinia)
}

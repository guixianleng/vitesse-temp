import adminUi, { vHasPermi } from 'advint-user-admin'
import { createApp } from 'vue'
import App from './App.vue'

import { setupPlugins } from './plugins'
import ElementIcons from './plugins/eleIcons'
import store from './plugins/pinia'
import router from './plugins/router'
import './plugins/nprogress'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './styles/main.css'

import 'advint-user-admin/lib/style.css'
import 'advint-ui/styles/index.css'

const app = createApp(App)
setupPlugins(app)

// 自定义指令
app.directive('hasPermi', vHasPermi)

app
  .use(ElementIcons)
  .use(adminUi, {
    router,
    store,
    baseUrl: 'http://iot.dev.advint.cn/api',
    pageModules: import.meta.glob('./pages/**/*.vue'),
  })
  .mount('#app')

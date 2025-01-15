import Vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'
// import VueJsx from '@vitejs/plugin-vue-jsx'

/**
 * https://github.com/sxzz/unplugin-vue-macros
 */
export function createMacrosPlugin() {
  return VueMacros({
    defineOptions: false,
    defineModels: false,
    plugins: {
      vue: Vue({
        script: {
          propsDestructure: true,
          defineModel: true,
        },
      }),
      // 如有需要
      // vueJsx: VueJsx()
    },
  })
}

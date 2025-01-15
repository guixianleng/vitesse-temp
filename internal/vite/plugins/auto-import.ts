import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { VueRouterAutoImports } from 'unplugin-vue-router'

export function createAutoImportPlugin() {
  return AutoImport({
    imports: [
      'vue',
      '@vueuse/core',
      VueRouterAutoImports,
      {
        'vue-router/auto': ['useLink'],
      },
    ],
    dts: 'types/auto-imports.d.ts',
    dirs: [
      './src/composables',
    ],
    vueTemplate: true,
    resolvers: [
      ElementPlusResolver(),
    ],
  })
}

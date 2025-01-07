import Components from 'unplugin-vue-components/vite'

export function createComponentsPlugin() {
  return Components({
    dts: 'types/components.d.ts',
  })
}

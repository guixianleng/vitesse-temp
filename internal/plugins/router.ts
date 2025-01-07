import VueRouter from 'unplugin-vue-router/vite'

export function createRouterPlugin() {
  return VueRouter({
    // 指定类型文件生成位置
    dts: 'types/typed-router.d.ts',
  })
}

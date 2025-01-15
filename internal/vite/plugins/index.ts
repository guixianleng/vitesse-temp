import type { PluginOption } from 'vite'
import type { CompressOptions, ViteOptions } from '../../typing'

import { createAutoImportPlugin } from './auto-import'
import { createComponentsPlugin } from './components'
import { createCompressionPlugin } from './compression'
import { createImageminPlugin } from './imagemin'
import { createMacrosPlugin } from './macros'
import { createRestartPlugin } from './restart'
import { createRouterPlugin } from './router'
import { createUnocssPlugin } from './unocss'
import { createVisualizerPlugin } from './visualizer'

export function ConfigVitePlugins(options: ViteOptions = {}): PluginOption[] {
  const { build: buildOptions = {} } = options
  const {
    isBuild,
    visualizer = false,
    compress = true,
  } = buildOptions

  const vitePlugins: PluginOption[] = [
    // 基础插件
    createMacrosPlugin(),
    // 路由插件
    createRouterPlugin(),
    // 自动按需引入组件
    createAutoImportPlugin(),
    // 自动按需引入依赖
    createComponentsPlugin(),
    // unocss
    createUnocssPlugin(),
    // 监听配置文件改动重启
    createRestartPlugin(),
  ]

  // 生产环境插件
  if (isBuild) {
    // vite-plugin-imagemin
    vitePlugins.push(createImageminPlugin())
    // 是否开启打包分析
    if (visualizer) {
      vitePlugins.push(createVisualizerPlugin())
    }

    // 是否开启压缩
    if (compress) {
      const compressOptions: CompressOptions = typeof compress === 'boolean' ? {} : compress
      vitePlugins.push(...createCompressionPlugin(compressOptions))
    }
  }

  return vitePlugins
}

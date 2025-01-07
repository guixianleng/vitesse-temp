import type { PluginOption } from 'vite'
import type { CompressOptions, ViteOptions } from '../typing'
import { createAutoImportPlugin } from './auto-import'
import { createComponentsPlugin } from './components'
import { createCompressionPlugin } from './compression'
import { createMacrosPlugin } from './macros'
import { createRouterPlugin } from './router'
import { createUnocssPlugin } from './unocss'
import { createVisualizerPlugin } from './visualizer'

export function createVitePlugins(options: ViteOptions = {}): PluginOption[] {
  const { build: buildOptions = {} } = options
  const {
    isBuild,
    visualizer = false,
    compress = true,
  } = buildOptions

  const plugins: PluginOption[] = [
    // 基础插件
    createMacrosPlugin(),
    createRouterPlugin(),
    createAutoImportPlugin(),
    createComponentsPlugin(),
    createUnocssPlugin(),
  ]

  // 生产环境插件
  if (isBuild) {
    // 是否开启打包分析
    if (visualizer) {
      plugins.push(createVisualizerPlugin())
    }

    // 是否开启压缩
    if (compress) {
      const compressOptions: CompressOptions = typeof compress === 'boolean' ? {} : compress
      plugins.push(...createCompressionPlugin(compressOptions))
    }
  }

  return plugins
}

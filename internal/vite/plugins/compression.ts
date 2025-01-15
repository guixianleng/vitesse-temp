import type { PluginOption } from 'vite'
import type { CompressOptions } from '../../typing'
import compression from 'vite-plugin-compression'

/**
 * 创建压缩插件
 */
export function createCompressionPlugin(options: CompressOptions = {}): PluginOption[] {
  const {
    algorithm = 'gzip',
    verbose = true,
    threshold = 10240,
    deleteOriginFile = false,
  } = options

  const plugins: PluginOption[] = []

  // gzip压缩
  if (algorithm === 'gzip') {
    plugins.push(
      compression({
        verbose,
        threshold,
        algorithm: 'gzip',
        ext: '.gz',
        deleteOriginFile,
      }),
    )
  }

  // br压缩
  if (algorithm === 'brotli') {
    plugins.push(
      compression({
        verbose,
        threshold,
        algorithm: 'brotli',
        ext: '.br',
        deleteOriginFile,
      }),
    )
  }

  return plugins
}

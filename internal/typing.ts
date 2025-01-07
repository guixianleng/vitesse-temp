export type CompressAlgorithm = 'gzip' | 'brotli' | 'none'

export interface CompressOptions {
  /**
   * 压缩算法
   * @default 'gzip'
   */
  algorithm?: CompressAlgorithm
  /**
   * 是否在控制台输出压缩结果
   * @default true
   */
  verbose?: boolean
  /**
   * 压缩阈值，单位字节
   * @default 10240
   */
  threshold?: number
  /**
   * 是否删除原文件
   * @default false
   */
  deleteOriginFile?: boolean
}

export interface BuildOptions {
  /**
   * 是否为生产环境构建
   */
  isBuild: boolean
  /**
   * 是否开启打包分析
   * @default false
   */
  visualizer?: boolean
  /**
   * 压缩配置
   * @default false
   */
  compress?: boolean | CompressOptions
}

export interface ViteOptions {
  build?: BuildOptions
}

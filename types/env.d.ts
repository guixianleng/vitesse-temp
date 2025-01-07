/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** 当前环境 */
  readonly VITE_ENV: 'development' | 'production' | 'release'
  /** 是否开启压缩 */
  readonly VITE_BUILD_COMPRESS: string
  /** 压缩算法 */
  readonly VITE_BUILD_COMPRESS_ALGORITHM?: string
  /** 压缩阈值 */
  readonly VITE_BUILD_COMPRESS_THRESHOLD?: string
  /** 是否删除源文件 */
  readonly VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE?: string
  /** 是否开启打包分析 */
  readonly VITE_BUILD_VISUALIZER: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

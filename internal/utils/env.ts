import type { BuildOptions } from '../typing'
import fs from 'node:fs'
import path from 'node:path'
import dotenv from 'dotenv'

/**
 * 获取布尔类型的环境变量
 */
export function getEnvBoolean(val: string | undefined): boolean {
  return val ? val === 'true' : false
}

/**
 * 获取数字类型的环境变量
 */
export function getEnvNumber(val: string | undefined, defaultValue = 0): number {
  return val ? Number(val) || defaultValue : defaultValue
}

/**
 * 获取当前环境下的配置文件名
 */
export function getConfFiles() {
  const script = process.env.npm_lifecycle_script
  const reg = /--mode ([\d_a-z]+)/
  const result = reg.exec(script as string) as any
  if (result) {
    const mode = result[1] as string
    return ['.env', `.env.${mode}`]
  }
  return ['.env', '.env.production']
}

/**
 * 获取环境变量值
 * @param match 匹配前缀
 * @param confFiles 配置文件
 */
export async function loadEnv(
  match = 'VITE_',
  confFiles = getConfFiles(),
): Promise<Record<string, string>> {
  let envConfig: Record<string, string> = {}

  for (const confFile of confFiles) {
    try {
      const envPath = path.join(process.cwd(), confFile)
      const exists = fs.existsSync(envPath)
      if (exists) {
        const config = dotenv.parse(fs.readFileSync(envPath))
        envConfig = { ...envConfig, ...config }
      }
    }
    catch (error) {
      console.error(`Error loading ${confFile}`, error)
    }
  }

  const reg = new RegExp(`^(${match})`)
  Object.keys(envConfig).forEach((key) => {
    if (!reg.test(key))
      Reflect.deleteProperty(envConfig, key)
  })

  return envConfig
}

/**
 * 转换环境变量配置
 */
export async function loadAndConvertEnv(
  match = 'VITE_',
  confFiles = getConfFiles(),
): Promise<BuildOptions> {
  const envConfig = await loadEnv(match, confFiles)

  const {
    VITE_BUILD_COMPRESS,
    VITE_BUILD_COMPRESS_ALGORITHM,
    VITE_BUILD_COMPRESS_THRESHOLD,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
    VITE_BUILD_VISUALIZER,
  } = envConfig

  return {
    compress: getEnvBoolean(VITE_BUILD_COMPRESS)
      ? {
          algorithm: VITE_BUILD_COMPRESS_ALGORITHM as any,
          threshold: getEnvNumber(VITE_BUILD_COMPRESS_THRESHOLD),
          deleteOriginFile: getEnvBoolean(VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE),
        }
      : false,
    visualizer: getEnvBoolean(VITE_BUILD_VISUALIZER),
  }
}

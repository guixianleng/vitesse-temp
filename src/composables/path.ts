import { utils } from 'advint-user-admin'
/**
 * base 安全的路径解析
 * @param path 路径
 */
export function safeResolve(path: string) {
  return BASE_URL_WITHOUT_TAIL + path
}

// 上传地址
export function uploadAction() {
  return `${import.meta.env.VITE_API_BASE_URL}/file/upload`
}

// 上传请求头
export function uploadHeaders() {
  return {
    'advint-token': `${utils.getToken()}`,
  }
}

// 提取文件名
export function extractFileName(url: string, suffix: string): string | null {
  const regex = new RegExp(`\\/([^\\/]+(?=${suffix}))`)
  const match = url.match(regex)
  return match ? match[1] : null
}

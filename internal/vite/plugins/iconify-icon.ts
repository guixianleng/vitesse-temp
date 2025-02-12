import type { Plugin } from 'vite'
import Icons from 'unplugin-icons/vite'

export default (): Plugin => {
  return Icons({
    compiler: 'vue3',
    autoInstall: true,
    scale: 1,
  })
}

/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vite'
import { LoadAndConvertEnv } from './internal/utils/env'
import { ConfigVitePlugins } from './internal/vite/plugins'
import proxy from './internal/vite/proxy'

export default defineConfig(async ({ command }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'
  const buildOptions = await LoadAndConvertEnv()

  return {
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    plugins: ConfigVitePlugins({
      build: {
        isBuild,
        ...buildOptions,
      },
    }),
    css: {
      preprocessorOptions: {
        scss: { api: 'modern-compiler' },
      },
    },

    // https://github.com/vitest-dev/vitest
    test: {
      environment: 'jsdom',
    },
    server: {
      hmr: { overlay: false },
      host: '0.0.0.0',
      open: true,
      proxy,
    },
    optimizeDeps: {
      include: ['vue', 'vue-router', 'pinia', 'axios', 'element-plus', '@vueuse/core', 'advint-user-admin'],
    },
  }
})

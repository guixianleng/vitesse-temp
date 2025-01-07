/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vite'
import { createVitePlugins } from './internal/plugins'
import { loadAndConvertEnv } from './internal/utils/env'

export default defineConfig(async ({ mode }) => {
  const buildOptions = await loadAndConvertEnv()

  return {
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    plugins: createVitePlugins({
      build: {
        isBuild: mode !== 'development',
        ...buildOptions,
      },
    }),

    // https://github.com/vitest-dev/vitest
    test: {
      environment: 'jsdom',
    },
  }
})

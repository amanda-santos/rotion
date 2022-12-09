import path from 'node:path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import tsConfigPathsPlugin from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

const tsConfigPaths = tsConfigPathsPlugin({
  projects: [path.resolve('tsconfig.json')],
})

export default defineConfig({
  main: {
    plugins: [tsConfigPaths, externalizeDepsPlugin()],
    publicDir: path.resolve('resources'),
  },
  preload: {
    plugins: [tsConfigPaths, externalizeDepsPlugin()],
  },
  renderer: {
    define: {
      'process.platform': JSON.stringify(process.platform),
    },
    css: {
      postcss: {
        plugins: [
          tailwindcss({
            config: './src/renderer/tailwind.config.js',
          }),
        ],
      },
    },
    resolve: {
      alias: {
        '@renderer': path.resolve('src/renderer/src'),
      },
    },
    plugins: [tsConfigPaths, react()],
  },
})

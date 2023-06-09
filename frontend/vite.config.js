import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import istanbul from 'vite-plugin-istanbul'

const truthy = ['1', 'true']

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      eslint(),
      istanbul({
        include: ['src/*', 'node_modules/@vegaprotocol'],
        exclude: ['node_modules/!@vegaprotocol', 'automation/', 'src/wailsjs'],
        extension: ['.js', '.ts', '.tsx'],
        forceBuildInstrument: truthy.includes(process.env['VITE_COVERAGE'])
      })
    ]
  }
})

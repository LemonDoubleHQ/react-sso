import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts'

import { resolve } from 'node:path'
import * as packageJson from "./package.json"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts({
    include: ['src/'],
  }),
    react()],
  build: {
    lib: {
      entry: resolve('src/', 'index.ts'),
      name: 'ReactGlobalModal',
      formats: ['es', 'umd'],
      fileName: (format) => `react-global-modal.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
});

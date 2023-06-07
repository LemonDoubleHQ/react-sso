import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'

import { resolve } from 'node:path'
import * as packageJson from "./package.json"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts({
    include: ['src/'],
  }),
  tsConfigPaths(),
  react()
],
  build: {
    lib: {
      entry: resolve('src/', 'index.ts'),
      name: 'LemonReactSSO',
      formats: ['es', 'umd'],
      fileName: (format) => `lemon-react-sso.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
});

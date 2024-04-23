import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'funkyLib',
      fileName: (format) => `funkyLib.${format}.js`
    }
  }
});

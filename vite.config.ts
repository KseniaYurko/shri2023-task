import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import stylelint from 'vite-plugin-stylelint';
import vitePluginStyleImport from 'vite-plugin-style-import';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: 
    [react(),
    stylelint({
      files: '**/*.css',
    }),
  //   vitePluginStyleImport({
  //     libs: [
  //       {
  //         libraryName: 'antd',
  //         esModule: true,
  //         resolveStyle: (name) => {
  //           return `antd/es/${name}/style/index`;
  //         },
  //       },
  //     ],
  //   }),
  ],
  base: "/vite-project/"
});
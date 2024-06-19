import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
export default defineConfig({
  resolve: {
    extensions: ['.js', '.vue', '.json', 'scss', '.ts']
    // alias: [
    //   {
    //     find: '@',
    //     replacement: resolve(__dirname, 'src')
    //   },
    // ]
  },
  plugins: [
    vue(),
    svgLoader(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: ['./src/assets/svg/'],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/index.scss";`
      }
    }
  }
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  },
  server: {
    
    open: true //启动后是否自动打开浏览器
  }
  

})


import {defineConfig} from 'vite'
import {resolve} from 'path'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

    resolve: {
        alias: {
            "@": resolve(__dirname, 'src')
        }
    },
    css: {
        preprocessorOptions: {
            less: {
                charset: false,
                additionalData: '@import "./src/assets/css/global.less";',
            }
        }
    },
    server: {
        proxy: {
            "/musicApi": {
                target: "https://interface.music.163.com",
                changeOrigin: true,
                rewrite: path => path.replace(/^\/musicApi/, '')
            }
        }
    }
})

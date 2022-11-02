import {defineConfig} from 'vite'
import {resolve} from 'path'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/noddle-components/index.tsx'),
            name: 'noddle-ui',
            // formats: ['es'],
            fileName: (format) => `noddle-ui.${format}.js`
        },
        rollupOptions: {
            external: ['react'],
            output: {
                // chunkFileNames: 'static/js/[name]-[hash].js',
                // entryFileNames: 'static/js/[name]-[hash].js',
                // assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    react: 'React'
                }
            }
        },
        outDir: 'lib/dist'
    },
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

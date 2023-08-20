/* eslint-disable import/no-extraneous-dependencies */
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      // https://web.dev/add-manifest/
      manifest: {
        // APP 名稱
        name: 'Uber Clone',
        short_name: 'Uber Clone',
        // APP 說明
        description: 'This is an Uber clone',
        // APP 主題顏色
        theme_color: '#000000',
        // APP 顯示範圍
        scope: './',
        // APP 開始畫面網址
        start_url: './',
        // 顯示模式
        // browser: 瀏覽器
        // fullscreen: 全螢幕，隱藏所有瀏覽器 UI
        // standalone: 隱藏標準瀏覽器 UI ，如 URL 欄
        // minimal-ui: 有最小導覽列 UI
        display: 'standalone',
        // icon 路徑，./ 代表 public
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});

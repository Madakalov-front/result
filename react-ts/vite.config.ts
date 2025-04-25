import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'), // alias для src
        }
      },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/assets/styles/global.scss";
                
                // Пустая строка
              `,
            },
        },
    },
    server: {
        open: true,
    },
});

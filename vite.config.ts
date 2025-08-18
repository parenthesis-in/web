import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.parenthesis.in',
      routes: [
        '/',
        '/blog',
        '/teams',
        '/privacy',
        '/terms',
        '/license',
        '/projects/asterisk',
        '/projects/tripti',
        '/projects/databridge',
        '/projects/parenthesis-caas',
        '/404'
      ],
      changefreq: 'weekly',
      priority: {
        '/': 1.0,
        '/projects/*': 0.9,
        '/blog': 0.8,
        '/teams': 0.7,
        '/privacy': 0.3,
        '/terms': 0.3,
        '/license': 0.3,
        '/404': 0.1
      }
    })
  ],
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

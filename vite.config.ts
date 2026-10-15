import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

function mpaRoutingPlugin() {
  return {
    name: 'mpa-routing-plugin',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        const rawUrl = req.url ? req.url.split('?')[0] : '';
        const routes: Record<string, string> = {
          '/': '/index.html',
          '/best-balcony-plants-india': '/best-balcony-plants-india/index.html',
          '/best-balcony-plants-india/': '/best-balcony-plants-india/index.html',
          '/start-balcony-garden': '/start-balcony-garden/index.html',
          '/start-balcony-garden/': '/start-balcony-garden/index.html',
          '/water-plants-while-away': '/water-plants-while-away/index.html',
          '/water-plants-while-away/': '/water-plants-while-away/index.html',
          '/404': '/404.html',
          '/404/': '/404.html',
        };

        if (routes[rawUrl]) {
          req.url = routes[rawUrl];
        } else if (
          !rawUrl.startsWith('/@') &&
          !rawUrl.startsWith('/src') &&
          !rawUrl.startsWith('/images') &&
          !rawUrl.startsWith('/public') &&
          !rawUrl.includes('.')
        ) {
          req.url = '/404.html';
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [mpaRoutingPlugin(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          article1: path.resolve(__dirname, 'best-balcony-plants-india/index.html'),
          article2: path.resolve(__dirname, 'start-balcony-garden/index.html'),
          article3: path.resolve(__dirname, 'water-plants-while-away/index.html'),
          notFound: path.resolve(__dirname, '404.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

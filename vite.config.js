import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { hydrateEnv, getSharedEnv } from './config/env.mjs';

export default ({ mode }) => {
  hydrateEnv(mode);
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const sharedEnv = getSharedEnv();

  return defineConfig({
    plugins: [react()],
    define: {
      __APP_CONFIG__: JSON.stringify({
        title: env.VITE_APP_TITLE ?? sharedEnv.appTitle,
        apiUrl: env.VITE_API_URL ?? sharedEnv.apiUrl
      })
    }
  });
};

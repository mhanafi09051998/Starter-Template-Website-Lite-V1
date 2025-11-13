import { hydrateEnv, getSharedEnv } from './config/env.mjs';

const mode = process.env.NODE_ENV ?? 'development';
hydrateEnv(mode);

const sharedEnv = getSharedEnv();

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_APP_TITLE:
      process.env.NEXT_PUBLIC_APP_TITLE ?? sharedEnv.appTitle,
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL ?? sharedEnv.apiUrl
  }
};

export default nextConfig;

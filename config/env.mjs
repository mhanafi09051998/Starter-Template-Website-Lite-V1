import { existsSync } from 'node:fs';
import path from 'node:path';
import dotenv from 'dotenv';

const rootDir = process.cwd();

export function hydrateEnv(mode = process.env.NODE_ENV ?? 'development') {
  const normalizedMode = mode?.trim() || 'development';
  const envFiles = [
    '.env',
    `.env.${normalizedMode}`,
    '.env.local',
    `.env.${normalizedMode}.local`
  ];

  for (const file of envFiles) {
    const absolutePath = path.join(rootDir, file);
    if (existsSync(absolutePath)) {
      dotenv.config({ path: absolutePath, override: true });
    }
  }
}

export function getSharedEnv() {
  return {
    appTitle:
      process.env.VITE_APP_TITLE ??
      process.env.NEXT_PUBLIC_APP_TITLE ??
      'Starter Template',
    apiUrl:
      process.env.VITE_API_URL ??
      process.env.NEXT_PUBLIC_API_URL ??
      'https://api.example.com'
  };
}

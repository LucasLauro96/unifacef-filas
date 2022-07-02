import * as fs from 'fs';
import * as path from 'path';
import { config } from 'dotenv';

export function loadEnvs(envPath: string) {
  const env = process.env.NODE_ENV || 'development';
  console.log(`[env-check] Current environment: ${env}`);

  const validEnvPath = path.resolve(envPath);

  if (fs.existsSync(validEnvPath)) {
    config({ path: validEnvPath });
  } else {
    console.log(`[env-check] ${validEnvPath}`);
    console.log('[env-check] Not found, load by environment variables');
  }
}

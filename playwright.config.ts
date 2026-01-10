import { defineConfig, devices } from '@playwright/test';

const port = Number(process.env.PORT ?? 5173);
const baseURL = `http://localhost:${port}`;
const mockSubmitEndpoint = `${baseURL}/__playwright/mock-submit`;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  timeout: 240_000,
  use: {
    baseURL,
    trace: 'retain-on-failure',
    headless: true,
  },
  webServer: {
    command: `VITE_BOOK_WEBAPP_URL=${mockSubmitEndpoint} pnpm run dev -- --host 0.0.0.0 --port ${port}`,
    port,
    timeout: 240_000,
    reuseExistingServer: !process.env.CI,
    stdout: 'pipe',
    stderr: 'pipe',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});

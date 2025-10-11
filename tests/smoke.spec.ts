import { test, expect } from '@playwright/test';

const MOCK_SUBMIT_PATH = '/__playwright/mock-submit';

test('smoke: home renders, nav toggles, contact form submits', async ({ page }) => {
  const submissions: string[] = [];
  await page.route(`**${MOCK_SUBMIT_PATH}`, async (route) => {
    submissions.push(route.request().method());
    await route.fulfill({
      status: 200,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ ok: true }),
    });
  });

  await page.goto('/');
  await expect(page.getByRole('heading', { name: /automate/i })).toBeVisible();

  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole('button', { name: /open menu/i }).click();
  await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();

  await page.goto('/contact');
  await page.getByLabel('Name').fill('Playwright Tester');
  await page.getByLabel('Email').fill('playwright@example.com');
  await page.getByLabel('Message').fill('Just testing the contact form.');
  await page.getByRole('button', { name: /send message/i }).click();

  await expect(page.getByText("Thanks! We'll be in touch shortly.")).toBeVisible();
  expect(submissions.length).toBeGreaterThan(0);
});

import { test, expect } from '@playwright/test';

test('battleground loads and counter works', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Playwright Battleground');
  await expect(page.getByRole('heading', { name: /Train\. Break\. Automate\./ })).toBeVisible();
  await page.getByRole('button', { name: 'Click me' }).click();
  await expect(page.getByText('Clicks: 1')).toBeVisible();
  await page.getByRole('button', { name: 'Reveal secret' }).click();
  await expect(page.getByRole('alert')).toContainText('keep selectors human-readable');
});

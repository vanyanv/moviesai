import { test, expect } from '@playwright/test';

test('search a movie', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const button = await page.getByRole('button', { name: 'Get Started' });
  await button.click();

  await page.waitForURL('http://localhost:3000/dashboard');
  await expect(
    page.getByRole('heading', { name: 'Discover Your Favorite Movies' })
  ).toBeVisible();

  await page
    .getByRole('textbox', { name: 'Search for a movie...' })
    .fill('The Matrix');

  await page.keyboard.press('Enter');

  const movieList = await page.getByRole('main').getByRole('list');
  await expect(movieList.getByRole('listitem')).toHaveCount(20);

  // await page.keyboard.press('Enter');

  // const noResults = await page.getByRole('main').getByRole('list');
  // await expect(noResults.getByRole('listitem')).not.toBeVisible();
});

import { test, expect } from '@playwright/test';
import path from 'path';

test('upload a file successfully', async ({ page }) => {
  // Go to the file upload page
  await page.goto('https://the-internet.herokuapp.com/upload');

  // Prepare file path (from your local test project)
  const filePath = path.resolve('tests/test-assets/example.txt');

  // Upload the file
  await page.setInputFiles('#file-upload', filePath);

  // Click submit
  await page.click('#file-submit');

  // Assert success message
  await expect(page.locator('h3')).toHaveText('File Uploaded!');
  await expect(page.locator('#uploaded-files')).toHaveText('example.txt');
});
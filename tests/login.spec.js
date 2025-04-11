import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test('Log in using basic auth with valid credentials', async ({ page }) => {
    // Log in using credentials provided in the URL.
    await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');

    // Assert login confirmation.
    await expect(page.locator('text=Congratulations')).toBeVisible();
});

test('Log in using Login Page with valid credentials', async ({ page }) => {
    // Visit login page.
    await page.goto('https://the-internet.herokuapp.com/login');

    // Assert login page title.
    await expect(page.getByRole('heading', { name: 'Login Page'})).toBeVisible();

    // Assert username and provide valid credentials.
    await expect(page.getByLabel('Username')).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'username' })).toBeVisible();
    await page.fill('#username', process.env.USERNAME || 'MISSING_USERNAME');

    // Assert username and provide valid credentials.
    await expect(page.getByLabel('Password')).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'password' })).toBeVisible();
    await page.fill('#password', process.env.PASSWORD || 'MISSING_PASSWORD');

    // Submit credentials.
    await page.getByRole('button', { name: 'Login' }).click();

    // Assert login response and URL.
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!')
    await expect(page).toHaveURL(/.*\/secure/);

    // Logout.
    await page.getByRole('link', { name: 'Logout' }).click();
    await expect(page.getByRole('heading', { name: 'Login Page'})).toBeVisible();
    await expect(page).toHaveURL(/.*\/login/);
});

test('Log in using Login Page with invalid credentials', async ({ page }) => {
    // Visit login page.
    await page.goto('https://the-internet.herokuapp.com/login');

    // Assert login page title.
    await expect(page.getByRole('heading', { name: 'Login Page'})).toBeVisible();

    // Assert inputs and provide invalid username and password.
    await expect(page.getByLabel('Username')).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'username' })).toBeVisible();
    await page.fill('#username', 'INVALID USER');

    await expect(page.getByRole('textbox', { name: 'password' })).toBeVisible();
    await page.fill('#password', 'INVALID PASSWORD');

    // Submit credentials.
    await page.getByRole('button', { name: 'Login' }).click();

    // Assert login response.
    await expect(page.locator('#flash')).toContainText('Your username is invalid!');
});
import { test, expect } from '@playwright/test'

test('compras', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    const inUser = await page.getByRole('textbox', { name: 'Username' });
    await expect(inUser).toBeVisible();
    await inUser.fill('standard_user');

    const txtUsername = await inUser.inputValue();
    console.log('Username value: ' + txtUsername);

    expect(txtUsername).toBe('standard_user');


    await page.locator('input[name="password"]').fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/inventory/);


    const items = await page.locator('#inventory_container .inventory_item').all();
    const itemsCount = await items.length;

    console.log('Total elementos: '+itemsCount);

    const randomIndex = Math.floor(Math.random() * itemsCount);
    console.log('random index: '+randomIndex);

    const item = items[randomIndex];

    const itemDesc = await item.locator('.inventory_item_desc').innerText();
    console.log('Description: '+itemDesc);

    // await page.pause();
    //testing new changes
})
// @ts-check
import { test, expect } from '@playwright/test';

// test №1
test('Проверка видимости лого и его кликабельности', async ({page}) =>{
  await page.goto('https://www.voxys.ru', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await expect(page.locator('.h__logo')).toBeVisible();
  await page.locator('.h__logo-wrp').click();
  await expect(page).toHaveURL('https://www.voxys.ru/');
});

// test №2
test('Проверка перехода на страницу новостей', async ({page}) =>{
  await page.goto('https://www.voxys.ru', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.click('text=Новости');
  await expect(page).toHaveURL('https://www.voxys.ru/news.html');
  await expect(page.locator('.hwm__menu')).toBeVisible();
});

// test №3
test('Открытие страницы услуг', async ({page}) =>{
  await page.goto('https://www.voxys.ru', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.click('text=Call-центр');
  await expect(page).toHaveURL('https://www.voxys.ru/uslugi.html');
  await expect(page.locator('main')).toBeVisible();
  
});

// test №4
test('Видимость телефонных номеров', async ({page}) =>{
  await page.goto('https://www.voxys.ru', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await expect(page).toHaveURL('https://www.voxys.ru/');
  await expect(page.locator('a.h__phone:has-text("8 (800)")')).toHaveAttribute('href', 'tel:88007071000');
  await expect(page.locator('a.h__phone:has-text("+7 (495)")')).toHaveAttribute('href', 'tel:74951397371');
});

// test №5
test('Переход на страницу контактов и проверка отображения информации', async ({page}) =>{
  await page.goto('https://www.voxys.ru', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  
  await page.click('text=Контакты');
  await expect(page).toHaveTitle(/Контакты Воксис/);
  await expect(page).toHaveURL('https://www.voxys.ru/contacts.html');
  await expect(page.locator('main')).toBeVisible();
});
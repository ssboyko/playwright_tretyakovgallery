import {test, expect} from '@playwright/test';
import {LoginPage} from "../src/pages/login.page.ts";
import {EditorPage} from "../src/pages/editor.page";
import {faker} from "@faker-js/faker";
import {MainPage} from "../src/pages/main.page";

const url = 'https://realworld.qa.guru/#/login'

let existedUser = {
    name: 'mrTest',
    email: 'mrTest@gmail.com',
    password: '123456'
}

let article = {
    title: faker.word.noun(),
    description: faker.lorem.word(),
    content: faker.lorem.lines(4),
    tag: faker.company.buzzNoun()
}
test.describe('Article suite', () => {
    test.beforeEach('Login of existed user', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.open(url);
        await loginPage.doLogin(existedUser.email, existedUser.password);
        await expect(page.getByText(existedUser.name)).toBeVisible();
    });

    test('Creating of a new article', async ({page}) => {
        const editorPage = new EditorPage(page);
        const h1 = page.locator('h1');
        await editorPage.goToNewArticle();
        await editorPage.fillArticleTitle(article.title);
        await editorPage.fillArticleDescription(article.description);
        await editorPage.fillArticleContent(article.content);
        await editorPage.fillArticleTag(article.tag);
        await editorPage.publishArticle();
        await expect(h1).toHaveText(article.title);
    });

    test('Unable to create article without title', async ({page}) => {
        const editorPage = new EditorPage(page);
        await editorPage.goToNewArticle();
        await editorPage.fillArticleTitle('test');
        await editorPage.fillArticleDescription(article.description);
        await editorPage.fillArticleContent(article.content);
        await editorPage.fillArticleTag(article.tag);
        await editorPage.publishArticle();
        await expect(editorPage.errorMsg).toHaveText('Title already exists.. ');
    });

    test('Unable to create article with empty fields', async ({page}) => {
        const editorPage = new EditorPage(page);
        await editorPage.goToNewArticle();
        await editorPage.publishArticle();
        await expect(editorPage.titleInput).toBeVisible();
    });

    test('Click on pagination element shows next data', async ({page}) => {
        const mainPage = new MainPage(page);
        await mainPage.goToGlobalFeed();
        await mainPage.goToSecondPage();
        await expect(mainPage.opened2PageText).toBeVisible();
    });

    test('Tags. Click on first tag opens relevant articles', async ({page}) => {
        const mainPage = new MainPage(page);
        await mainPage.goToGlobalFeed();
        await mainPage.clickOnFirstTag();
        await expect(mainPage.articlePreview).toBeVisible();
    });

});




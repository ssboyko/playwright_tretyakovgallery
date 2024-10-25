import {BasePage} from "./base.page";

const {allure} = require('allure-playwright');

export class MainPage extends BasePage {
    constructor(page) {
        super(page);
        this.searchButtonHeader = this.page.locator('.header-top__actions').getByLabel('Поиск');
        this.searchInput = this.page.getByPlaceholder('Что вы ищете?');
    }

    async clickOnSearchIcon() {
        await allure.step("Click on search icon at the header", async () => {
            await this.searchButtonHeader.click();
        });
    }
}
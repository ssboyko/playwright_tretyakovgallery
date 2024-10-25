import {BasePage} from "./base.page";
import {allure} from "allure-playwright";
import {expect} from "@playwright/test";

export class SearchPage extends BasePage {
    constructor(page) {
        super(page);
        this.searchInput = this.page.getByPlaceholder('Что вы ищете?');
        this.closeSearchResultsIcon = this.page.locator('.popup__close');
        this.searchResults = this.page.locator('.search__result');
    }

    async fillSearchInput(text) {
        await allure.step(`Fill "${text}" at the search input`, async () => {
            await this.searchInput.fill(text);
        });
    }

    async closeSearchResults() {
        await allure.step(`Click on close [X] search results icon`, async () => {
            await this.closeSearchResultsIcon.click();
        });
    }

    async verifySearchResults(text) {
        await allure.step(`Verify search results contains ${text}`, async () => {
            await expect(this.searchResults).toContainText(text);
        });
    };
}
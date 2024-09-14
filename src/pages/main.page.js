import {BasePage} from './base.page';

export class MainPage extends BasePage {
    constructor(page) {
        super(page);
        this.menuButton = this.page.locator('.dropdown-toggle');
        this.settingsButton = this.page.getByRole('link', {name: 'Settings'});
        this.signupButton = this.page.getByRole('link', {name: 'Sign up'});
        this.globalFeedTab = this.page.getByRole('button', {name: 'Global Feed'});
        this.paginationPage2 = this.page.getByLabel('Page 2');
        this.opened2PageText = this.page.getByLabel('Page 2 is your current page');
        this.firstTag = this.page.locator('.sidebar .tag-list button').first();
        this.articlePreview = this.page.locator('.article-preview');

    }

    async goToRegister() {
        await this.signupButton.click();
    }

    async goToSettings() {
        await this.menuButton.click();
        await this.settingsButton.click();
    }

    async goToGlobalFeed() {
        await this.globalFeedTab.click();
    }

    async goToSecondPage() {
        await this.paginationPage2.click();
    }

    async clickOnFirstTag() {
        await this.firstTag.click();
    }
}

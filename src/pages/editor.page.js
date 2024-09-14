import {BasePage} from './base.page';
import {expect} from "@playwright/test";

export class EditorPage extends BasePage {
    constructor (page) {
        super(page);
        this.titleInput = this.page.locator('[name="title"]');
        this.createArticleButton = this.page.getByRole('link', { name: 'New Article' });
        this.createArticleTitle = this.page.getByPlaceholder('Article Title');
        this.createArtictleDescription = this.page.getByPlaceholder('What\'s this article about?');
        this.createArtictleContent = this.page.getByPlaceholder('Write your article (in');
        this.createArtictleTag = this.page.getByPlaceholder('Enter tags')
        this.publishArtictleButton = this.page.getByRole('button', { name: 'Publish Article' })
        this.errorMsg = this.page.locator('.error-messages');
    }

     async goToNewArticle () {
         await this.createArticleButton.click();
     }

    async fillArticleTitle (title) {
        await this.createArticleTitle.click();
        await this.createArticleTitle.fill(title);
    }

    async fillArticleDescription (description) {
        await this.createArtictleDescription.click();
        await this.createArtictleDescription.fill(description);
    }

    async fillArticleContent (content) {
        await this.createArtictleContent.click();
        await this.createArtictleContent.fill(content);
    }

    async fillArticleTag (tag) {
        await this.createArtictleTag.click();
        await this.createArtictleTag.fill(tag);
    }

    async publishArticle(){
        await this.publishArtictleButton.click();
    }

     async shouldHaveError(expected) {
        await expect(this.errorMsg).toHaveText(expected);
    }

    async titleShouldBeVisible() {
        await expect(this.titleInput).toBeVisible();
    }
}
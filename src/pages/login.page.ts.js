import {BasePage} from "./base.page";
import {Page} from "@playwright/test";

export class LoginPage extends BasePage {
    constructor (page) {
        super(page);
        this.emailInput = this.page.getByPlaceholder('Email');
        this.passwordInput = this.page.getByPlaceholder('Password');
        this.loginBtn = this. page.getByRole('button', { name: 'Login' });
    }
     async doLogin(userEmail = 'mrTest@gmail.com', userPassword = '123456') {
            await this.emailInput.fill(userEmail);
            await this.passwordInput.fill(userPassword);
            await this.loginBtn.click();
    }
}
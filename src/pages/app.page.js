import {MainPage} from "./main.page";
import {SearchPage} from "./search.page";


export class App {
    constructor(page) {
        this.page = page;
        this.mainPage = new MainPage(page);
        this.searchPage = new SearchPage(page);
    }
}
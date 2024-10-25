import {test} from '../src/helpers/fixture';

test('Search at the header contains results', async ({app}) => {
    await app.mainPage.clickOnSearchIcon();
    await app.searchPage.fillSearchInput('Пушкин');
    await app.searchPage.verifySearchResults('Пушкин');
    await app.searchPage.closeSearchResults();
    await app.mainPage.clickOnSearchIcon();
    await app.searchPage.fillSearchInput('Италия');
    await app.searchPage.verifySearchResults('Италия');
});


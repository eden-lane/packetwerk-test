import { TestGuiPage } from './app.po';
import { browser, by, element, $, $$ } from 'protractor';

describe('test-gui App', () => {
  let page: TestGuiPage;

  beforeEach(() => {
    page = new TestGuiPage();
  });

  it('should navigate to users page', () => {
    page.navigateTo();
    expect(page.getCurrentUrl()).toEqual(browser.baseUrl + '/users')
  });
  
  it('should show list of 10 users', () => {
    page.navigateTo();
    $$('a').then((items) => {
      expect(items.length).toBe(10)
    });
  })
  
});

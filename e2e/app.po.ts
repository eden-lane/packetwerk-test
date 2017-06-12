import { browser, by, element } from 'protractor';

export class TestGuiPage {
  navigateTo() {
    return browser.get('/');
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }
}

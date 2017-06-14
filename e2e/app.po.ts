import { browser, element, by } from 'protractor';

export class SupersnackbrosPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ssb-root h1')).getText();
  }
}

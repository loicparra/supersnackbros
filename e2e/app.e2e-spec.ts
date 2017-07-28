import { SupersnackbrosPage } from './app.po';

describe('supersnackbros App', () => {
  let page: SupersnackbrosPage;

  beforeEach(() => {
    page = new SupersnackbrosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ssb works!');
  });
});

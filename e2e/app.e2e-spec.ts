import { TestGuiPage } from './app.po';

describe('test-gui App', () => {
  let page: TestGuiPage;

  beforeEach(() => {
    page = new TestGuiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

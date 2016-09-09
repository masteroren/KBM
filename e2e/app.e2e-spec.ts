import { KBMAppPage } from './app.po';

describe('kbmapp App', function() {
  let page: KBMAppPage;

  beforeEach(() => {
    page = new KBMAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

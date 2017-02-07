import { OOHAPage } from './app.po';

describe('OOHA App', function() {
  let page: OOHAPage;

  beforeEach(() => {
    page = new OOHAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { FundamentalsPage } from './app.po';

describe('fundamentals App', function() {
  let page: FundamentalsPage;

  beforeEach(() => {
    page = new FundamentalsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

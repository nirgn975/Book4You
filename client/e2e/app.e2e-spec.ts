import { BfyPage } from './app.po';

describe('bfy App', function() {
  let page: BfyPage;

  beforeEach(() => {
    page = new BfyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

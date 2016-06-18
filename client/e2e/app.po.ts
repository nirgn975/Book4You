export class BfyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bfy-app h1')).getText();
  }
}

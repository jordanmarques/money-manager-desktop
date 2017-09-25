import { Angular2ElectronPage } from './app.po';

describe('money-manager-desktop App', () => {
  let page: Angular2ElectronPage;

  beforeEach(() => {
    page = new Angular2ElectronPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { AnimacionesPage } from './app.po';

describe('animaciones App', () => {
  let page: AnimacionesPage;

  beforeEach(() => {
    page = new AnimacionesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

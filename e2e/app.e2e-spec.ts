import { PruebaAngularPage } from './app.po';

describe('prueba-angular App', function() {
  let page: PruebaAngularPage;

  beforeEach(() => {
    page = new PruebaAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { BhlandAngularPage } from './app.po';

describe('bhland-angular App', function() {
  let page: BhlandAngularPage;

  beforeEach(() => {
    page = new BhlandAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

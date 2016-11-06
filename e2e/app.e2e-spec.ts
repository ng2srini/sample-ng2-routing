import { SampleNg2RoutingPage } from './app.po';

describe('sample-ng2-routing App', function() {
  let page: SampleNg2RoutingPage;

  beforeEach(() => {
    page = new SampleNg2RoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

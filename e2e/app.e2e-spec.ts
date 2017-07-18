import { WebTemplateV1Page } from './app.po';

describe('web-template-v1 App', () => {
  let page: WebTemplateV1Page;

  beforeEach(() => {
    page = new WebTemplateV1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { MailFrontEndPage } from './app.po';

describe('mail-front-end App', () => {
  let page: MailFrontEndPage;

  beforeEach(() => {
    page = new MailFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

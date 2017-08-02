import { Chapter1Page } from './app.po';

describe('chapter1 App', () => {
  let page: Chapter1Page;

  beforeEach(() => {
    page = new Chapter1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { TurnkeyDashboardPage } from './app.po';

describe('turnkey-dashboard App', () => {
  let page: TurnkeyDashboardPage;

  beforeEach(() => {
    page = new TurnkeyDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

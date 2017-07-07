import { TaskUpPage } from './app.po';

describe('task-up App', () => {
  let page: TaskUpPage;

  beforeEach(() => {
    page = new TaskUpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

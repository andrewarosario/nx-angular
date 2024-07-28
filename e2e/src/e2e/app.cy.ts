import { getGreeting } from '../support/app.po';

describe('my-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome my-app');
  });

  it('should pass lighthouse audit', () => {
    const customThresholds = {
      performance: 30,
      accessibility: 50,
      seo: 70,
      'first-contentful-paint': 2000,
      'largest-contentful-paint': 10000,
      'cumulative-layout-shift': 0.1,
      'total-blocking-time': 800,
    };

    const desktopConfig = {
      formFactor: 'desktop',
      screenEmulation: { disabled: true },
    };
    cy.lighthouse(customThresholds, desktopConfig);
  });
});

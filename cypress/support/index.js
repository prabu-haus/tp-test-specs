import './commands';

require('@shelex/cypress-allure-plugin');

const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
// eslint-disable-next-line consistent-return
Cypress.on('uncaught:exception', (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
    }
});

// eslint-disable-next-line no-unused-vars
Cypress.on('uncaught:exception', (err, runnable) => false);

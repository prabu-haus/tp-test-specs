describe('Pricing', () => {
    context('Register & get the best available financing options', () => {
        it('Start by entering the property address', () => {
            // Open the home page
            cy.visit(Cypress.env('baseUrl'));

            // Make sure we are at the home page
            cy.title()
                .should('eq', 'Haus Services, Inc. | Haus');

            // Enter the property address in the homepage
            cy.get('.geosuggest__input-wrapper .geosuggest__input')
                .type('267 South Main Street, Los Angeles, CA, USA');

            // Select the complete address from the dropdown
            cy.get('.geosuggest__item--active > span').click();

            // Check the options
            cy.get('.ContentContainer__inner___37P3Z > .Button__button___4ZD5v')
                // .contains('See Options')
                .trigger('mouseover')
                .click();

            // Make sure we are at the summary page
            cy.title()
                .should('eq', 'Pricing - Summary | Haus');

            // Enter the original mortgage amount
            cy.get('#originalMortgageAmount')
                .type('450000');

            // Enter the current interest rate
            cy.get('#currentInterestRate')
                .type('2.5');

            // Mortgage Type
            cy.get('.RatesFilters__row___C7mJR:nth-child(3) .RatesFilters__inputContainer___1R7U0:nth-child(3)')
                .within(($mortgageType) => {
                    // Select the mortgage type
                    cy.get('.SelectInput__medium___3kvlo')
                        .click();

                    // Select an option for the mortgage type
                    // cy.get('.SelectInput__menuContainer___1dngA #downshift-5-menu > [role="option"]')
                    //     .contains('20 year fixed')
                    //     .click();
                    cy.get('#downshift-8-item-1')
                        .contains('20 year fixed')
                        .click();
                });

            // Enter the estimated home value
            cy.get('#estimatedHomeValue')
                .type('850000');

            // Enter the remaining mortgage value
            cy.get('#remainingMortgageAmount')
                .type('343000');

            // Home Use
            cy.get('.RatesFilters__row___C7mJR:nth-child(4) .RatesFilters__inputContainer___1R7U0:nth-child(3)')
                .within(($mortgageType) => {
                    // Select the type of use
                    cy.get('.TextInput__inputWrapper___1Ld2e')
                        .click();

                    // Select an option for the type of use
                    // cy.get('.SelectInput__menuContainer___1dngA #downshift-5-menu > [role="option"]')
                    //     .contains('20 year fixed')
                    //     .click();
                    cy.get('#downshift-9-item-0')
                        .contains('Primary')
                        .click();
                });

            // Cashout Amount
            cy.get('.RatesFilters__row___C7mJR:nth-child(5) .RatesFilters__inputContainer___1R7U0:nth-child(1)')
                .within(($mortgageType) => {
                    // Select the cashout amount
                    cy.get('.SelectInput__medium___3kvlo')
                        .click();

                    // Select an option for the cashout amount
                    cy.get('#downshift-5-item-8')
                        .contains('$40,000')
                        .click();
                });

            // Credit Score
            cy.get('.RatesFilters__row___C7mJR:nth-child(5) .RatesFilters__inputContainer___1R7U0:nth-child(2)')
                .within(($mortgageType) => {
                    // Select the credit score
                    cy.get('.SelectInput__medium___3kvlo')
                        .click();

                    // Select an option for the credit score
                    cy.get('#downshift-7-item-1')
                        .contains('780-799')
                        .click();
                });

            // Home Type
            cy.get('.RatesFilters__row___C7mJR:nth-child(5) .RatesFilters__inputContainer___1R7U0:nth-child(3)')
                .within(($mortgageType) => {
                    // Select the home type
                    cy.get('.SelectInput__medium___3kvlo')
                        .click();

                    // Select an option for the home type
                    cy.get('#downshift-6-item-2')
                        .contains('Condo')
                        .click();
                });

            // No second loan
            cy.get(':nth-child(1) > .RadioButton__label___2Qlpl > .RadioButton__radioButtonWrapper___m6VoZ > .RadioButton__radioBorder___1cz1K')
                .click({ force: true });
            // cy.get('#rate-filter-input-willPayoffSecondLoan-No')
            //     .click();

            // Enter the first & last name
            cy.get('#firstName')
                .type('Haus');
            cy.get('#lastName')
                .type('Holder2');

            // Enter the telephone number & email
            cy.get('#tel')
                .type('7862757947');
            cy.get('#email')
                .type('haus.holder2@maildrop.cc');

            // Add a password for the user
            cy.get('#password')
                .type('Haus.Holder!2#4');

            // Submit the form for pricing
            cy.get('.RatesFilters__submitContainer___3qnhq > .Button__button___4ZD5v')
                .click();
        });
    });
});

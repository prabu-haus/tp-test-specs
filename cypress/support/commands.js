import 'cypress-wait-until';

Cypress.Commands.add('any', { prevSubject: 'element' }, (subject, size = 1) => {
    cy.wrap(subject)
        .then((elementList) => {
            // eslint-disable-next-line no-param-reassign
            elementList = (elementList.jquery) ? elementList.get() : elementList;
            // eslint-disable-next-line no-param-reassign
            elementList = Cypress._.sampleSize(elementList, size);
            // eslint-disable-next-line no-param-reassign
            elementList = (elementList.length > 1) ? elementList : elementList[0];
            cy.wrap(elementList);
        });
});

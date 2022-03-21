describe('ncnc-app 방문', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('displays two todo items by default', () => {
        cy.get('.css-18tfhk1').click();
        cy.get(':nth-child(1) > .css-1v0qy5v').click();
        cy.get(
            ':nth-child(1) > .css-n8sqfl > .css-a3z6ut > :nth-child(1) > b',
        ).contains('모바일금액권 1만원권');
        cy.get('.css-9qnqrv > :nth-child(2)').click();
        cy.get(':nth-child(1) > .css-1v0qy5v').contains('스타벅스');
        cy.get(':nth-child(1) > .css-1v0qy5v').click();
        cy.get('.css-12z5rc5').contains('42개의 상품');
        cy.get('.css-17l1kxv > p').contains('스타벅스');
        cy.get(':nth-child(1) > .css-n8sqfl').click();
        cy.get('.css-1em771j').contains('옵션 선택하기');
        cy.get('.css-1em771j').click();
        cy.get('.css-1rhyngr').contains('구매하기');
        cy.get(':nth-child(1) > .css-18nc8lv > .css-wkxndf')
            .contains('유효기간')
            .should('be.visible');
        cy.get(':nth-child(1) > .css-18nc8lv > .css-wkxndf').click();
        cy.get('.css-1ti8j62').contains('원').should('be.visible');
        cy.get('.css-1ti8j62').click();
        cy.get('.css-qzmnd2 > button').click();
        cy.get('.css-1em771j').contains('옵션 선택하기');

        cy.get('.css-18tfhk1').click();
        cy.get('.css-17l1kxv').contains('스타벅스');
        cy.get('.css-18tfhk1').click();
        cy.get('.css-17l1kxv').contains('카페');
        cy.get('.css-18tfhk1').click();
        cy.get('.css-17l1kxv').contains('땡철이');
        cy.get('.css-18tfhk1').click();
        cy.get('.css-17l1kxv').contains('니콘내콘');
    });
});

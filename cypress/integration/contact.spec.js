describe('고객센터', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should navigate from homepage to the contact page', () => {
        cy.get('[data-cy=hamburger-menu]').click();
        cy.get('[data-cy=contacts]').contains('고객센터').click();
        cy.url().should('include', '/contacts');
        cy.get('[data-cy=qna-list] > :nth-child(1)').click();
        cy.get('[data-cy=qna-answer]')
            .contains(
                '니콘머니, 모바일 쿠폰은 현금성 유가증권에 해당되므로, 현금영수증이 별도로 발행되지 않습니다. 매장에서 구매하신 쿠폰으로 결제시 직원에게 요청하시면 발급이 가능합니다. 단, 일부 이벤트 쿠폰의 경우 현금 영수증 발행이 불가할 수 있으며 해당 사유로는 환불이 불가한 점 양해 부탁드립니다.',
            )
            .should('be.visible');
        cy.get('[data-cy=contact-tap-2]').click();
        cy.get('[data-cy=qna-list] > :nth-child(1)').contains(
            '바로 정산은 안 되나요?',
        );
        cy.get('[data-cy=qna-list] > :nth-child(1)').click();
        cy.get('[data-cy=qna-answer]')
            .contains(
                '판매하신 쿠폰은 사고 발생율을 줄이기 위해 수락일을 기준으로 2영업일 후에 정산금으로 전환되며, 은행 거래 시스템상 바로 지급은 어려운 점 양해 부탁드리겠습니다.',
            )
            .should('be.visible');
        cy.get('[data-cy=back-menu]').click();
        cy.wait(500);
        cy.get('[data-cy="header-title"]').contains('니콘내콘');
    });
});

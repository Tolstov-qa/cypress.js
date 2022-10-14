describe('Тестирование staya', function () {
        it('Авторизация на сайте', function () {
        cy.visit('https://staya.dog/')
            .get('.header-bottom__right--link').click()
            .get('.auth-form > form > [type="email"]').type('i212838908@gmail.com')
            .get('.auth-form > form > [type="password"]').type('JMeLMN')
            .get('.auth-form__submit').click()
        cy.contains('Мои заказы')
                 })    
})
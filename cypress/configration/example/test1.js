beforeEach(()=>{
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.log('Cache and cookies cleaewd');
    cy.reload();
});

describe('this is the first test', () => {
    it('this is a log in test', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()


        
    });
    
});
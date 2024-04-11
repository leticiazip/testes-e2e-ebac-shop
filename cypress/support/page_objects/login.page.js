class loginPage{

    logarUsuario(){
        // Logar o usuário:
        cy.fixture('perfil').then(dados => {
            cy.visit('/minha-conta/')
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log:false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.page-title').should('contain', 'Minha conta')
        })
    }
}
export default new loginPage()
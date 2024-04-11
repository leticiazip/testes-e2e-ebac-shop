class ProdutosPage{
    visitarUrl(){
        cy.visit('/produtos/')
    }

    buscarProduto(nomeProduto){
        cy.get('[placeholder="Enter your search ..."]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
        cy.get('.product_title').should('have.text', nomeProduto)
    }

    selecionarTamanho(tamanho){
        cy.contains('[data-value]', tamanho).click()
    }

    selecionarCor(cor){
        cy.contains('[data-value]', cor).click()
    }

    addProdutoCarrinho(){
        cy.get('.single_add_to_cart_button').click()
        cy.get('[class="button wc-forward"]').should('have.text', 'Ver carrinho')
    }

    visitarCarrinho(){
        cy.get('[class="text-skin cart-icon"]').eq(0).click();
        cy.get('[class="button wc-forward view-cart"]').eq(1).click();
    }

    irParaCheckout(){
    cy.get('[class="checkout-button button alt wc-forward"]').click();
    }

    selecionarTipoPagamento(pagamento){
        if (pagamento=='Transferência bancária') {
            cy.get('#payment_method_bacs').click({force: true})

        }else if (pagamento=='Cheque'){
            cy.get('#payment_method_cheque').click({force: true})

        }else if (pagamento=='Pagamento na entrega'){
            cy.get('#payment_method_cod').click({force: true})

        } else {
            cy.log('Forma de pagamento inválida!')
        }
    }

    preencherNome(nome, sobrenome){
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
    }

    preencherEndereco(logradouro, cidade, cep){
        cy.get('#billing_address_1').clear().type(logradouro)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#billing_postcode').clear().type(cep)
    }

    preencherTelefone(telefone){
        cy.get('#billing_phone').clear().type(telefone)
    }

    aceitarTermos(){
        cy.get('#terms').click({force: true})
    }

    finalizarCompra(){
        cy.get('#place_order').click()
    }

}
export default new ProdutosPage()
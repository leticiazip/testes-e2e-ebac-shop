/// <reference types="cypress" />
import produtosPage from "../support/page_objects/produtos.page.js"
import loginPage from "../support/page_objects/login.page.js"

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos 
        Adicionando ao carrinho 
        Preenchendo todas opções no checkout 
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        // Logar o usuário
        loginPage.logarUsuario()

        // Escolha do 1º produto
        produtosPage.buscarProduto('Ajax Full-Zip Sweatshirt')
        produtosPage.selecionarTamanho('XS')
        produtosPage.selecionarCor('Blue')

        produtosPage.addProdutoCarrinho()

        // Escolha do 2º produto
        produtosPage.buscarProduto('Aero Daily Fitness Tee')
        produtosPage.selecionarTamanho('XS')
        produtosPage.selecionarCor('Brown')

        produtosPage.addProdutoCarrinho()

        //Escolha do 3º produto
        produtosPage.buscarProduto('Atlas Fitness Tank')
        produtosPage.selecionarTamanho('L')
        produtosPage.selecionarCor('Blue')

        produtosPage.addProdutoCarrinho()

        //Escolha do 4º produto
        produtosPage.buscarProduto('Ariel Roll Sleeve Sweatshirt')
        produtosPage.selecionarTamanho('L')
        produtosPage.selecionarCor('Purple')

        produtosPage.addProdutoCarrinho()

        // Acessar o carrinho, para seguir com a compra dos itens selecionados
        produtosPage.visitarCarrinho();
        produtosPage.irParaCheckout();

        // Preenchimento dos dados do checkout
        produtosPage.preencherNome('Leticia', 'Castilho')
        produtosPage.preencherEndereco('Rua teste', 'São Paulo', '93546-999')
        produtosPage.preencherTelefone('11996523214')

        produtosPage.selecionarTipoPagamento('Cheque')
        produtosPage.aceitarTermos()
        produtosPage.finalizarCompra()
        
        //Validação para verificar se a compra foi finalizada com sucesso
        cy.get('[class="woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received"]').wait(5000).should('have.text', 'Obrigado. Seu pedido foi recebido.')
    });


})

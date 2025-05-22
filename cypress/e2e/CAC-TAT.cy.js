describe('Central de Atendimento ao Cliente TAT', () => {
 
  beforeEach (()  =>{
  cy.visit('./src/index.html')
  })
 
  it('verifica o título da aplicação', () => {

   cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })

   it('Preenche os campos obrigatórios e envia o formulário', () => {

    cy.get('#firstName').type('Carlos')
    cy.get('#lastName').type('Daniel')
    cy.get('#email').type('carlosdaniel@TextDecoderStream.com')
    cy.get('#open-text-area').type('Obrigado')
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  
})

it('Verificar se aparece a mensagem de obrigatoriedade nos campos', () => {

  cy.get('#firstName').type('Carlos')
  cy.get('#firstName').clear()
  cy.get('button[type="submit"]').click()
  cy.get('#firstName').type('Carlos')


  cy.get('#lastName').type('Daniel')
  cy.get('#lastName').clear
  cy.get('button[type="submit"]').click()
  cy.get('#lastName').type('Daniel')



  cy.get('#email').type('carlosdaniel@TextDecoderStream.com')
  cy.get('#email').clear()
  cy.get('button[type="submit"]').click()
  cy.get('#email').type('carlosdaniel@TextDecoderStream.com')



  cy.get('#open-text-area').type('Obrigado')
  cy.get('#email').clear()
  cy.get('#open-text-area').type('Obrigado')

  cy.get('button[type="submit"]').click()

})

it('Verificar se o campo telefone está se tornando obrigatório, ao clicar na box de preferencia de comunicação', () => {

  cy.get('#firstName').type('Carlos')
  cy.get('#lastName').type('Daniel')
  cy.get('#email').type('carlosdaniel@TextDecoderStream.com')
  cy.get('#phone-checkbox').click()
  cy.get('button[type="submit"]').click()
  cy.get('#phone').type('987654312')


  cy.get('#open-text-area').type('Obrigado')
  cy.get('button[type="submit"]').click()

})

it('Verificar se todos os campos estão sendo preenchidos', () => {

  cy.get('#firstName').type('Carlos')
  cy.get('#lastName').type('Daniel')
  cy.get('#email').type('carlosdaniel@TextDecoderStream.com')
  cy.get('#phone').type('987654312')
  cy.get('#product').select('cursos')



  cy.get('#open-text-area').type('Obrigado')
  cy.get('button[type="submit"]').click()

})

it('Exibir mensagem de erro ao submeter o formulário com um email com formatação inválida', ()  => {

  cy.get('#firstName').type('Carlos')
  cy.get('#lastName').type('Daniel')
  cy.get('#email').type('0carlos@test,com')
  cy.get('#product').select('cursos')



  cy.get('#open-text-area').type('Obrigado')
  cy.get('button[type="submit"]').click()

  cy.get('.error').should('be.visible')

})

  it('Campo Telefone continua vazio quando preencher valor não-numérico', () => {

    cy.get('#phone').type('abcde').should('have.value','')





})



  })
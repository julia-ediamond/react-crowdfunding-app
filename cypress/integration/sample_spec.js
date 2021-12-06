describe('The Signup Page', () => {
    it('Gets, types and asserts', () => {
      
      cy.visit('/signup')
      cy.url().should('include', '/signup')

      it('submits in via form submission', function () {

      cy.get('input#username.MuiInputBase-input.MuiInput-input')
        .type('username')
        .should('have.value', 'username')
      cy.get('input#email.MuiInputBase-input.MuiInput-input')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
      cy.get('input#password.MuiInputBase-input.MuiInput-input')
        .type('password')
        .should('have.value', 'password')
      cy.get('form').submit()
      cy.get('Button').click()
    })
    })
})

describe('The Login Page', () => {
  beforeEach(() => {
    cy.visit('/login')
    cy.request('POST', 'https://quiet-hamlet-41512.herokuapp.com/api-token-auth/', { username: 'cat25', password: '12345678' })
      .its('body')
      .as('currentUser')
  })

  it('loggs in via form submission', function () {
 
    cy.visit('/login')
    cy.url().should('include', '/login')
    cy.get('input#username.MuiInputBase-input.MuiInput-input').type('cat25')
      .should('have.value', 'cat25')
    cy.get('input#password.MuiInputBase-input.MuiInput-input').type('12345678')
      .should('have.value', '12345678')
    // {enter} causes the form to submit
    cy.get('form').submit()
    cy.get('Button').click()
    cy.log(`Logging in as 'cat25'`)
    cy.url().should('include', '/')
  })
})


describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/')
    })
  })

describe('The Project Page', () => {
    it('Visits the homepage and finds projects', () => {
      cy.visit('/project')
      cy.url().should('include', '/project')
    })
})

describe('The Pledge', () => {
    it('gets, types and asserts', () => {
        cy.visit('/project/42')
        cy.get('input#amount.MuiInputBase-input.MuiInput-input')
        .type('242')
        .should('have.value', '242')
        cy.get('input#comment.MuiInputBase-input.MuiInput-input')
        .type('Incredible')
        cy.get('input#anonymous.MuiInputBase-input.MuiInput-input')
        .type('true')
        cy.get('Button').click()
    })
})

describe('The Create Project Page', () => {
    it('Gets, types and asserts', () => {
    cy.visit('/createproject')
    cy.url().should('include', '/createproject')
    cy.get('input#title.MuiInputBase-input.MuiInput-input')
        .type('title')
        .should('have.value', 'title')
    cy.get('input#categories.MuiInputBase-input.MuiInput-input')
        .type('health')
        .should('have.value', 'health')
    cy.get('input#description.MuiInputBase-input.MuiInput-input')
        .type('This is Cypress')
        .should('have.value', 'This is Cypress')
    cy.get('input#goal.MuiInputBase-input.MuiInput-input')
        .type('5400')
        .should('have.value', '5400')
    cy.get('input#image.MuiInputBase-input.MuiInput-input')
        .type('https://picsum.photos/300/300')
        .should('have.value', 'https://picsum.photos/300/300')
    cy.get('input#is_open.MuiInputBase-input.MuiInput-input')
        .type('true')
        .should('have.value', 'true')
    //cy.get('input#date_created.MuiInputBase-input.MuiInput-input').invoke('val').then((text) => {
        //.select('11/26/2021')
    // cy.get('input#date_created.MuiInputBase-input.MuiInput-input').click()
    // cy.contains('today').click()
   // })
//    cy.get('input#date_created.MuiInputBase-input.MuiInput-input').invoke('val').then((text) => {
//     expect('11/30/2021').to.equal(text);
// });
//<input id="date_created" type="date" class="MuiInputBase-input MuiInput-input" value="">
    //cy.get(".dayContainer span:nth-child(15)").click();
      cy.get('input#date_created.MuiInputBase-input.MuiInput-input').click()
      cy.get('form').submit()
      cy.get('Button').click()
    })
})


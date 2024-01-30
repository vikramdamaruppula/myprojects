/// <reference types="cypress" />

describe('describe is used for grouping test cases', () => {
  it("lets search for google",()=>{
    cy.visit("https://google.com") 
  })
})

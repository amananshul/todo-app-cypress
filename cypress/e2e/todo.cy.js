import { fireEvent } from "@testing-library/react";

describe("testing",()=>{
    beforeEach(() => {
        // cy.visit('http://localhost:3000/')
        cy.intercept("GET",' http://localhost:4004/todos').as('getTodos')
    })
it("should visit",()=>{
//  cy.visit('http://localhost:3000/')
 cy.focused().should("have.id","inp");
 cy.get("[data-testid=todo-input]").type("hello")
});
it("should add element to list",()=>{
    cy.intercept("POST","http://localhost:4004/todos",{
        statusCode: 201,
        body:{
          id:"2",
          value:value,
          isCompleted:true
        },
    }).as("postTodo")
    // cy.visit('http://localhost:3000/')
    // let value="AmanX"
    cy.get("[data-testid=todo-input]").type(value)
    cy.get("[data-testid=todo-btn]").click()
    cy.wait("@postTodo")
    cy.get("[data-testid=todo-item-value]").eq(-1).should("contain",value)
    // cy.get("[data-testid=todo-checkbox]").eq(-1).should("be.checked")
    
})
})
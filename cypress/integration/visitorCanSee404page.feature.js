import { baseUrl } from '../../cypress.json';

describe("A visitor navigating to a nonexistent user page", () => {
  before(() => {
    cy.visit("/idontexist431123", { failOnStatusCode: false });
  });

  it("is expected to render to 404 page header", () => {
    cy.get("[data-cy=404-header]").should(
      "contain.text",
      "404 - That page does not seem to exist..."
    );
  });

  it("is expected to render to 404 page gif", () => {
    cy.get("[data-cy=404-gif]").should("be.visible");
  });

  it("is expected to render to 'Go home' button", () => {
    cy.get("[data-cy=404-go-home-btn]").should("contain.text", "Go home");
  });

  describe("can go back to home page", () => {
    before(() => {
      cy.get("[data-cy=404-go-home-btn]").click();
    });

    it("is expected to navigate to home page", () => {
      cy.url().should("eq", `${baseUrl}/`);
    });
  });
});

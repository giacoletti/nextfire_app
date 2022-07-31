import { baseUrl } from "../../cypress.json";

describe("A visitor navigating /admin", () => {
  before(() => {
    cy.visit("/admin");
  });

  describe("unauthenticated user", () => {
    it("is expected to see 'You must be signed in' link", () => {
      cy.get("[data-cy=sign-in-link]").should(
        "contain.text",
        "You must be signed in"
      );
    });

    describe("can click the link to navigate to Sign In page", () => {
      before(() => {
        cy.get("[data-cy=sign-in-link]").click();
      });

      it("is expected to navigate to '/enter' page", () => {
        cy.url().should("eq", baseUrl + '/enter');
      });
    });
  });
});

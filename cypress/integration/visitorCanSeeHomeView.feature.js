describe("A visitor navigating the main url", () => {
  before(() => {
    cy.visit("/");
  });

  describe("can see navbar", () => {
    it("is expected to see navbar component", () => {
      cy.get("[data-cy=navbar]").should("be.visible");
    });

    it("is expected to have FEED button", () => {
      cy.get("[data-cy=feed-button]").should("contain.text", "FEED");
    });

    it("is expected to have 'Log in' button", () => {
      cy.get("[data-cy=login-button]").should("contain.text", "Log in");
    });
  });
});

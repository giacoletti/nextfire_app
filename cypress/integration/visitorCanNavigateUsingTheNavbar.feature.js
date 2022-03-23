describe("A visitor can navigate to the /enter view by clicking the Log in button", () => {
  before(() => {
    cy.visit("/");
    cy.get("[data-cy=login-button]").click();
  });

  it("is expected to navigate to /enter view", () => {
    cy.url().should("contain", "/enter");
  });

  it("is expected to see 'Sign in with Google' button", () => {
    cy.get("[data-cy=signin-button]").should("contain.text", "Sign in with Google");
  });

  describe("can navigate back to the home view", () => {
    before(() => {
      cy.get("[data-cy=feed-button]").click();
    });

    it("is expected to navigate back to the home view", () => {
      cy.url().should("not.contain", "/enter");
    });
  });
});

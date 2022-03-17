describe("A visitor can sign in with Google by clicking the 'Sign in' button", () => {
  before(() => {
    cy.visit("/", {
      onBeforeLoad(win) {
        cy.stub(win, "open");
      }
    });
    cy.get("[data-cy=login-button]").click();
    cy.get("[data-cy=signin-button]").click();
  });

  it("is expected to open popup window", () => {
    cy.window().its("open").should("be.called");
  });
});

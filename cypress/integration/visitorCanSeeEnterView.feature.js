describe("A visitor navigating /enter", () => {
  before(() => {
    cy.visit("/enter");
  });

  it("is expected to see 'Sign in with Google' button", () => {
    cy.get("[data-cy=signin-button]").should("contain.text", "Sign in with Google");
  });
});

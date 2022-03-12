describe("A visitor navigating /enter", () => {
  before(() => {
    cy.visit("/enter");
  });

  it("is expected to see 'Sign Up' header", () => {
    cy.get("[data-cy=signup-header]").should("contain.text", "Sign Up");
  });
});

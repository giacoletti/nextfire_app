describe("A visitor navigating /enter", () => {
  before(() => {
    cy.visit("/admin");
  });

  it("is expected to see 'Sign Up' header", () => {
    cy.get("[data-cy=admin-header]").should("contain.text", "Admin");
  });
});

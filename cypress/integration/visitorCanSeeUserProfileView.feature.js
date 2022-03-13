describe("A visitor navigating to /[anything]", () => {
  before(() => {
    cy.visit("/whataweirdroute");
  });

  it("is expected to see 'User profile' header", () => {
    cy.get("[data-cy=user-header]").should("contain.text", "User profile");
  });
});

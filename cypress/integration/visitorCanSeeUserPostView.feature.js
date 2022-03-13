describe("A visitor navigating to /[anything]/[alsoanything]", () => {
  before(() => {
    cy.visit("/wowowo/hereismypost");
  });

  it("is expected to see 'User post' header", () => {
    cy.get("[data-cy=post-header]").should("contain.text", "User post");
  });
});

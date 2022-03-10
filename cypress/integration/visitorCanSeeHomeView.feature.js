describe("A visitor navigating the main url", () => {
  before(() => {
    cy.visit("/");
  });

  it("is expected to see main header", () => {
    cy.get("[data-cy=main-header]").should("contain.text", "Welcome stranger!");
  });
});

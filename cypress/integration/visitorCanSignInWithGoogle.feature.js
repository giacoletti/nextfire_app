describe("A visitor can sign in with Google by clicking the 'Sign in' button", () => {
  before(() => {
    cy.visit("/");
    cy.get("[data-cy=signin-button]").click();
  });

  it("is expected to ...", () => {
    // sign in with Google through pop up window...
  });
});

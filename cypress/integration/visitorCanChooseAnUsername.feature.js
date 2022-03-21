describe("A visitor, after sign in, can choose an username", () => {
  before(() => {
    cy.visit("/");
    cy.get("[data-cy=login-button]").click();
    cy.login();
  });

  it("is expected to see 'Choose Username' header", () => {
    cy.get("[data-cy=choose-username-header]").should(
      "contain.text",
      "Choose Username"
    );
  });

  it("is expected to see username input field", () => {
    cy.get("[data-cy=username-input]").should("be.visible");
  });

  it("is expected to see 'Choose' button", () => {
    cy.get("[data-cy=submit-btn]").should("contain.text", "Choose");
  });

  after(() => {
    cy.logout();
  });
});

describe("A visitor, after sign in, can choose an username", () => {
  before(() => {
    cy.intercept(
      "GET",
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/getProjectConfig?key=**",
      {
        fixture: "firebaseAuthResponse"
      }
    );
    cy.intercept(
      "GET",
      "https://identitytoolkit.googleapis.com/v1/projects?key=**",
      {
        fixture: "firebaseAuthResponse"
      }
    );
    cy.intercept(
      "GET",
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=**",
      {
        fixture: "googleSignInResponse"
      }
    );
    cy.visit("/");
    cy.get("[data-cy=login-button]").click();
    cy.get("[data-cy=signin-button]").click();
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
});

describe("A user who's signed in, can see his profile view", () => {
  before(() => {
    cy.visit("/");
    cy.get("[data-cy=login-button]").click();
    cy.login();
    cy.get("[data-cy=navbar-avatar]").click();
  });

  it("is expected to navigate to /{username} view", () => {
    cy.url().should("contain", "johnsmith92");
  });

  it("is expected to see profile avatar", () => {
    cy.get("[data-cy=user-avatar]").should("be.visible");
  });

  it("is expected to see username", () => {
    cy.get("[data-cy=user-username]").should("contain.text", "@johnsmith92");
  });

  it("is expected to see user display name", () => {
    cy.get("[data-cy=user-display-name]").should(
      "contain.text",
      "Giovanni Iacoletti"
    );
  });

  describe("can see his own post feed", () => {
    it("is expected to see post author", () => {
      cy.get("[data-cy=post-author]").should("contain.text", "By @johnsmith92");
    });

    it("is expected to see post title", () => {
      cy.get("[data-cy=post-title]").should("contain.text", "My first post!");
    });

    it("is expected to see post footer", () => {
      cy.get("[data-cy=post-footer]").should(
        "contain.text",
        "11 words. 1 min read❤️ 0 Hearts"
      );
    });
  });

  after(() => {
    cy.logout();
  });
});

describe("A visitor navigating the main url", () => {
  before(() => {
    cy.visit("/");
  });

  describe("can see navbar", () => {
    it("is expected to see navbar component", () => {
      cy.get("[data-cy=navbar]").should("be.visible");
    });

    it("is expected to have FEED button", () => {
      cy.get("[data-cy=feed-button]").should("contain.text", "FEED");
    });

    it("is expected to have 'Log in' button", () => {
      cy.get("[data-cy=login-button]").should("contain.text", "Log in");
    });
  });

  describe("can see posts feed", () => {
    it("is expected to see first post", () => {
      cy.get("[data-cy=post-author-0]").should(
        "contain.text",
        "By @johnsmith92"
      );
      cy.get("[data-cy=post-title-0]").should("contain.text", "My first post!");
      cy.get("[data-cy=post-footer-0]").should(
        "contain.text",
        "11 words. 1 min read❤️ 0 Hearts"
      );
    });
  });
});

describe("A visitor navigating the main url", () => {
  before(() => {
    cy.visit("/");
  });

  it("is expected to see main header", () => {
    cy.get("[data-cy=main-header]").should("contain.text", "Welcome stranger!");
  });

  describe("can click user profile link to navigate", () => {
    before(() => {
      cy.get("[data-cy=johnsmith21-link]").click();
    });

    it("is expected to navigate to user profile view", () => {
      cy.url().should("include", "/johnsmith21");
    });
  });
});

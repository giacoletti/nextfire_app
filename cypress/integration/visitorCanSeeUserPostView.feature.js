describe("A visitor can see a full post by clicking on its title", () => {
  before(() => {
    cy.visit("/");
    cy.get("[data-cy=post-title-0]").click();
  });

  it("is expected to navigate to user post url", () => {
    cy.url().should("contain", "/johnsmith92/first-post");
  });

  it("is expected to see post header", () => {
    cy.get("[data-cy=post-header]").should("contain.text", "My first post!");
  });

  it("is expected to see post author and creation date", () => {
    cy.get("[data-cy=post-author-created]").should(
      "contain.text",
      "Written by @johnsmith92 on 2022-03-22"
    );
  });

  it("is expected to see post content", () => {
    cy.get("[data-cy=post-content]").should("be.visible");
  });
});

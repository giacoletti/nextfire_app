describe("Visiting the home page", () => {
  before(() => {
    cy.visit("/");
  });

  it("is expected to have open graph title meta tag", () => {
    cy.get("meta[property='og:title']").should("have.attr", "content", "Rekindle");
  });

  it("is expected to have open graph description meta tag", () => {
    cy.get("meta[property='og:description']").should(
      "have.attr",
      "content",
      "Blog platform built with Next.js, React and Firebase."
    );
  });

  it("is expected to have open graph image meta tag", () => {
    cy.get("meta[property='og:image']").should(
      "have.attr",
      "content",
      "/rekindle.png"
    );
  });
});

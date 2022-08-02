import { baseUrl } from "../../cypress.json";

describe("A visitor navigating /admin", () => {
  before(() => {
    cy.visit("/admin");
  });

  describe("unauthenticated user", () => {
    it("is expected to see 'You must be signed in' link", () => {
      cy.get("[data-cy=sign-in-link]").should(
        "contain.text",
        "You must be signed in"
      );
    });

    describe("can click the link to navigate to Sign In page", () => {
      before(() => {
        cy.get("[data-cy=sign-in-link]").click();
      });

      it("is expected to navigate to '/enter' page", () => {
        cy.url().should("eq", baseUrl + "/enter");
      });

      after(() => {
        cy.visit("/admin");
      });
    });
  });

  describe("authenticated user", () => {
    before(() => {
      cy.login();
    });

    it("is expected to see admin page header", () => {
      cy.get("[data-cy=admin-header]").should(
        "contain.text",
        "Manage your Posts"
      );
    });

    it("is expected to see first created user's post", () => {
      cy.get("[data-cy=post-author-0]").should(
        "contain.text",
        "By @johnsmith92"
      );
      cy.get("[data-cy=post-title-0]").should(
        "contain.text",
        "My second post!"
      );
      cy.get("[data-cy=post-footer-0]").should(
        "contain.text",
        "30 words. 1 min read❤️ 0 Hearts"
      );
    });

    it("is expected to see 'Create post' form", () => {
      cy.get("[data-cy=create-post-form]").within(() => {
        cy.get("[data-cy=title-input]").should(
          "have.attr",
          "placeholder",
          "My Awesome Article!"
        );
        cy.get("[data-cy=slug-text]").should("contain.text", "Slug:");
        cy.get("[data-cy=create-post-btn]").should(
          "contain.text",
          "Create New Post"
        );
      });
    });

    describe("can create a new post", () => {
      before(() => {
        cy.get("[data-cy=title-input]").type("My new article");
        cy.get("[data-cy=create-post-btn]").click();
      });

      it("is expected to navigate to the edit post page", () => {
        cy.url().should("eq", baseUrl + "/admin/my-new-article");
      });

      it("is expected to see toast message", () => {
        cy.get(".toast-message").should("contain.text", "Post created!");
      });

      it("is expected to see post title", () => {
        cy.get("[data-cy=post-title]").should("contain.text", "My new article");
      });
    });

    after(() => {
      cy.logout();
    });
  });
});

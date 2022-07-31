describe("A visitor navigating /admin/:anything", () => {
  describe("unauthenticated user", () => {
    before(() => {
      cy.visit("/admin/whatever");
    });

    it("is expected to see 'You must be signed in' link", () => {
      cy.get("[data-cy=sign-in-link]").should(
        "contain.text",
        "You must be signed in"
      );
    });
  });

  describe("authenticated user", () => {
    before(() => {
      cy.login();
      cy.visit("/admin/my-new-article");
    });

    it("is expected to see post title", () => {
      cy.get("[data-cy=post-title]").should("contain.text", "My new article");
    });

    it("is expected to see post id", () => {
      cy.get("[data-cy=post-id]").should("contain.text", "ID: my-new-article");
    });

    it("is expected to see post content", () => {
      cy.get("[data-cy=post-content]").should("be.visible");
    });

    it("is expected to see published checkbox", () => {
      cy.get("[data-cy=post-published-checkbox]").should(
        "contain.text",
        "Published"
      );
    });

    it("is expected to see Save Changes button", () => {
      cy.get("[data-cy=post-save-btn]").should("contain.text", "Save Changes");
    });

    it("is expected to see Tools header", () => {
      cy.get("[data-cy=post-tools-header]").should("contain.text", "Tools");
    });

    it("is expected to see Preview button", () => {
      cy.get("[data-cy=post-preview-btn]").should("contain.text", "Preview");
    });

    it("is expected to see Live view button", () => {
      cy.get("[data-cy=post-live-view-btn]").should(
        "contain.text",
        "Live view"
      );
    });

    describe("can click Preview button", () => {
      before(() => {
        cy.get("[data-cy=post-preview-btn]").click();
      });

      it("is expected to see post preview", () => {
        cy.get("[data-cy=post-card]").should("contain.text", "hello world!");
      });

      it("is expected to see Edit button", () => {
        cy.get("[data-cy=post-preview-btn]").should("contain.text", "Edit");
      });

      it("is expected to not see Save Changes button", () => {
        cy.get("[data-cy=post-save-btn]").should("not.be.visible");
      });

      describe("can go back to edit mode", () => {
        before(() => {
          cy.get("[data-cy=post-preview-btn]").click();
        });

        it("is expected to see post content text area", () => {
          cy.get("[data-cy=post-content]").should("be.visible");
        });

        it("is expected to see Preview button", () => {
          cy.get("[data-cy=post-preview-btn]").should("contain.text", "Preview");
        });

        it("is expected to see Save Changes button", () => {
          cy.get("[data-cy=post-save-btn]").should("be.visible");
        });
      });
    });

    after(() => {
      cy.visit("/admin");
      cy.logout();
    });
  });
});

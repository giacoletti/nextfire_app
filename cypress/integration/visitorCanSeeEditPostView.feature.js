describe("A visitor navigating /admin/:anything", () => {
  before(() => {
    cy.visit("/admin/whatever");
  });

  it("is expected to see 'Edit Post' header", () => {
    cy.get("[data-cy=edit-header]").should("contain.text", "Edit Post");
  });
});

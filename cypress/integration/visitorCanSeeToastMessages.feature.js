describe("A visitor can see toast messages when a button is clicked", () => {
  before(() => {
    cy.visit("/");
    cy.get("[data-cy=toast-button]").click();
  });

  it("is expected to see toast message", () => {
    cy.get(".go2072408551").should("contain.text", "Hello toast!");
  });
});

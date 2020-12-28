describe("Calculates a cooper test result successfully", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-cy="input-distance"]').type("1000");
    cy.get('[data-cy="input-gender"]').select("female");
    cy.get('[data-cy="input-age"]').type("23");
    cy.get('[data-cy="btn-result"]').click();
  });
  it("displays a cooper test message", () => {
    cy.get('[data-cy="cooper-message"]').should(
      "contain",
      "23 years old female running 1000 meters."
    );
  });
  it("displays a cooper test result", () => {
    cy.get('[data-cy="cooper-result"]').should("contain", "Result: Poor");
  });
});

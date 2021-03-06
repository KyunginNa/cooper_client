describe("User can save the cooper result", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth/sign_in",
      response: "fixture:successful_login.json",
      headers: {
        uid: "user@test.com",
      },
    });
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/performance_data",
      response: [],
    });
    cy.visit("/");
    cy.get("[data-cy='btn-login']").click();
    cy.get("[data-cy='input-email']").type("user@test.com");
    cy.get("[data-cy='input-password']").type("password");
    cy.get("[data-cy='btn-login-submit']").click();
  });

  it("successfully", () => {
    cy.get('[data-cy="input-distance"]').type("1000");
    cy.get('[data-cy="input-gender"]').select("female");
    cy.get('[data-cy="input-age"]').type("23");
    cy.get('[data-cy="btn-result"]').click();
    cy.get('[data-cy="btn-save"]').click();
    cy.get('[data-cy="save-message"]').should(
      "contain",
      "Your result was saved!"
    );
  });

  it("can save two different results", () => {
    cy.get('[data-cy="input-distance"]').type("1000");
    cy.get('[data-cy="input-gender"]').select("female");
    cy.get('[data-cy="input-age"]').type("23");
    cy.get('[data-cy="btn-result"]').click();
    cy.get('[data-cy="btn-save"]').click();
    cy.get('[data-cy="save-message"]').should(
      "contain",
      "Your result was saved!"
    );
    cy.get('[data-cy="input-distance"]').clear().type("2000");
    cy.get('[data-cy="btn-result"]').click();
    cy.get('[data-cy="btn-save"]').click();
    cy.get('[data-cy="save-message"]').should(
      "contain",
      "Your result was saved!"
    );
  });
});

describe("User can see past results", () => {
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
      method: "GET",
      url: "http://localhost:3000/api/performance_data",
      response: "fixture:performance_data_index.json",
    });
    cy.visit("/");
    cy.get("[data-cy='btn-login']").click();
    cy.get("[data-cy='input-email']").type("user@test.com");
    cy.get("[data-cy='input-password']").type("password");
    cy.get("[data-cy='btn-login-submit']").click();
  });
  it("successfully", () => {
    cy.get("[data-cy='btn-show-index']").click();
    cy.get("[data-cy='doughnut-graph']").should("be.visible");
    cy.get("[data-cy='line-graph']").should("be.visible");
  });
});

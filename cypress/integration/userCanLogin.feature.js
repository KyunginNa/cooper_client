describe("User can log in", () => {
  beforeEach(() => {
    cy.server();
    cy.visit("/");
  });
  it("successfully with valid credentials", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth/sign_in",
      response: "fixture:successful_login",
      headers: {
        uid: "user@test.com",
      },
    });
    cy.get("[data-cy='input-email']").type("user@test.com");
    cy.get("[data-cy='input-password']").type("password");
    cy.get("[data-cy='btn-login']").click();
    cy.get("[data-cy='login-message']").should(
      "contain",
      "Hello, user@test.com!"
    );
  });
  it("gets an error with invalid credentials", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth/sign_in",
      status: 401,
      response: {
        success: false,
        errors: ["Invalid login credentials. Please try again."],
      },
    });
    cy.get("[data-cy='input-email']").type("user@test.com");
    cy.get("[data-cy='input-password']").type("wrong_password");
    cy.get("[data-cy='btn-login']").click();
    cy.get("[data-cy='login-message']").should(
      "contain",
      "Invalid credentials. Please confirm your email and password."
    );
  });
});

export class Login {
  navigate() {
    cy.visit("https://www.edu.goit.global/account/login");
  }

  authentication(email, password) {
    cy.signIn(email, password);
  }

  checkUrl() {
    cy.url().should("eq", "https://www.edu.goit.global/account/login");
  }
}

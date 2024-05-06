import { header } from "../header/header";
import { loginPage } from "./loginPage";

export default {
  assertPageContent(page) {
    loginPage.elements.title().should("have.text", page.title);
    loginPage.elements.or().should("have.text", page.or);
    loginPage.elements
      .email()
      .invoke("attr", "placeholder")
      .should("eq", page.email);
    loginPage.elements
      .password()
      .invoke("attr", "placeholder")
      .should("eq", page.password);
    loginPage.elements
      .forgotPassword()
      .should("have.text", page.forgotPassword);
    loginPage.elements
      .loginButton()
      .filter(":visible")
      .should("have.text", page.login);
    loginPage.elements
      .dontHaveAccount()
      .should("have.text", page.dontHaveAccount);
  },

  assertIncorrectLogin(text) {
    loginPage.elements.incorrectPassword().and("have.text", text);
  },

  assertCorrectLogin() {
    cy.wait(6000).then(() => {
      cy.url().then((url) => {
        expect(url).to.be.eq(Cypress.env("baseUrl"));
      });
    });
  },
};

require("@cypress/xpath");

import { loginPageLocators } from "./loginPageLocators";

class LoginPage {
  elements = {
    title: () => {
      return cy.xpath(loginPageLocators.title);
    },

    or: () => {
      return cy.xpath(loginPageLocators.or);
    },

    email: () => {
      return cy.xpath(loginPageLocators.email);
    },

    password: () => {
      return cy.xpath(loginPageLocators.password);
    },

    forgotPassword: () => {
      return cy.xpath(loginPageLocators.forgotPassword);
    },

    loginButton: () => {
      return cy.xpath(loginPageLocators.loginButtonText);
    },

    dontHaveAccount: () => {
      return cy.xpath(loginPageLocators.dontHaveAccount);
    },

    incorrectPassword: () => {
      return cy.xpath(loginPageLocators.incorrectPassword);
    },
  };

  enterEmail(email) {
    this.elements.email().clear().type(email);
  }

  enterPassword(password) {
    this.elements.password().clear().type(password);
  }

  clickOnLoginButton() {
    this.elements.loginButton().click();
  }
}

export const loginPage = new LoginPage();

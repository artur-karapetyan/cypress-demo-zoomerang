/// <reference types="cypress" />

import { homePage } from "../POM/homePage/homePage";
import { loginPage } from "../POM/loginPage/loginPage";
import loginPageAssertionHelpers from "../POM/loginPage/loginPageAssertionHelpers";

describe("Login Page Tests", () => {
  beforeEach(() => {
    cy.viewport(1800, 1000);
    cy.visit("");
  });

  describe("Verify Login Page Content", () => {
    it("Login Page", () => {
      cy.fixture("login").then((login) => {
        cy.wrap(login.pageElements).then((page) => {
          homePage.navigateToLoginPage();

          loginPageAssertionHelpers.assertPageContent(page);
        });
      });
    });
  });

  describe("Verify Login page required fields", () => {
    it("[NEG] Incorrect login with invalid email", () => {
      homePage.navigateToLoginPage();

      cy.fixture("login").then((login) => {
        loginPage.enterEmail(login.invalidEmail.email);
        loginPage.enterPassword(Cypress.env("password"));
        loginPage.clickOnLoginButton();

        loginPageAssertionHelpers.assertIncorrectLogin(
          login.incorrectLogin.text
        );
      });
    });

    it("[POS] Login with valid credentials", () => {
      homePage.navigateToLoginPage();

      loginPage.enterEmail(Cypress.env("email"));
      loginPage.enterPassword(Cypress.env("password"));
      loginPage.clickOnLoginButton();

      loginPageAssertionHelpers.assertCorrectLogin();
    });
  });
});

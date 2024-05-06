import { headerLocators } from "./headerLocators";

class Header {
  elements = {
    homeButton: () => {
      return cy.get(headerLocators.homeButton);
    },

    loginButton: () => {
      return cy.get(headerLocators.loginButton);
    },
  };

  clickHomeButton() {
    this.elements.homeButton().click();
  }

  clickLoginButton() {
    this.elements.loginButton().filter(":visible").click();
  }
}

export const header = new Header();

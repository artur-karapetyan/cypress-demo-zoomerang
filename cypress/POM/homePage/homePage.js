import { header } from "../header/header";

class HomePage {
  navigateToLoginPage() {
    header.clickLoginButton();
  }
}

export const homePage = new HomePage();

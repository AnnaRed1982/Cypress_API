import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";

const LoginPage = new Login();
const Home = new HomePage();

describe("login test", () => {
  it("login user", () => {
    // cy.visit("https://www.edu.goit.global/account/login");
    LoginPage.navigate();

    // cy.signIn("user888@gmail.com", "1234567890");
    LoginPage.authentication("user888@gmail.com", "1234567890");

    // cy.get("#open-navigation-menu-mobile").click();
    Home.openNavigationMenuMobile();

    // cy.contains("Log out").click();
    Home.logOut();

    // cy.url().should("eq", "https://www.edu.goit.global/account/login");
    LoginPage.checkUrl();
  });

  it("login qa", () => {
    LoginPage.navigate();
    LoginPage.authentication("testowyqa@qa.team", "QA!automation-1");
    Home.openNavigationMenuMobile();
    Home.logOut();
    LoginPage.checkUrl();
  });
});

// cypress/support/page_objects/NavPage.js
class NavPage {
    // Elements
    get signinLink() {
      return cy.get('nav a[href="/signin"]');
    }
  
    get profileLink() {
      return cy.get('nav a[href^="/profiles/"]');
    }
  
    // Actions
    clickSigninLink() {
      this.signinLink.click();
    }
  
    clickProfileLink() {
      this.profileLink.click();
    }
  
    typeUsername(username) {
      cy.get('input[name="username"]').type(username);
    }
  
    typePassword(password) {
      cy.get('input[name="password"]').type(password);
    }
  
    clickSignin() {
      cy.get('button[type="submit"]').click();
    }
  }
  
  export default new NavPage();
  
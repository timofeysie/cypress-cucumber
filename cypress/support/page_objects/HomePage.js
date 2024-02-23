class NavPage {
    // Elements
    get signinLink() {
        return cy.get('nav a[href="/signin"]');
    }
    // Actions
    clickSigninLink() {
        this.signinLink.click();
    }
}

export default new NavPage();

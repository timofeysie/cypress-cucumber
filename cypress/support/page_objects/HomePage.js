class NavPage {
    // Elements
    get signinLink() {
        return cy.get('nav a[href="/signin"]');
    }

    get profileLink() {
        return cy.get('nav a[href^="/profiles/"]');
    }

    elements = {
        usernameInput: () => cy.get('#username'),
        passwordInput: () => cy.get('#password'),
        signinBtn: () => cy.get('form button[type="submit"]')
    }

    // Actions
    clickSigninLink() {
        this.signinLink.click();
    }

    clickProfileLink() {
        this.profileLink.click();
    }

    typeUsername(username) {
        this.elements.usernameInput().type(username, { force: true });
    }

    typePassword(password) {
        this.elements.passwordInput().type(password, { force: true });
    }

    clickSignin() {
        this.elements.signinBtn().click();
    }
}

export default new NavPage();

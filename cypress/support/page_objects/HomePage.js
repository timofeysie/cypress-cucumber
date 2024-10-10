class HomePage {
  // Elements
  get signinLink() {
    return cy.get('nav a[href="/signin"]');
  }

  get profileLink() {
    return cy.get('nav a[href^="/profiles/"]');
  }

  // profile form elements
  get editProfileForm() {
    return cy.get("form");
  }

  get bioTextarea() {
    return cy.get('textarea[name="content"]');
  }

  get changeImageButton() {
    return cy.get('label[for="image-upload"]');
  }

  get imageUploadInput() {
    return cy.get("input#image-upload");
  }

  get cancelButton() {
    return cy.get('button:contains("cancel")');
  }

  get saveButton() {
    return cy.get('button[type="submit"]');
  }

  elements = {
    usernameInput: () => cy.get("#username"),
    passwordInput: () => cy.get("#password"),
    signinBtn: () => cy.get('form button[type="submit"]'),
  };

  // Actions
  clickSigninLink() {
    this.signinLink.click();
  }

  clickProfileLink() {
    this.profileLink.click();
  }

  logProfileLink() {
    this.profileLink.then((profileLink) => {});
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

  errorMessageLogin() {
    return cy.get(".error-message"); // Adjust the selector based on your application's HTML
  }
}

export default new HomePage();

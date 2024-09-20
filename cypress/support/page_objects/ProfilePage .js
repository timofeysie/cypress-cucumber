class ProfilePage {
    
  // Elements
  get kebabMenu() {
    return cy.get(".MoreDropdown_Absolute__yi6pO");
  }

  get editProfileLink() {
    return cy.get('a[aria-label="edit-profile"]');
  }

  // Actions
  clickKebabMenu() {
    this.kebabMenu.click();
  }

  clickEditProfile() {
    this.editProfileLink.click();
  }
}

export default new ProfilePage();

class ProfilePage {
    
  // Elements
  get kebabMenu() {
    return cy.get('[class*="MoreDropdown_Absolute__"]').find('i.fa-ellipsis-v');
  }

  get editProfileLink() {
    return cy.contains('a', 'Edit profile');
  }

  get editProfileForm() {
    return cy.get('form[aria-label="Edit profile form"]');
  }

  // Actions
  clickKebabMenu() {
    this.kebabMenu.click();
    cy.get('.dropdown-menu').should('be.visible');
  }

  clickEditProfileLink() {
    this.kebabMenu.click({ force: true });
    cy.wait(500);
    this.editProfileLink.click({ force: true });
  }

  isOnEditProfilePage() {
    this.editProfileForm.should('be.visible');
  }
  
  updateBio(newBio) {
    this.bioTextarea.clear().type(newBio);
  }

  uploadProfileImage(imagePath) {
    this.imageUploadInput.selectFile(imagePath, { force: true });
  }

  clickSaveButton() {
    this.saveButton.click();
  }

  clickCancelButton() {
    this.cancelButton.click();
  }

}

export default new ProfilePage();

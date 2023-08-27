class NavPage {
    // Elements
    get postsLink() {
        return cy.get('nav a[href="/"]');
    }
    get usersLink() {
        return cy.get('nav a[href="/users"]');
    }
    get notificationsLink() {
        return cy.get('nav a[href="/notifications"]');
    }
    get refreshPostsButton() {
        return cy.get("nav button.button").eq(0);
    }
    get refreshNotificationsButton() {
        return cy.get("nav button.button").eq(1);
    }
    // Actions
    clickPostsLink() {
        this.postsLink.click();
    }
    clickUsersLink() {
        this.usersLink.click();
    }
    clickNotificationsLink() {
        this.notificationsLink.click();
    }
    clickRefreshPostsButton() {
        this.refreshPostsButton.click();
    }
    clickRefreshNotificationsButton() {
        this.refreshNotificationsButton.click();
    }
}

export default new NavPage();

# Moments App Automation

This project is an attempt to automate some e2e testing for the purpose of speeding up my assessing of student projects from the Code Institute.

The deployed project we will be testing is [live here](https://unified-moments.herokuapp.com/).  The frontend react code is [here](https://github.com/Code-Institute-Solutions/moments/tree/master/src). The source code for the backend Django API [is here](https://github.com/Code-Institute-Solutions/drf-api).

I have my version own version which might be helpful also [deployed here](https://dot-one-26b272efdbb8.herokuapp.com/)

The Frontend [GitHub project](https://github.com/timofeysie/moments) for this and the [backend GitHub project](https://github.com/timofeysie/drf-two) might also be needed if I want to change anything for testing locally without having to run the student projects.

It is of course the frontend code where will will spend most of our time making the page objects and then assembling the user stories to test functionality.

I will focus on sign-in first just so that I don't have to create multiple users on the Code Institutes server.  I can always create a user myself for a student project then enter the creds in the test cases so that the other functionality can then be test automatically.

## Testing the login

The basic flow is:

- navigate to the login page
- choose the login link
- find the input elements
- enter credentials
- submit form
- confirm that the user has been redirected to the home page

The [NavBar](https://github.com/Code-Institute-Solutions/moments/blob/master/src/components/NavBar.js) then is the starting point.

### navigate to the home page

The site to test URL will be in the [cypress.config.js](./cypress.config.js) file.

The user name and password go in the navigation feature file: [cypress\e2e\features\navigation.feature](./cypress\e2e\features\navigation.feature).  This has the Gherkin Cucumber "executable spec" steps described above.

All that's left to do then is run the tests:

```shell
npx cypress open
```

Choose E2E testing, "Start E2E Testing in Chrome" and then from the spec from the list.

I have already written the login steps which are working on both my version of the moments app as well as the official version.

Currently this feature is called navigation.  I think I will copy this and create the login feature with this kind of user story:

```feature
Feature: Login

  Scenario: Navigating to sign in page
    Given I am on the HomePage
    When I click the "Sign in" link
    And I enter the username "<user-name>"
    And I enter the password "<password>"
    And I click on the sign in button
    Then I will be signed in
```

### User profile

```js
<NavLink
    className={styles.NavLink}
    to={`/profiles/${currentUser?.profile_id}`}
    >
    <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
</NavLink>
```

In the current project I am assessing, the profile link looks a little different:

```js
<NavLink
    className={`${styles.NavLink} ${styles.Hello}`}
    to={`/profiles/${currentUser?.profile_id}`}>
    <ToolTip
        id="tt-hello"
        title="View or Edit your Profile"
        placement="top">
    <i className={`${styles.Icon} fa-regular fa-circle-user`}></i>Hello {currentUser?.username}
    </ToolTip>
</NavLink>
```

In the cypress\support\page_objects\HomePage.js add a getter for the profiles link, and then an action to click that.

```js
    get profileLink() {
        return cy.get('nav a[to^="/profiles/"]');
    }

    ...

    clickProfileLink() {
        this.profileLink.click();
    }
```

Then in cypress\support\step_definitions\profile.steps.js we can create a neat reusable When statement like this:

```js
When("I click the {string} link", (linkText) => {
  if (linkText === "Sign in") {
    console.log('click sign in')
    navPage.clickSigninLink();
  } else if (linkText === "Profile") {
    console.log('click profile link')
    navPage.clickProfileLink();
  }
});
```

In the cypress\e2e\features\profile.feature you can see that the function is used by passing a string in the Gherkin syntax like this:

```txt
Feature: Profile

  Scenario: I go to the profile page
    Given I am on the HomePage
    When I click the "Sign in" link
    And I enter the username "<username>"
    And I enter the password "<password>"
    And I click on the sign in button
    When I click the "Profile" link
    Then I will be on the profile page
```

#### The edit user menu

There is a kebab menu on the user profile page.  It renders ike this:

```html
<div class="ml-auto px-3 MoreDropdown_Absolute__yi6pO dropleft">
  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
</div>
```

We have to target the outer div here despite the strange class names.  The inner i tag would be nice but doesn't work, and this is actually an interesting point here that I would like to understand.

That menu is defined in the code in the  file:

```js
const ThreeDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));
...
export const ProfileEditDropdown = ({ id }) => {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
        >
          <i className="fas fa-edit" /> edit profile
        </Dropdown.Item>
        ...
```

You can see how the ThreeDots component is nested using the ```<Dropdown.Toggle as={ThreeDots} />``` which is a kind of feature that I haven't used as a developer before except for this project.

In any case, we use the outer div class to perform the click.  I'm not sure what "__yi6pO" means and if it will be consistent in the future.  It is the result of the ```${styles.Absolute}```  which is another feature I am not very familiar with but will be reading up on.

CLicking on this opens a menu that should have an 'edit profile' item which we want to click on:

```html
<a aria-label="edit-profile" href="#" class="dropdown-item" role="button">
  <i class="fas fa-edit" aria-hidden="true"></i> 
    edit profile
  </a>
```

Lets create the page objects and actions to perform this function.

The cypress\support\step_definitions\common.steps.js currently looks like this:

```js
When("I open the kebab menu", () => {
  ProfilePage.clickKebabMenu();
});

Then("I click the edit profile link", () => {
  ProfilePage.clickEditProfile();
});
```

And the cypress\e2e\features\profile.feature in gherkin syntax we finally use these steps:

```feature
Feature: Profile

  Scenario: I go to the profile page
    Given I am on the HomePage
    When I click the "Sign in" link
    And I enter the username "<username>"
    And I enter the password "<password>"
    And I click on the sign in button
    Then I will be signed in
    When I click the "Profile" link
    Then I will be on the profile page
```

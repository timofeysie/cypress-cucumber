# Cucumbers in Clouds

Record a test run to Cloud following the [official instructions](https://docs.cypress.io/guides/cloud/account-management/projects#Identification).

## Initial set up

Add a record key into your Cypress test.  The site will give you a key when you sign up.

cypress.config.js:

```js
projectId: "<some-code>"
```

The code I saw the first time was mt9tss.

Then with that code set, run this command given with an encrypted version of the key:

```sh
 npx cypress run --record --key 33bed332-aca6-49af-9bc9-d738287acaa7
```

The id becomes a record key is a GUID that looks like this: f4466038-70c2-4688-9ed9-106bf013cd73

The run will then appear in the console website:

https://cloud.cypress.io/projects/mt9tss/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&tagsMatch=ANY&timeRange=%7B%22startDate%22%3A%222023-05-13%22%2C%22endDate%22%3A%222024-05-12%22%7D

Notice my key in there again.

## Integrate a CI provider

Features include:

- time-travel debugging in CI
- Increase speed and conserve resources in CI runs
- Gain immediate failure feedback
- Get the entire stack trace of failed tests
- Get notified on test progress in real time directly in Slack/Teams channels
- Create and review issues in Jira from the Cypress UI
- See test results as commit checks and pull/merge request comments in a source control provider
- Use Test Replay to pause, play, rewind and inspect the application during recorded test runs in CI.
- Pinpoint the root cause of failures by inspecting the DOM, network events, and console logs
- Effortlessly recreate failures and eliminate the need to reproduce CI issues locally

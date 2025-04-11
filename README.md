# Playwright E2E Tests – the-internet.herokuapp.com

This project contains a set of end-to-end tests written in [Playwright](https://playwright.dev), targeting the public test site [The Internet](https://the-internet.herokuapp.com/). The goal is to demonstrate practical skills in automating user interfaces using modern testing tools.

## Test Scenarios

The following functionalities are covered:

- Login (valid and invalid credentials)
- File upload
- Interactions with dynamic elements
- Text and element validation
- Working with checkboxes and dropdowns

Each test includes proper assertions, screenshots on failure, and an HTML report.

## Getting Started

### 1. Install dependencies

`npm install`

### 2. Run the tests

`npx playwright test`

### 3. View the HTML report

`npx playwright show-report`

## Requirements

- Node.js 18+
- NPM
- A desktop environment (if running tests in headed mode)

## Debugging

To run tests step-by-step for easier debugging, use:

`npx playwright test --debug`

Or run in headed mode with slow motion:

`npx playwright test --headed --slow-mo=1000`

## Screenshots & Reports

Failing tests will automatically generate screenshots in the test-results/ directory.

An interactive HTML report will be saved in playwright-report/ and can be opened with:

`npx playwright show-report`

## Why Playwright?

- Built-in test runner
- Easy debugging tools (codegen, trace viewer)
- Cross-browser support
- Great developer experience

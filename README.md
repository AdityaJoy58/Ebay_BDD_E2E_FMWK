# Protractor-Cucumber Framework

To do an e2e(End to End) test of a non-angular application we can make use of this 
Protractor-Cucumber Framework, which will support both angular and non-angular applications.

Note: Have the Latest Browsers installed else there will be a browser conflicts and may not run

# Setup Steps

Checkout the fresh code on the physical machine, do the following:

```
$ npm install
```

This will do the following:
- Install build-time dependencies (`npm install`).

Once it is done, now the basic setup is done to run sample tests.

```
Gulp is integrated to work with this project. So, you can go ahead by using the below command
1) $ gulp execute

```

HTML reports:

HTML report generation is enabled by default. It's default location is /reports/bdd-e2e-report.html.

Framework Structure:
 We are using BDD Framework with Page object model approach where it will be easy to distinguish all the files used in a structured way,

```
├── tests
│   ├── e2e
│   │   ├── common
│   │   │   ├── settings.js
│   │   │   └── ...
│   │   ├── featureFiles
│   │   │   ├── EBAY
│   │   │   │   ├── <Feature_Name>.feature
│   │   │   │   ├── <Feature_Name>.feature
│   │   │   │   ├── <Feature_Name>.feature
│   │   │   │   └── ...
│   │   │   │   └── step_definitions
│   │   │   │       ├── <Step_definition>_steps.js
│   │   │   │       ├── <Step_definition>_steps.js
│   │   │   │       ├── <Step_definition>_steps.js
│   │   │   │       └── ...
│   │   ├── pages
│   │   │   ├── homePage.js
│   │   │   ├── searchResultsPage.js
│   │   │   └── ...
│   │   └── support
│   │   │   ├── env.js
│   │   │   └── ...
├── package.json
├── gulpConfig.js
├── gulpfile.babel.js
├── conf.js
├── README.md
```

## Additions:

   Supported Browsers: Chrome, Firefox, IE
   Multicapabilities: Running the same test in specified Browsers at a time.
   Parallel Execution: Parallel Executions. Note: Test concurrency is done at the file level. Individual tests/steps in a feature file will not run concurrently.


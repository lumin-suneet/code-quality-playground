# Code Quality Playground

An example repo to demonstrate various aspects of code quality tooling:

-   Commit linting in the terminal using git hooks and conventional commit syntax.
-   unit test and front-end tests with vitest and @testing-library/react.
-   automated test codegen, e2e/integration tests and cross browser testing with playwright (to be completed).

## Run Locally

Clone the project

```bash
  git clone https://github.com/lumin-suneet/commit-linting-example.git
```

Go to the project directory

```bash
  cd commit-linting-example
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn dev
```

## Commit Linting Usage

To test the commit-linting make an edit within the repo and commit the changes using a very relaxed commit message e.g.:

```bash
commiting changes to these files

```

Your commit message should fail and the terminal will display the reasons why. The error message also displays a link to the conventional commit syntax docs as well as some instructions on how to create a commit message using a cli tool which is executed by issuing `yarn commit`.

You can retry creating your commit in two ways:

1. Manually as you usually do, but ensuring that your message is compliant with conventional-commit syntax.
2. Issuing `yarn commit` and following the CLI steps.

/** @type {import('@commitlint/types').UserConfig} */

module.exports = {
    extends: ['@commitlint/config-conventional'],
    helpUrl:
        'This repo follows conventional-commit syntax https://www.conventionalcommits.org/en/v1.0.0/ . Please either  format your commit messages to match or run `yarn commit` to access a cli which will step you through constructing a compliant commit message.',
}

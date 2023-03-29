module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'standard-with-typescript',
        'prettier',
    ],
    ignorePatterns: ['vite.config.ts', 'src/vite-env.d.ts'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['tsconfig.json', 'tsconfig.node.json'],
    },
    plugins: ['react'],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}

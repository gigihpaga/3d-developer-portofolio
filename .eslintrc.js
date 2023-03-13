module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        // By extending from a plugin config, we can get recommended rules without having to add them manually.
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:jsx-a11y/recommended',
        // 'plugin:@typescript-eslint/recommended',
        // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
        // Make sure it's always the last config, so it gets the chance to override other configs.
        'eslint-config-prettier',
        'prettier',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        // ecmaVersion: 12,
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    settings: {
        react: {
            // Tells eslint-plugin-react to automatically detect the version of React to use.
            version: 'detect',
        },
        // Tells eslint how to resolve imports
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    rules: {
        'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }], // mySetup
        'react/no-unescaped-entities': 0,
        'eslintreact/no-danger': 0,
        'react/jsx-max-props-per-line': 0,
        'react/jsx-first-prop-new-line': 0,
        'no-console': 0,
        'jsx-a11y/label-has-associated-control': 0,
        'no-nested-ternary': 0,
        'consistent-return': 0,
        'no-alert': 0,
        'react/jsx-no-constructed-context-values': 0,
        'import/extensions': 0,
        'react/prop-types': 0,
        'linebreak-style': 0,
        'react/state-in-constructor': 0,
        'import/prefer-default-export': 0,
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'max-len': [2, 1050],
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
                maxEOF: 1,
            },
        ],
        'no-underscore-dangle': [
            'error',
            {
                allow: ['_d', '_dh', '_h', '_id', '_m', '_n', '_t', '_text'],
            },
        ],
        'object-curly-newline': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-one-expression-per-line': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/alt-text': 0,
        'jsx-a11y/no-autofocus': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'react/no-array-index-key': 0,
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['to', 'hrefLeft', 'hrefRight'],
                aspects: ['noHref', 'invalidHref', 'preferButton'],
            },
        ],
    },
};

module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'next/core-web-vitals',
        'plugin:prettier/recommended',
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'plugins': [
        'react',
        '@typescript-eslint',
    ],
    'rules': {
        'indent': [
            'error',
            4,
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'quotes': [
            'error',
            'single',
        ],
        'semi': [
            'error',
            'never',
        ],
        'comma-dangle': ['warn', 'always-multiline'],

        // Prettier
        'prettier/prettier': 'error',

        // Best practices
        curly: [2, 'multi-line'],
        'no-else-return': 2,
        'no-extra-bind': 2,
        'no-return-assign': 0,

        // Variables
        'no-var': 1,

        // Codestyle
        'object-curly-spacing': [2, 'always'],

        // React 
        'jsx-quotes': [2, 'prefer-double'],
        'react/jsx-key': 2,
        'react/jsx-sort-props': 0,
        'react/react-in-jsx-scope': 0,
    },
}

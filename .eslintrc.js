module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:prettier/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "tsx": true
        },
        "project": './tsconfig.json',
        "sourceType": 'module',
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
         // NOTE: conflicts with prettier
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/semi": "off",
        "@typescript-eslint/comma-dangle": "off",
        "react/jsx-indent": 0,
        "react/jsx-indent-props": 0,
        "@typescript-eslint/no-use-before-define": [
            "error",
            {
              // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
              functions: false,
              classes: false,
              variables: false,
            },
          ],
        "no-param-reassign": [
        "error",
        { props: true, ignorePropertyModificationsForRegex: ["^draft$"] },
        ],
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};

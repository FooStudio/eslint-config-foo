/**
 * Created by mendieta on 11/23/15.
 */

module.export = {
    "parser": "bable-lint",
    "extends": "eslint:recommended",
    "ecmaFeatures": {
        "jsx": true,
        "modules": true,
        "arrowFunctions": true,
        "blockBindings": true,
        "defaultParams": true,
        "forOf": true,
        "templateStrings": true,
        "generators": false
    },
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "amd": true
    },
    "setting": {
        "ecmascript": 6,
        "jsx": true
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "strict": 0,
        "no-var": 2,                                                                // require let or const instead of var (off by default)
        "eol-last": 2,                                                              // enforce newline at the end of file, with no multiple empty lines
        "quotes": [2, "prefer-double", "avoid-escape"],                             // specify whether double or single quotes should be used
        "no-multiple-empty-lines": 2,                                               // disallow multiple empty lines (off by default)
        "camelcase": 1,                                                             // require camel case names
        "semi": 2,                                                                  // require or disallow use of semicolons instead of ASI
        "no-unused-vars": 2,                                                        // disallow declaration of variables that are not used in the code
        "require-jsdoc": 1,
        "valid-jsdoc": [2, {requireReturn: false, prefer: {returns: 'return'}}],    // Ensure JSDoc comments are valid (off by default)

        ////////// REACT/JSX //////////
        "jsx-quotes": [2, "prefer-double"],
        'react/display-name': 0,
        'react/jsx-boolean-value': 2,
        'react/jsx-closing-bracket-location': [2, 'props-aligned'],
        'react/jsx-curly-spacing': [2, 'never'],
        'react/jsx-indent-props': [2, 'tab'],
        'react/jsx-max-props-per-line': 0,
        'react/jsx-no-duplicate-props': [2, {ignoreCase: true}],
        'react/jsx-no-literals': 0,
        'react/jsx-no-undef': 2,
        'react/jsx-sort-prop-types': 0,
        'react/jsx-sort-props': 0,
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/no-danger': 0,
        'react/no-did-mount-set-state': 0,
        'react/no-did-update-set-state': 2,
        'react/no-multi-comp': 0,
        'react/no-set-state': 0,
        'react/no-unknown-property': 2,
        'react/prop-types': 2,
        'react/react-in-jsx-scope': 2,
        'react/require-extension': [1, {extensions: ['.js', '.jsx']}],
        'react/self-closing-comp': 2,
        'react/sort-comp': 0,
        'react/wrap-multilines': 2
    }
}
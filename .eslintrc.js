module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: [
    'standard',
    'vue',
  ],
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
    quotes: ['off', 'single'],
    'vue/html-self-closing': 'off',
    'space-before-function-paren': [
      'error',
      'never',
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
    'vue/name-property-casing': 'off',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'no-console': 'off',
    'no-empty': 'off',
    camelcase: 'off',
    'no-unused-vars': 'off',
    'vue/no-unused-components': [
      'error',
      {
        ignoreWhenBindingPresent: false,
      },
    ],
    'prefer-const': 'off',
    'unicorn/prefer-includes': 'off',
    'vue/require-component-is': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/no-v-html': 'off',
    'nuxt/no-globals-in-created': 'off',
    'vue/no-lone-template': 'off',
  },
}

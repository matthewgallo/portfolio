/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order', 'stylelint-plugin-logical-css'],
  rules: {
    // CSS Modules class names are camelCase so they read as `styles.fooBar` in TSX.
    'selector-class-pattern': ['^[a-z][a-zA-Z0-9]*$', { message: (name) => `Expected class "${name}" to be camelCase` }],
    'keyframes-name-pattern': ['^[a-z][a-zA-Z0-9]*$', { message: (name) => `Expected keyframes "${name}" to be camelCase` }],

    // Declarations are kept in alphabetical order.
    'order/properties-alphabetical-order': true,

    // Prefer logical properties/keywords (inline-size, inset-inline-start, text-align: start, …).
    'logical-css/require-logical-properties': true,
    'logical-css/require-logical-keywords': [true, { ignore: ['caption-side', 'offset-anchor', 'offset-position'] }],
  },
};

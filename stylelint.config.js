module.exports = {
  //extends: ["stylelint-config-standard"],
  //plugins: ["stylelint-prettier"],
  "extends": "stylelint-config-recommended",
  rules: {
    "no-empty-source": null,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "extends"
        ],
      },
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
    "no-empty-source": null,
    "declaration-empty-line-before": null,
    "length-zero-no-unit": null,
    "rule-empty-line-before": null,
    "at-rule-no-unknown": null,
    "no-invalid-double-slash-comments": null,
    "prettier.stylelintIntegration": true,
    "block-no-empty": null,
    "unit-whitelist": ["em", "rem", "s"],
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
};

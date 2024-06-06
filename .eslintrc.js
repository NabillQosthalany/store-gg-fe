module.exports = {
  env: {
    browser: true,
    es2024: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "@typescript-eslint/indent": ["error", 4],
    indent: "off",
    "@typescript-eslint/indent": "error",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/react-in-jsx-scope": "off",
    "jsx/jsx-props-no-spreading": "off",
    "jsx-a11y/anchor-is-valid": "off",
    indent: "off",
    "@typescript-eslint/indent": "error",
  },
};

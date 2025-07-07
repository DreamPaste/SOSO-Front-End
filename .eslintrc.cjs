// 루트 ESLint configuration
// .eslintrc.cjs
module.exports = {
  root: true,
  extends: ['./tools/eslint-config/index.cjs'],
  plugins: ['@typescript-eslint'],
};

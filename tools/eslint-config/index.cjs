// tools/eslint-config/index.cjs
/** 공통 ESLint 설정 (ESLint v8.x) */

module.exports = {
  /* 상위 .eslintrc에서 병합하도록 root: false (루트만 true) */
  root: false,

  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'next', // Next.js 기본 규칙
    'next/core-web-vitals', // Next.js 14 전용 최적 가이드
    'prettier', // Prettier와 충돌 제거
  ],

  /* TypeScript용 파서 설정(airbnb-typescript 권장) */
  parserOptions: {
    project: ['./tsconfig.json'], // 각 패키지 tsconfig 위치
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off', // Next.js 14+에서 React import 필요 없음
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    '@next/next/no-html-link-for-pages': 'off', // App Router에서는 필요 없음
  },
};

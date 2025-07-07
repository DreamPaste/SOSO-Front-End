// tools/eslint-config/index.cjs
/** 공통 ESLint 설정 (ESLint v8.x) */

module.exports = {
  /* 상위 .eslintrc에서 병합하도록 root: false (루트만 true) */
  root: false,

  extends: [
    'next/core-web-vitals', // Next.js 14 전용 최적 가이드
    'next', // Next.js 기본 규칙
    'airbnb',
    'airbnb-typescript',
    'prettier', // Prettier와 충돌 제거
  ],

  /* TypeScript용 파서 설정(airbnb-typescript 권장) */
  parserOptions: {
    project: ['./tsconfig.json'], // 각 패키지 tsconfig 위치
  },

  rules: {
    'react/react-in-jsx-scope': 'off', // React 17+
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
  },
};

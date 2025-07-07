// apps/web/tailwind.config.js
const tailwindConfig = {
  content: [
    './src/**/*.{ts,tsx}', // 앱 소스
    '../../packages/ui/**/*', // 공유 패키지 예시
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-pretendard)', 'system-ui', 'sans-serif'],
      },
    },
  },
};
export default tailwindConfig;

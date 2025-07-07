/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // 개발 중 오류 방지
  swcMinify: true, // 기본값이긴 하나 명시 추천
  typescript: {
    ignoreBuildErrors: false, // 타입 에러 방지하려면 true도 가능 (비추)
  },
  eslint: {
    ignoreDuringBuilds: false, // 빌드 시 ESLint 에러 무시 여부
  },
  experimental: {
    appDir: true, // app router 사용 시 필수
    serverActions: true, // 필요 시 활성화 (Next.js 14+)
    typedRoutes: true, // 자동 라우트 타입 지원 (Next 15)
    turbo: true, // Turbopack 사용 (아직 불안정하면 false도 가능)
  },
  output: 'standalone', // Vercel, Docker 등에 적합한 설정
};

module.exports = nextConfig;

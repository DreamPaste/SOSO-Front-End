/* apps/web/src/app/layout.tsx */
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

/** Pretendard variable-font (1 파일이면 OK) */
const pretendard = localFont({
  src: '../../../packages/fonts/web/PretendardVariable.woff2',
  variable: '--font-pretendard', // Tailwind에서 쓸 CSS 변수
  display: 'swap', // FOUT 최소화
});

export const metadata: Metadata = {
  title: 'SoSo – Local Biz Helper',
  description: 'Small-business idea platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${pretendard.variable} antialiased`}>
      {/* Tailwind 기본글꼴이 var(--font-pretendard)이므로 class는 1개면 충분 */}
      <body>{children}</body>
    </html>
  );
}

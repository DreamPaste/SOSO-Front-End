'use client';
import React, { useState, useEffect } from 'react';

interface ProgressBarProps {
  startStep: number; // 시작 단계
  endStep: number; // 종료 단계
  totalStep: number; // 전체 단계 수
  durationMs?: number; // 애니메이션 지속시간 (ms), 기본 800ms
}

export default function ProgressBar({
  startStep,
  endStep,
  totalStep,
  durationMs = 500,
}: ProgressBarProps) {
  // 1️⃣ 퍼센트 계산
  const startPercent =
    totalStep > 0
      ? Math.max(0, Math.min(100, (startStep / totalStep) * 100))
      : 0;
  const endPercent =
    totalStep > 0
      ? Math.max(0, Math.min(100, (endStep / totalStep) * 100))
      : 0;

  // 2️⃣ 내부 상태로 관리할 width (%)
  const [width, setWidth] = useState(startPercent);

  useEffect(() => {
    // 3️⃣ 다음 프레임에서 endPercent로 업데이트하여 CSS transition 트리거
    //   ⏩ requestAnimationFrame 사용
    const raf = requestAnimationFrame(() => {
      setWidth(endPercent);
    });
    return () => cancelAnimationFrame(raf);
  }, [startPercent, endPercent]); // startStep 변화 시에도 리셋 후 애니메이션

  return (
    <div className="relative w-full h-2 bg-neutral-0 rounded-full overflow-hidden">
      <div
        className="absolute left-0 top-0 h-full bg-soso-500"
        style={{
          width: `${width}%`,
          // ⚡ 변경된 위치: inline style로 transition 적용
          transition: `width ${durationMs}ms ease-in-out`,
        }}
      />
    </div>
  );
}

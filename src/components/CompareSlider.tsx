"use client";

import { useState, useRef, useCallback, useEffect } from "react";

interface CompareSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspect?: string;
}

export default function CompareSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "原图",
  afterLabel = "AI 生成",
  aspect = "4/5",
}: CompareSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsDragging(true);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      setIsDragging(true);
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  useEffect(() => {
    const handleMove = (clientX: number) => {
      if (isDragging) updatePosition(clientX);
    };
    const handleUp = () => setIsDragging(false);

    window.addEventListener("mousemove", (e) => handleMove(e.clientX));
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchmove", (e) => handleMove(e.touches[0].clientX));
    window.addEventListener("touchend", handleUp);

    return () => {
      window.removeEventListener("mousemove", () => {});
      window.removeEventListener("mouseup", () => {});
      window.removeEventListener("touchmove", () => {});
      window.removeEventListener("touchend", () => {});
    };
  }, [isDragging, updatePosition]);

  return (
    <div
      ref={containerRef}
      className="compare-container"
      style={{ aspectRatio: aspect }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* After image (background, full) */}
      <img
        src={afterSrc}
        alt={afterLabel}
        className="w-full h-full object-cover"
        draggable={false}
      />

      {/* Before image (clipped) */}
      <div className="compare-after" style={{ width: `${position}%` }}>
        <img
          src={beforeSrc}
          alt={beforeLabel}
          className="w-full h-full object-cover"
          style={{ width: containerRef.current ? containerRef.current.offsetWidth : "100vw" }}
          draggable={false}
        />
      </div>

      {/* Slider line */}
      <div className="compare-slider-line" style={{ left: `${position}%` }}>
        <div className="compare-slider-handle">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 10L3 10M3 10L5 8M3 10L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 10L17 10M17 10L15 8M17 10L15 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="compare-label compare-label-before">{beforeLabel}</span>
      <span className="compare-label compare-label-after">{afterLabel}</span>
    </div>
  );
}

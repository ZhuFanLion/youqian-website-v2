"use client";

import FadeIn from "./FadeIn";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 200, suffix: "+", label: "服务客户" },
  { value: 50000, suffix: "+", label: "产出作品" },
  { value: 1000, suffix: "万+", label: "社媒总曝光" },
  { value: 50, suffix: "+", label: "活动场次" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(value * eased));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {value >= 1000 ? (count / 1000).toFixed(0) + "," + String(count % 1000).padStart(3, "0") : count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="py-24 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <FadeIn>
          <div className="section-divider mb-16 md:mb-20" />
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 100}>
              <div className="text-center">
                <div className="heading-xl text-foreground mb-2">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="section-divider mt-16 md:mt-20" />
        </FadeIn>
      </div>
    </section>
  );
}

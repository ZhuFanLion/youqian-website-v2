"use client";

import { useRef, useState, useCallback } from "react";
import FadeIn from "./FadeIn";

const cases = [
  {
    title: "AI模特白底图",
    category: "产品展示",
    description: "无需实景拍摄，AI一键生成标准白底商品图",
    gradient: "from-neutral-100 to-neutral-200",
  },
  {
    title: "模特形象生成",
    category: "虚拟模特",
    description: "自定义面部特征、体型、风格，生成专属品牌模特",
    gradient: "from-neutral-200 to-neutral-300",
  },
  {
    title: "服装试穿效果",
    category: "虚拟试穿",
    description: "将服装自然穿在AI模特身上，呈现真实穿着效果",
    gradient: "from-neutral-100 to-neutral-200",
  },
  {
    title: "品牌视觉测试",
    category: "视觉测试",
    description: "快速生成多种风格视觉方案，A/B测试最优效果",
    gradient: "from-neutral-200 to-neutral-300",
  },
  {
    title: "社媒内容生成",
    category: "内容营销",
    description: "批量生成适配不同平台尺寸的优质视觉内容",
    gradient: "from-neutral-100 to-neutral-200",
  },
  {
    title: "电商场景图",
    category: "场景生成",
    description: "AI生成多样化的商品展示场景，提升转化率",
    gradient: "from-neutral-200 to-neutral-300",
  },
];

export default function Cases() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
  };

  return (
    <section id="cases" className="py-24 md:py-36 bg-muted-light">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <FadeIn>
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <p className="label-text text-muted mb-4">CASES</p>
              <h2 className="heading-lg text-foreground">AI视觉案例</h2>
              <p className="mt-3 text-muted text-base max-w-md">
                从白底模卡到品牌视觉测试，覆盖电商全场景
              </p>
            </div>

            {/* Desktop scroll buttons */}
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ←
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                →
              </button>
            </div>
          </div>
        </FadeIn>

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {cases.map((item, i) => (
            <FadeIn key={item.title} delay={i * 80}>
              <div className="flex-shrink-0 w-[300px] md:w-[340px] snap-start">
                <div className="card !p-0 overflow-hidden h-full">
                  {/* Placeholder visual */}
                  <div
                    className={`h-[220px] bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
                  >
                    <span className="text-xs label-text text-muted">{item.category}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-medium text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-background">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center py-32 md:py-40">
        <FadeIn>
          <p className="label-text text-muted mb-6">AI · FASHION · VISUAL</p>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="heading-xl text-foreground mb-6">
            让服装生意
            <br />
            更有钱
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-4 leading-relaxed">
            AI + 内容 + 流量，三引擎驱动增长
          </p>
        </FadeIn>

        <FadeIn delay={250}>
          <p className="text-base text-muted max-w-xl mx-auto mb-10 leading-relaxed">
            为服装品牌和电商商家提供AI模特图片视频、社媒IP打造、线下活动引流等一站式数字营销解决方案。
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              获取方案
              <ArrowRight size={16} />
            </a>
            <a href="#services" className="btn-secondary">
              了解服务
              <ArrowRight size={16} />
            </a>
          </div>
        </FadeIn>

        {/* Scroll indicator */}
        <FadeIn delay={600}>
          <div className="mt-20 flex flex-col items-center gap-2 text-muted">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-border" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

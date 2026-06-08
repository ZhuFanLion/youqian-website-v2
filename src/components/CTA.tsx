"use client";

import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

export default function CTA() {
  return (
    <section id="contact" className="py-24 md:py-36 bg-background">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <FadeIn>
          <p className="label-text text-muted mb-6">GET STARTED</p>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="heading-xl text-foreground mb-6">
            让 AI 为你的
            <br />
            服装生意加速
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-base md:text-lg text-muted max-w-lg mx-auto mb-10 leading-relaxed">
            从AI模特图到社媒运营到活动引流，一个团队搞定所有。预约免费咨询，获取定制方案。
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@youqiankeji.com" className="btn-primary">
              预约咨询
              <ArrowRight size={16} />
            </a>
            <a href="tel:+8613800000000" className="btn-secondary">
              电话联系
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

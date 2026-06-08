"use client";

import FadeIn from "./FadeIn";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "汇泰服装",
    company: "广州十三行 · 女装批发",
    content:
      "以前每季拍新品图要花2-3万，现在用AI模特一周就搞定，成本降了80%以上。最重要的是出图速度提了10倍，上新再也不用等拍摄档期了。",
    rating: 5,
  },
  {
    name: "MUSE STUDIO",
    company: "独立女装品牌",
    content:
      "社媒运营从0开始，3个月小红书账号做到5万+精准粉，客单价提升了40%。团队对服装行业的理解比一般MCN深很多，不只是做号，是在做品牌。",
    rating: 5,
  },
  {
    name: "时代商务中心",
    company: "服装批发市场运营方",
    content:
      "一场换季招商活动带来500+精准商户到场，签约率比去年翻了一倍。活动策划很系统，从预热到执行到后续跟进都有完整方案。",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-36 bg-muted-light">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <FadeIn>
          <div className="text-center mb-16 md:mb-20">
            <p className="label-text text-muted mb-4">TESTIMONIALS</p>
            <h2 className="heading-lg text-foreground">合作伙伴的真实反馈</h2>
            <p className="mt-3 text-muted text-base">效果和数据不会说谎</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 100}>
              <div className="card h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-foreground text-foreground" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-muted leading-relaxed flex-1 mb-5">"{t.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-muted-light flex items-center justify-center text-xs font-medium text-muted">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t.name}</p>
                    <p className="text-xs text-muted">{t.company}</p>
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

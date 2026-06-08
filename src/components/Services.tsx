"use client";

import { Camera, Smartphone, Megaphone } from "lucide-react";
import FadeIn from "./FadeIn";

const services = [
  {
    icon: Camera,
    title: "AI模特图片与视频",
    description:
      "利用AI技术生成高质量模特图片和视频，大幅降低拍摄成本，提升商品展示效果。白底模卡、模特形象生成、服装试穿一站式完成。",
    href: "#cases",
  },
  {
    icon: Smartphone,
    title: "社媒IP打造",
    description:
      "专业运营小红书、抖音等平台，打造高影响力IP账号，精准触达目标客户群。内容策划、账号运营、流量变现全链路服务。",
    href: "#testimonials",
  },
  {
    icon: Megaphone,
    title: "线下活动引流",
    description:
      "策划执行线下品牌活动，打通线上线下流量闭环，助力服装物业方实现精准引流和高效转化。",
    href: "#contact",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <FadeIn>
          <div className="text-center mb-16 md:mb-20">
            <p className="label-text text-muted mb-4">OUR SERVICES</p>
            <h2 className="heading-lg text-foreground">三大核心业务</h2>
            <p className="mt-4 text-muted text-base md:text-lg max-w-lg mx-auto">
              从视觉到内容到流量，全链路赋能服装行业
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 100}>
              <div className="card group h-full">
                <div className="w-12 h-12 rounded-xl bg-muted-light flex items-center justify-center mb-5 transition-colors group-hover:bg-foreground group-hover:text-background">
                  <service.icon size={22} />
                </div>
                <h3 className="heading-md text-foreground mb-3">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-5">{service.description}</p>
                <a
                  href={service.href}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors inline-flex items-center gap-1.5"
                >
                  了解更多
                  <span className="inline-block transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

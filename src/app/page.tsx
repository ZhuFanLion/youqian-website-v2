"use client";

import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import CompareSlider from "@/components/CompareSlider";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import {
  ArrowRight,
  Sparkles,
  User,
  Shirt,
  Palette,
  Camera,
  Video,
  Zap,
  ChevronRight,
  Menu,
  X,
  Play,
  Star,
} from "lucide-react";

/* ─── Navigation Links ─── */
const navLinks = [
  { label: "服务", href: "#services" },
  { label: "案例", href: "#cases" },
  { label: "数据", href: "#stats" },
  { label: "评价", href: "#testimonials" },
  { label: "联系", href: "#contact" },
];

/* ─── Service Features ─── */
const services = [
  {
    icon: User,
    title: "AI 模特生成",
    desc: "自定义面部特征、体型、肤色，生成无限风格的专属品牌模特。告别昂贵的外模拍摄，每张成本降低 90%。",
    tag: "核心能力",
    image: "https://picsum.photos/seed/model-gen/600/800",
  },
  {
    icon: Shirt,
    title: "智能服装试穿",
    desc: "上传平铺服装图，AI 自动穿在模特身上。逼真的褶皱、光影和材质，无法分辨是 AI 生成。",
    tag: "爆款功能",
    image: "https://picsum.photos/seed/try-on/600/800",
  },
  {
    icon: Camera,
    title: "场景图生成",
    desc: "从街拍到棚拍、从杂志到户外，一键切换拍摄场景。省去场地租赁、布景搭建的时间和成本。",
    tag: "场景覆盖",
    image: "https://picsum.photos/seed/scene-gen/600/800",
  },
];

/* ─── Showcase Cases ─── */
const cases = [
  { title: "ZARA 春季系列", category: "快时尚", image: "https://picsum.photos/seed/case1/600/750" },
  { title: "COS 极简风格", category: "轻奢", image: "https://picsum.photos/seed/case2/600/750" },
  { title: "Nike 运动系列", category: "运动", image: "https://picsum.photos/seed/case3/600/750" },
  { title: "SHEIN 街拍风格", category: "跨境电商", image: "https://picsum.photos/seed/case4/600/750" },
  { title: "Uniqlo 基础款", category: "日常", image: "https://picsum.photos/seed/case5/600/750" },
  { title: "Dior 高定系列", category: "奢侈品牌", image: "https://picsum.photos/seed/case6/600/750" },
];

/* ─── Testimonials ─── */
const testimonials = [
  {
    name: "张晓燕",
    role: "某跨境品牌 CEO",
    text: "用了 COIN AI 后，我们的产品图制作周期从 7 天缩短到 1 天，成本降低了 85%。这不是效率工具，这是颠覆。",
    rating: 5,
  },
  {
    name: "李明",
    role: "某服装电商运营总监",
    text: "之前每个月光模特拍摄就要花 10 万+，现在用 AI 模特，同样的预算可以做 10 倍的图量。",
    rating: 5,
  },
  {
    name: "王芳",
    role: "某品牌视觉设计师",
    text: "AI 试穿的效果出乎意料地好，客户根本看不出是 AI 生成的。这彻底改变了我们的工作流程。",
    rating: 5,
  },
];

/* ─── Brand Marquee ─── */
const brandNames = [
  "ZARA", "H&M", "SHEIN", "COS", "Nike", "Uniqlo", "Adidas", "MUJI",
  "GAP", "PUMA", "Bershka", "Pull&Bear", "Massimo Dutti", "Arket",
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg">
      {/* Grain overlay for premium feel */}
      <div className="grain-overlay" />

      {/* ═══════ Navigation ═══════ */}
      <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full border-[1.5px] border-text flex items-center justify-center text-xs font-bold transition-transform group-hover:scale-110">
              $
            </div>
            <span className="text-sm font-semibold tracking-tight">COIN AI</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] text-text-secondary hover:text-text transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="#contact" className="btn-fill btn-sm hidden sm:inline-flex">
              申请内测
              <ArrowRight size={14} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center hover:bg-bg-soft transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* ═══════ Mobile Menu ═══════ */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[280px] bg-bg border-l border-border flex flex-col">
            <div className="flex items-center justify-between px-6 h-16 border-b border-border">
              <span className="text-sm font-semibold">COIN AI</span>
              <button onClick={() => setMobileMenuOpen(false)} className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-bg-soft">
                <X size={20} />
              </button>
            </div>
            <nav className="flex-1 py-4 px-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-base text-text-secondary hover:text-text transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="p-6 border-t border-border">
              <a href="#contact" className="btn-fill w-full text-center">
                申请内测
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/hero-fashion/1920/1080"
            alt=""
            className="w-full h-full object-cover opacity-[0.06]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-bg-soft mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-text-secondary">内测开放中 · 限量邀请</span>
              </div>
            </Reveal>

            {/* Title */}
            <Reveal delay={1}>
              <h1 className="hero-title mb-6">
                AI 赋能服装行业
                <br />
                <span className="gradient-text">新视觉引擎</span>
              </h1>
            </Reveal>

            {/* Subtitle */}
            <Reveal delay={2}>
              <p className="hero-subtitle mb-10">
                从模特形象生成、服装试穿到品牌视觉测试，用 AI 替代传统拍摄。
                <strong className="text-text">成本降低 90%，速度提升 10 倍</strong>。
              </p>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal delay={3}>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#contact" className="btn-fill">
                  免费试用
                  <ArrowRight size={16} />
                </a>
                <a href="#cases" className="btn-outline">
                  <Play size={16} />
                  查看案例
                </a>
              </div>
            </Reveal>

            {/* Social Proof */}
            <Reveal delay={4}>
              <div className="flex items-center gap-6 mt-12 pt-8 border-t border-border">
                <div>
                  <div className="text-2xl font-semibold tracking-tight">200+</div>
                  <div className="text-xs text-text-tertiary">服务品牌</div>
                </div>
                <div className="w-px h-8 bg-border" />
                <div>
                  <div className="text-2xl font-semibold tracking-tight">50,000+</div>
                  <div className="text-xs text-text-tertiary">AI 作品产出</div>
                </div>
                <div className="w-px h-8 bg-border" />
                <div>
                  <div className="text-2xl font-semibold tracking-tight">90%</div>
                  <div className="text-xs text-text-tertiary">成本降低</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════ Brand Marquee ═══════ */}
      <section className="py-12 border-y border-border overflow-hidden bg-bg-soft">
        <p className="text-center text-xs text-text-tertiary tracking-widest uppercase mb-6">被这些品牌的团队信赖</p>
        <div className="overflow-hidden">
          <div className="marquee-track">
            {[...brandNames, ...brandNames].map((name, i) => (
              <span
                key={i}
                className="text-lg md:text-xl font-semibold text-text-tertiary/40 whitespace-nowrap mx-8 md:mx-12 tracking-tight"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Compare Section ═══════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="section-label mb-4">效果对比</p>
            <h2 className="section-title mb-4">
              原图 vs AI 生成
            </h2>
            <p className="text-text-secondary max-w-lg mb-12">
              拖动滑块，亲眼感受 AI 带来的视觉革命。每一张图都由 COIN AI 独立生成，无需摄影师、模特和影棚。
            </p>
          </Reveal>

          <Reveal delay={1}>
            <div className="max-w-4xl mx-auto">
              <CompareSlider
                beforeSrc="https://picsum.photos/seed/before-flat/800/1000"
                afterSrc="https://picsum.photos/seed/after-model/800/1000"
                beforeLabel="平铺原图"
                afterLabel="AI 模特图"
                aspect="4/5"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════ Services ═══════ */}
      <section id="services" className="py-24 md:py-32 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="section-label mb-4">核心能力</p>
            <h2 className="section-title mb-12">
              一站式 AI 视觉解决方案
            </h2>
          </Reveal>

          <div className="space-y-8 md:space-y-12">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={(i + 1) as 1 | 2 | 3}>
                <div className="feature-card grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <span className="inline-block text-[11px] font-semibold tracking-widest uppercase text-text-tertiary mb-3">
                      {service.tag}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <a href="#contact" className="btn-outline btn-sm">
                      了解详情
                      <ChevronRight size={14} />
                    </a>
                  </div>
                  <div className={`aspect-[4/5] rounded-2xl overflow-hidden bg-bg-muted ${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ How It Works ═══════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="section-label mb-4">工作流程</p>
            <h2 className="section-title mb-16">
              三步完成 AI 视觉制作
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: Palette,
                title: "上传素材",
                desc: "上传服装平铺图或模特参考图，选择目标风格和场景",
              },
              {
                step: "02",
                icon: Sparkles,
                title: "AI 生成",
                desc: "AI 在 30 秒内生成专业级模特图，支持批量产出",
              },
              {
                step: "03",
                icon: Zap,
                title: "下载使用",
                desc: "高清输出，直接用于电商详情页、社媒推广和品牌素材",
              },
            ].map((item, i) => (
              <Reveal key={item.step} delay={(i + 1) as 1 | 2 | 3}>
                <div className="relative p-8 rounded-2xl border border-border hover:border-border-hover transition-all duration-300 hover:-translate-y-1">
                  <span className="text-[64px] font-bold text-bg-muted leading-none absolute top-4 right-6 select-none">
                    {item.step}
                  </span>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-bg-soft border border-border flex items-center justify-center mb-6">
                      <item.icon size={22} strokeWidth={1.5} className="text-text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Cases ═══════ */}
      <section id="cases" className="py-24 md:py-32 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <p className="section-label mb-4">作品展示</p>
                <h2 className="section-title">
                  客户真实案例
                </h2>
              </div>
              <a href="#contact" className="btn-outline btn-sm mt-4 md:mt-0 w-fit">
                查看更多
                <ArrowRight size={14} />
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {cases.map((item, i) => (
              <Reveal key={item.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="image-card group">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold mb-0.5">{item.title}</h3>
                    <p className="text-xs text-text-tertiary">{item.category}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Stats ═══════ */}
      <section id="stats" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="section-label mb-4">数据说话</p>
            <h2 className="section-title mb-16">
              用数字证明价值
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <Reveal delay={1}>
              <CountUp end={200} suffix="+" label="服务品牌" />
            </Reveal>
            <Reveal delay={2}>
              <CountUp end={50000} suffix="+" label="AI 作品产出" />
            </Reveal>
            <Reveal delay={3}>
              <CountUp end={1000} suffix="万+" label="社媒总曝光" />
            </Reveal>
            <Reveal delay={4}>
              <CountUp end={90} suffix="%" label="成本降低" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════ Testimonials ═══════ */}
      <section id="testimonials" className="py-24 md:py-32 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="section-label mb-4">客户评价</p>
            <h2 className="section-title mb-12">
              他们怎么说
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i + 1) as 1 | 2 | 3}>
                <div className="feature-card h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="fill-text text-text" />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-bg-muted flex items-center justify-center">
                      <User size={18} className="text-text-tertiary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{t.name}</div>
                      <div className="text-xs text-text-tertiary">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Video / Additional Capabilities ═══════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <p className="section-label mb-4">更多能力</p>
                <h2 className="section-title mb-6">
                  不止图片，<br />还有视频
                </h2>
                <p className="text-text-secondary leading-relaxed mb-8">
                  AI 模特不只是静态图。COIN AI 支持从静态模特图一键生成短视频，
                  适用于抖音、小红书等社媒平台的视觉内容需求。让你的产品动起来。
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Video, text: "AI 模特短视频生成" },
                    { icon: Sparkles, text: "社媒 IP 形象打造" },
                    { icon: Camera, text: "线下活动视觉引流" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-bg-soft border border-border flex items-center justify-center flex-shrink-0">
                        <item.icon size={16} className="text-text-secondary" />
                      </div>
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-bg-muted relative group">
                <img
                  src="https://picsum.photos/seed/video-gen/800/600"
                  alt="AI 视频生成"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                    <Play size={24} className="text-black ml-1" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section id="contact" className="py-24 md:py-32 bg-fill text-fill-inverse">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-fill-inverse/50 mb-6">
              GET STARTED
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
              让 AI 为你的<br />服装生意加速
            </h2>
            <p className="text-lg text-fill-inverse/60 mb-10 max-w-lg mx-auto">
              预约免费咨询，获取专属 AI 视觉方案。前 50 名用户享内测优惠。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@youqiankeji.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-fill-inverse text-fill font-semibold text-base hover:opacity-90 transition-opacity"
              >
                预约咨询
                <ArrowRight size={18} />
              </a>
              <a
                href="tel:+8613800000000"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-fill-inverse/20 text-fill-inverse font-medium text-base hover:bg-fill-inverse/10 transition-colors"
              >
                电话联系
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════ Footer ═══════ */}
      <footer className="py-12 border-t border-border bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full border border-text flex items-center justify-center text-[9px] font-bold">
                $
              </div>
              <span className="text-sm font-semibold tracking-tight">COIN AI</span>
              <span className="text-xs text-text-tertiary ml-2">
                &copy; {new Date().getFullYear()} 广州有钱科技技术有限公司
              </span>
            </div>

            <div className="flex items-center gap-6 text-xs text-text-tertiary">
              <a href="#" className="hover:text-text transition-colors">隐私政策</a>
              <a href="#" className="hover:text-text transition-colors">服务条款</a>
              <span>粤ICP备XXXXXXXX号</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import CompareSlider from "@/components/CompareSlider";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import {
  ArrowRight,
  Sparkles,
  User,
  Shirt,
  Camera,
  Video,
  Zap,
  ChevronRight,
  Menu,
  X,
  Play,
  Star,
  Check,
} from "lucide-react";

/* ─── Data ─── */
const navLinks = [
  { label: "服务", href: "#services" },
  { label: "案例", href: "#cases" },
  { label: "数据", href: "#stats" },
  { label: "评价", href: "#testimonials" },
];

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

const cases = [
  { title: "ZARA 春季系列", category: "快时尚", image: "https://picsum.photos/seed/case1/600/750" },
  { title: "COS 极简风格", category: "轻奢", image: "https://picsum.photos/seed/case2/600/750" },
  { title: "Nike 运动系列", category: "运动", image: "https://picsum.photos/seed/case3/600/750" },
  { title: "SHEIN 街拍风格", category: "跨境电商", image: "https://picsum.photos/seed/case4/600/750" },
  { title: "Uniqlo 基础款", category: "日常", image: "https://picsum.photos/seed/case5/600/750" },
  { title: "Dior 高定系列", category: "奢侈品牌", image: "https://picsum.photos/seed/case6/600/750" },
];

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

const brandNames = [
  "ZARA", "H&M", "SHEIN", "COS", "Nike", "Uniqlo", "Adidas", "MUJI",
  "GAP", "PUMA", "Bershka", "Pull&Bear",
];

const videoFeatures = [
  { icon: Video, text: "AI 模特短视频生成" },
  { icon: Sparkles, text: "社媒 IP 形象打造" },
  { icon: Camera, text: "线下活动视觉引流" },
];

const workflowSteps = [
  { step: "01", icon: Camera, title: "上传素材", desc: "上传服装平铺图或模特参考图，选择目标风格和场景" },
  { step: "02", icon: Sparkles, title: "AI 生成", desc: "AI 在 30 秒内生成专业级模特图，支持批量产出" },
  { step: "03", icon: Zap, title: "下载使用", desc: "高清输出，直接用于电商详情页、社媒推广和品牌素材" },
];

/* ─── Component ─── */
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-bg">
      <div className="grain-overlay" />

      {/* ═══════ Navigation ═══════ */}
      <nav className="glass-nav">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-[1.5px] border-text flex items-center justify-center text-[10px] sm:text-xs font-bold">
              $
            </div>
            <span className="text-sm font-semibold tracking-tight">COIN AI</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
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

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="/beta" className="btn-fill btn-sm hidden sm:inline-flex">
              申请内测
              <ArrowRight size={14} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center active:bg-bg-soft transition-colors"
              aria-label="打开菜单"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* ═══════ Mobile Menu ═══════ */}
      {mobileMenuOpen && (
        <>
          <div
            className="mobile-menu-overlay"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="mobile-menu-panel">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold">COIN AI</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-xl flex items-center justify-center active:bg-bg-soft"
                aria-label="关闭菜单"
              >
                <X size={22} />
              </button>
            </div>
            <nav>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-menu-item"
                >
                  {link.label}
                  <ChevronRight size={18} className="text-text-tertiary" />
                </a>
              ))}
            </nav>
            <div className="mt-4">
              <a href="/beta" className="btn-fill w-full text-center" onClick={() => setMobileMenuOpen(false)}>
                申请内测
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </>
      )}

      {/* ═══════ HERO — Mobile Full Viewport ═══════ */}
      <section className="hero-mobile-full relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/hero-fashion/1920/1080"
            alt=""
            className="w-full h-full object-cover opacity-[0.05]"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-bg-soft mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-semibold text-text-secondary">内测开放中 · 限量邀请</span>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="hero-title mb-4 sm:mb-6">
              AI 赋能服装行业
              <br />
              <span className="gradient-text">新视觉引擎</span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="hero-subtitle mb-8 sm:mb-10">
              从模特形象生成、服装试穿到品牌视觉测试，用 AI 替代传统拍摄。
              <strong className="text-text">成本降低 90%，速度提升 10 倍</strong>。
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="/beta" className="btn-fill w-full sm:w-auto text-center">
                免费试用
                <ArrowRight size={16} />
              </a>
              <a href="#cases" className="btn-outline w-full sm:w-auto text-center">
                <Play size={16} />
                查看案例
              </a>
            </div>
          </Reveal>

          {/* Social Proof — compact on mobile */}
          <Reveal delay={4}>
            <div className="flex items-center gap-4 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
              <div>
                <div className="text-xl sm:text-2xl font-bold tracking-tight">200+</div>
                <div className="text-[10px] sm:text-xs text-text-tertiary">服务品牌</div>
              </div>
              <div className="w-px h-6 sm:h-8 bg-border" />
              <div>
                <div className="text-xl sm:text-2xl font-bold tracking-tight">50K+</div>
                <div className="text-[10px] sm:text-xs text-text-tertiary">AI 作品产出</div>
              </div>
              <div className="w-px h-6 sm:h-8 bg-border" />
              <div>
                <div className="text-xl sm:text-2xl font-bold tracking-tight">90%</div>
                <div className="text-[10px] sm:text-xs text-text-tertiary">成本降低</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════ Brand Marquee ═══════ */}
      <section className="py-8 sm:py-10 border-y border-border overflow-hidden bg-bg-soft">
        <p className="text-center text-[10px] sm:text-xs text-text-tertiary tracking-[0.15em] uppercase mb-4">被这些品牌的团队信赖</p>
        <div className="overflow-hidden">
          <div className="marquee-track">
            {[...brandNames, ...brandNames].map((name, i) => (
              <span
                key={i}
                className="text-base sm:text-lg font-semibold text-text-tertiary/30 whitespace-nowrap mx-6 sm:mx-10 tracking-tight"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Before/After Compare ═══════ */}
      <section className="section-gap">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <p className="section-label mb-3">效果对比</p>
            <h2 className="section-title mb-3">原图 vs AI 生成</h2>
            <p className="text-text-secondary text-sm sm:text-base max-w-lg mb-8 sm:mb-12">
              拖动滑块，亲眼感受 AI 带来的视觉革命。每一张图都由 COIN AI 独立生成，无需摄影师、模特和影棚。
            </p>
          </Reveal>

          <Reveal delay={1}>
            <div className="max-w-3xl mx-auto">
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

      {/* ═══════ Services — Vertical Stack on Mobile ═══════ */}
      <section id="services" className="section-gap bg-bg-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <p className="section-label mb-3">核心能力</p>
            <h2 className="section-title mb-8 sm:mb-12">一站式 AI 视觉解决方案</h2>
          </Reveal>

          <div className="space-y-4 sm:space-y-8">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="feature-card">
                  {/* Mobile: Image on top, text below */}
                  <div className="block md:grid md:grid-cols-2 md:gap-12 md:items-center">
                    <div className={i % 2 === 1 ? "md:order-2" : ""}>
                      <div className="aspect-[16/10] md:aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden bg-bg-muted mb-4 md:mb-0">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover active:scale-[1.02] transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className={i % 2 === 1 ? "md:order-1" : ""}>
                      <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-text-tertiary mb-2">
                        {service.tag}
                      </span>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-5">
                        {service.desc}
                      </p>
                      <a href="/beta" className="btn-outline btn-sm">
                        了解详情
                        <ChevronRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ How It Works — Horizontal Scroll on Mobile ═══════ */}
      <section className="section-gap">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <p className="section-label mb-3">工作流程</p>
            <h2 className="section-title mb-8 sm:mb-12">三步完成 AI 视觉制作</h2>
          </Reveal>

          {/* Mobile: horizontal scroll cards; Desktop: 3-column grid */}
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 md:mx-0 md:px-0 scrollbar-hide">
            {workflowSteps.map((item, i) => (
              <Reveal key={item.step} delay={(i + 1) as 1 | 2 | 3}>
                <div className="min-w-[260px] md:min-w-0 relative p-6 sm:p-8 rounded-2xl border border-border bg-bg snap-start">
                  <span className="text-[48px] sm:text-[64px] font-bold text-bg-muted leading-none absolute top-3 right-4 select-none">
                    {item.step}
                  </span>
                  <div className="relative">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-bg-soft border border-border flex items-center justify-center mb-4 sm:mb-6">
                      <item.icon size={20} strokeWidth={1.5} className="text-text-secondary" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Cases — 2-col mobile grid ═══════ */}
      <section id="cases" className="section-gap bg-bg-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="flex items-end justify-between mb-6 sm:mb-10">
              <div>
                <p className="section-label mb-2">作品展示</p>
                <h2 className="section-title">客户真实案例</h2>
              </div>
              <a href="/beta" className="btn-outline btn-sm hidden sm:inline-flex">
                查看更多
                <ArrowRight size={14} />
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {cases.map((item, i) => (
              <Reveal key={item.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="image-card">
                  <div className="aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover active:scale-[1.03] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="text-xs sm:text-sm font-semibold mb-0.5 truncate">{item.title}</h3>
                    <p className="text-[10px] sm:text-xs text-text-tertiary">{item.category}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Mobile-only CTA */}
          <div className="mt-6 sm:hidden">
            <a href="/beta" className="btn-outline w-full text-center">
              查看更多案例
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ Video Capabilities — Mobile Single Column ═══════ */}
      <section className="section-gap">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="mb-6 sm:mb-0">
              <p className="section-label mb-3">更多能力</p>
              <h2 className="section-title mb-4">
                不止图片，<br className="sm:hidden" />还有视频
              </h2>
            </div>
          </Reveal>

          <div className="block md:grid md:grid-cols-2 md:gap-12 md:items-center">
            <Reveal>
              <div>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6 sm:mb-8">
                  AI 模特不只是静态图。COIN AI 支持从静态模特图一键生成短视频，
                  适用于抖音、小红书等社媒平台的视觉内容需求。让你的产品动起来。
                </p>
                <div className="space-y-3 sm:space-y-4">
                  {videoFeatures.map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-bg-soft border border-border flex items-center justify-center flex-shrink-0">
                        <item.icon size={16} strokeWidth={1.5} className="text-text-secondary" />
                      </div>
                      <span className="text-sm sm:text-base">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="aspect-[16/10] sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-bg-muted relative mt-6 sm:mt-0">
                <img
                  src="https://picsum.photos/seed/video-gen/800/600"
                  alt="AI 视频生成"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg active:scale-95 transition-transform cursor-pointer">
                    <Play size={22} className="text-black ml-1" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════ Stats ═══════ */}
      <section id="stats" className="section-gap bg-bg-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <p className="section-label mb-3">数据说话</p>
            <h2 className="section-title mb-8 sm:mb-12">用数字证明价值</h2>
          </Reveal>

          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-12">
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

      {/* ═══════ Testimonials — Horizontal Scroll on Mobile ═══════ */}
      <section id="testimonials" className="section-gap">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <p className="section-label mb-3">客户评价</p>
            <h2 className="section-title mb-6 sm:mb-10">他们怎么说</h2>
          </Reveal>

          {/* Mobile: scroll; Desktop: 3-col grid */}
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 md:mx-0 md:px-0 scrollbar-hide">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i + 1) as 1 | 2 | 3}>
                <div className="min-w-[280px] md:min-w-0 feature-card h-full flex flex-col snap-start">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={13} className="fill-text text-text" />
                    ))}
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-3 border-t border-border">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-bg-muted flex items-center justify-center">
                      <User size={16} className="text-text-tertiary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{t.name}</div>
                      <div className="text-[11px] sm:text-xs text-text-tertiary">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="section-gap bg-fill text-fill-inverse">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-fill-inverse/50 mb-4 sm:mb-6">
              GET STARTED
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight">
              让 AI 为你的<br />服装生意加速
            </h2>
            <p className="text-base sm:text-lg text-fill-inverse/60 mb-8 sm:mb-10 max-w-md mx-auto">
              预约免费咨询，获取专属 AI 视觉方案。前 50 名用户享内测优惠。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="/beta"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-fill-inverse text-fill font-semibold text-base active:scale-95 transition-transform w-full sm:w-auto justify-center"
              >
                申请内测
                <ArrowRight size={18} />
              </a>
              <a
                href="tel:+8613800000000"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-fill-inverse/20 text-fill-inverse font-medium text-base w-full sm:w-auto justify-center"
              >
                电话咨询
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════ Footer ═══════ */}
      <footer className="py-8 sm:py-12 border-t border-border bg-bg-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full border border-text flex items-center justify-center text-[8px] font-bold">
                $
              </div>
              <span className="text-xs font-semibold tracking-tight">COIN AI</span>
              <span className="text-[10px] sm:text-xs text-text-tertiary ml-1">
                &copy; {new Date().getFullYear()} 广州有钱科技技术有限公司
              </span>
            </div>

            <div className="flex items-center gap-4 text-[10px] sm:text-xs text-text-tertiary">
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

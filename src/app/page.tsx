"use client";

import { useState, useEffect } from "react";
import {
  Home as HomeIcon,
  LayoutGrid,
  Image,
  Wand2,
  ZoomIn,
  Video,
  Palette,
  Shirt,
  ShoppingBag,
  Lightbulb,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronDown,
  User,
  Sparkles,
  Zap,
} from "lucide-react";

/* ─── Sidebar Nav Data ─── */
const sidebarNav = [
  { icon: HomeIcon, label: "首页", active: true },
  { icon: LayoutGrid, label: "模板社区", active: false },
  { icon: Image, label: "图库", active: false },
  { icon: Wand2, label: "图片创作", active: false },
  { icon: ZoomIn, label: "高清放大", active: false },
  { icon: Video, label: "视频创作", active: false },
  { icon: Palette, label: "AI图案设计", active: false },
  { icon: Shirt, label: "AI服装电商", active: false },
  { icon: ShoppingBag, label: "AI电商", active: false },
  { icon: Lightbulb, label: "提示词生成", active: false },
  { icon: Sparkles, label: "全部工具", active: false },
];

/* ─── Hero Slides ─── */
const heroSlides = [
  {
    title: "AI 服装大片",
    subtitle: "超强一致性，人物商品高度融合，还原度拉满。改图精修、商品主图、创意海报全能适配。",
    cta: "立刻体验",
    badge: "HOT",
    image: "https://picsum.photos/seed/coin-hero1/1200/500",
  },
  {
    title: "AI 视频创作",
    subtitle: "全模态能力，音视图文均可参考。1080p 电影级画质，极速推理。",
    cta: "立刻体验",
    badge: "NEW",
    image: "https://picsum.photos/seed/coin-hero2/1200/500",
  },
  {
    title: "image-2 极速生成",
    subtitle: "文字零错误、照片级画质，极速生成、超强指令理解。限时8折！",
    cta: "立刻体验",
    badge: "限时8折",
    image: "https://picsum.photos/seed/coin-hero3/1200/500",
  },
];

/* ─── Featured Tools (大卡片) ─── */
const featuredTools = [
  { title: "AI 服装大片", badge: "HOT" as const, desc: "一致性强，人物/商品融合后还原度高，适合改图、商品图、海报", image: "https://picsum.photos/seed/ft1/400/225" },
  { title: "Seedance 2.0 视频", badge: "HOT" as const, desc: "全模态能力，音视图文均可参考（暂不支持真人人脸）", image: "https://picsum.photos/seed/ft2/400/225" },
  { title: "image-2", badge: "NEW" as const, desc: "文字零错误、照片级画质，极速生成、超强指令理解", image: "https://picsum.photos/seed/ft3/400/225", sale: "限时8折" },
  { title: "Happy Horse", badge: "NEW" as const, desc: "音画同步生成、极速推理、1080p 电影级画质", image: "https://picsum.photos/seed/ft4/400/225" },
];

/* ─── AI Tools Grid ─── */
const aiTools = [
  { title: "AI 服装大片", badge: "HOT" as const },
  { title: "AI 服装大片-元素替换", badge: "HOT" as const },
  { title: "AI 电商详情图", badge: "NEW" as const },
  { title: "家纺裂变", badge: "NEW" as const },
  { title: "Seedream 4.5", badge: null },
  { title: "高清放大 2.0", badge: null },
  { title: "悠船 MJ V7", badge: null },
  { title: "提取花纹-高级版", badge: null },
  { title: "一键同款", badge: null },
  { title: "服装大片裂变", badge: "NEW" as const },
  { title: "image-1", badge: null },
  { title: "姿势裂变", badge: "NEW" as const },
  { title: "AI 服装视频(测试版)", badge: "NEW" as const },
  { title: "服装详情图裂变", badge: "NEW" as const },
  { title: "AI 服装视频-元素替换", badge: "NEW" as const },
];

/* ─── Template Categories ─── */
const templateCats1 = ["女装", "男装", "家纺", "配饰"];
const templateCats2 = ["商业大片", "棚拍", "社媒种草", "跨境"];

/* ─── Template Data ─── */
const templates1 = Array.from({ length: 14 }, (_, i) => ({
  image: `https://picsum.photos/seed/tpl-a${i}/300/400`,
  isVideo: i < 6,
}));

const templates2 = Array.from({ length: 14 }, (_, i) => ({
  image: `https://picsum.photos/seed/tpl-b${i}/300/400`,
  isVideo: i < 6,
}));

/* ─── Community Data ─── */
const communityItems = [
  { user: "隔壁老周", likes: 1, image: `https://picsum.photos/seed/comm1/300/500` },
  { user: "莫MO", likes: 0, image: `https://picsum.photos/seed/comm2/300/350` },
  { user: "Bruce", likes: 0, image: `https://picsum.photos/seed/comm3/300/450` },
  { user: "Candy", likes: 0, image: `https://picsum.photos/seed/comm4/300/380` },
  { user: "大萨满", likes: 2, image: `https://picsum.photos/seed/comm5/300/520` },
  { user: "摸爬滚打233", likes: 0, image: `https://picsum.photos/seed/comm6/300/400` },
  { user: "发财小狗", likes: 2, image: `https://picsum.photos/seed/comm7/300/360` },
  { user: "设计师小林", likes: 5, image: `https://picsum.photos/seed/comm8/300/480` },
];

/* ─── Component ─── */
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [tplCat1, setTplCat1] = useState(0);
  const [tplCat2, setTplCat2] = useState(0);

  // Auto-rotate hero
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const badgeClass = (badge: string | null) => {
    if (badge === "HOT") return "badge-hot";
    if (badge === "NEW") return "badge-new";
    if (badge === "限时8折") return "badge-sale";
    return "";
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="grain-overlay" />

      {/* ═══════ Announcement Bar ═══════ */}
      <div className="announcement-bar">
        <Zap size={14} />
        <span>image-2 6.1-6.15 限时8折！</span>
        <button className="ml-2 text-black/50 hover:text-black" aria-label="关闭">
          <X size={14} />
        </button>
      </div>

      {/* ═══════ Top Header ═══════ */}
      <header className="top-header">
        <div className="flex items-center gap-3">
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg active:bg-white/5"
            aria-label="菜单"
          >
            <Menu size={20} className="text-white/60" />
          </button>
          {/* Logo — visible on desktop in header too */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#9AFF07] flex items-center justify-center text-[11px] font-extrabold text-black">
              $
            </div>
            <span className="text-sm font-semibold text-white tracking-tight hidden sm:inline">COIN AI</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="btn-ghost text-xs px-3 py-1.5 min-h-0 h-8 hidden sm:inline-flex">
            官方教程
          </button>
          <button className="btn-ghost text-xs px-3 py-1.5 min-h-0 h-8 hidden sm:inline-flex">
            更新公告
          </button>
          <a href="/beta" className="btn-primary text-xs px-4 py-1.5 min-h-0 h-8">
            登录
          </a>
        </div>
      </header>

      {/* ═══════ Mobile Drawer ═══════ */}
      {mobileMenuOpen && (
        <>
          <div
            className="mobile-drawer-overlay open"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="mobile-drawer open">
            <div className="px-5 pb-4 mb-2 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#9AFF07] flex items-center justify-center text-[11px] font-extrabold text-black">
                    $
                  </div>
                  <span className="text-base font-semibold text-white">COIN AI</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg active:bg-white/5"
                >
                  <X size={20} className="text-white/60" />
                </button>
              </div>
            </div>
            {sidebarNav.map((item) => (
              <div
                key={item.label}
                className={`mobile-drawer-item ${item.active ? "active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon size={18} strokeWidth={1.5} />
                {item.label}
              </div>
            ))}
            <div className="h-px bg-white/10 my-2 mx-5" />
            <div className="mobile-drawer-item">
              <User size={18} strokeWidth={1.5} />
              关于我们
            </div>
          </div>
        </>
      )}

      {/* ═══════ Desktop Sidebar ═══════ */}
      <aside className="sidebar-desktop">
        <div className="px-5 pb-4 mb-1">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#9AFF07] flex items-center justify-center text-[11px] font-extrabold text-black">
              $
            </div>
            <span className="text-sm font-semibold text-[#1A1A1A] tracking-tight">COIN AI</span>
          </div>
        </div>
        {sidebarNav.map((item) => (
          <div
            key={item.label}
            className={`sidebar-item ${item.active ? "active" : ""}`}
          >
            <span className="sidebar-item-icon">
              <item.icon size={18} strokeWidth={1.5} />
            </span>
            {item.label}
          </div>
        ))}
        <div className="sidebar-divider" />
        <div className="sidebar-item">
          <span className="sidebar-item-icon">
            <User size={18} strokeWidth={1.5} />
          </span>
          关于我们
        </div>
      </aside>

      {/* ═══════ Main Content ═══════ */}
      <main className="main-with-sidebar">
        <div className="px-4 lg:px-6 pb-20">

          {/* ─── Hero Carousel ─── */}
          <section className="mt-4 lg:mt-6">
            <div className="hero-carousel">
              {heroSlides.map((slide, i) => (
                <div key={i} className={`hero-slide ${i === heroIndex ? "active" : ""}`}>
                  <div className="relative">
                    <div className="aspect-[16/7] sm:aspect-[16/6] lg:aspect-[21/7] bg-[#0F0F0F]">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover opacity-40"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center p-6 sm:p-10 lg:p-14">
                      <div className="max-w-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                            {slide.title}
                          </h2>
                          {slide.badge && (
                            <span className={`badge ${badgeClass(slide.badge)}`}>
                              {slide.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm sm:text-base text-white/60 mb-5 leading-relaxed">
                          {slide.subtitle}
                        </p>
                        <a href="/beta" className="hero-cta-button">
                          {slide.cta}
                          <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    className={`hero-dot ${i === heroIndex ? "active" : ""}`}
                    onClick={() => setHeroIndex(i)}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* ─── Featured Tools (大卡片) ─── */}
          <section>
            <div className="section-header">
              <h3 className="section-title" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
              {featuredTools.map((tool) => (
                <div key={tool.title} className="feature-tool-card flex-col sm:flex-col">
                  <div className="feature-tool-video w-full">
                    <img
                      src={tool.image}
                      alt={tool.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-white truncate">
                        {tool.title}
                      </span>
                      {tool.badge && (
                        <span className={`badge ${badgeClass(tool.badge)}`}>
                          {tool.badge}
                        </span>
                      )}
                      {tool.sale && (
                        <span className="badge badge-sale">{tool.sale}</span>
                      )}
                    </div>
                    <p className="text-xs text-white/40 leading-relaxed line-clamp-2">
                      {tool.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── AI创作工具 Section ─── */}
          <section>
            <div className="section-header">
              <h3 className="section-title">AI创作工具</h3>
              <span className="section-link">
                全部工具
                <ChevronRight size={14} />
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
              {aiTools.map((tool) => (
                <div key={tool.title} className="tool-card">
                  <div className="tool-card-video">
                    <img
                      src={`https://picsum.photos/seed/tool-${tool.title}/320/180`}
                      alt={tool.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="tool-card-info">
                    <div className="tool-card-title">
                      {tool.title}
                      {tool.badge && (
                        <span className={`badge ${badgeClass(tool.badge)}`}>
                          {tool.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── 模板社区 Section 1 (女装/男装/家纺/配饰) ─── */}
          <section>
            <div className="section-header">
              <h3 className="section-title" />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="count-badge">
                <span className="count-badge-number">5,000 +</span>
                <span className="count-badge-label">视频模板</span>
              </div>
              <div className="count-badge">
                <span className="count-badge-number">20,000 +</span>
                <span className="count-badge-label">图片模板</span>
              </div>
            </div>
            <div className="tab-bar mb-4">
              {templateCats1.map((cat, i) => (
                <button
                  key={cat}
                  className={`tab-item ${i === tplCat1 ? "active" : ""}`}
                  onClick={() => setTplCat1(i)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="template-grid">
              {templates1.map((tpl, i) => (
                <div key={i} className="template-card">
                  <div className="template-card-image">
                    <img src={tpl.image} alt="" loading="lazy" />
                    {tpl.isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center">
                          <Play size={12} className="text-white ml-0.5" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {/* View All Card */}
              <div className="template-card">
                <div className="template-card-image flex items-center justify-center bg-[#0F0F0F] border border-dashed border-white/10">
                  <button className="text-xs text-white/40 hover:text-[#9AFF07] transition-colors flex items-center gap-1">
                    查看所有模板
                    <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ─── 模板社区 Section 2 (商业大片/棚拍/社媒种草/跨境) ─── */}
          <section>
            <div className="tab-bar mb-4">
              {templateCats2.map((cat, i) => (
                <button
                  key={cat}
                  className={`tab-item ${i === tplCat2 ? "active" : ""}`}
                  onClick={() => setTplCat2(i)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="template-grid">
              {templates2.map((tpl, i) => (
                <div key={i} className="template-card">
                  <div className="template-card-image">
                    <img src={tpl.image} alt="" loading="lazy" />
                    {tpl.isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center">
                          <Play size={12} className="text-white ml-0.5" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div className="template-card">
                <div className="template-card-image flex items-center justify-center bg-[#0F0F0F] border border-dashed border-white/10">
                  <button className="text-xs text-white/40 hover:text-[#9AFF07] transition-colors flex items-center gap-1">
                    查看所有模板
                    <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ─── 社区 Section ─── */}
          <section>
            <div className="section-header">
              <h3 className="section-title">社区</h3>
              <span className="section-link">
                查看更多
                <ChevronRight size={14} />
              </span>
            </div>
            <div className="community-grid">
              {communityItems.map((item, i) => (
                <div key={i} className="community-item">
                  <img src={item.image} alt={item.user} loading="lazy" />
                  <div className="community-item-overlay">
                    <div className="community-avatar">
                      <User size={12} className="text-white/50 m-auto" />
                    </div>
                    <span className="community-name">{item.user}</span>
                    <span className="ml-auto text-[11px] text-white/50">{item.likes}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── 底部 CTA ─── */}
          <section className="mt-12 mb-8">
            <div className="rounded-2xl bg-[#9AFF07]/5 border border-[#9AFF07]/20 p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                让 AI 为你的服装生意加速
              </h2>
              <p className="text-sm text-white/50 mb-6 max-w-md mx-auto">
                预约免费咨询，获取专属 AI 视觉方案。前 50 名用户享内测优惠。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="/beta" className="btn-primary glow-green px-8 py-3 text-base">
                  申请内测
                  <ArrowRight size={16} />
                </a>
                <a href="#" className="btn-ghost px-8 py-3 text-base">
                  电话咨询
                </a>
              </div>
            </div>
          </section>

          {/* ─── Footer ─── */}
          <footer className="border-t border-white/5 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-[#9AFF07] flex items-center justify-center text-[8px] font-bold text-black">
                  $
                </div>
                <span className="text-xs font-medium text-white/60">COIN AI</span>
                <span className="text-[10px] text-white/30 ml-1">
                  &copy; {new Date().getFullYear()} 广州有钱科技技术有限公司
                </span>
              </div>
              <div className="flex items-center gap-4 text-[11px] text-white/25">
                <a href="#" className="hover:text-white/50 transition-colors">隐私政策</a>
                <a href="#" className="hover:text-white/50 transition-colors">服务条款</a>
                <span>粤ICP备XXXXXXXX号</span>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

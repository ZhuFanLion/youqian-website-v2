"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { useAuth } from "@/contexts/AuthContext";
import {
  Home as HomeIcon,
  Image,
  Video,
  Shirt,
  Film,
  LayoutTemplate,
  Users,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Play,
  ChevronDown,
  Zap,
  Check,
  TrendingUp,
  Clock,
  Upload,
  Sparkles,
  Download,
  Flame,
  Star,
} from "lucide-react";

/* ─── Sidebar Nav ─── */
interface NavChild {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  label: string;
}
interface NavItem {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  label: string;
  active?: boolean;
  children?: NavChild[];
}

const sidebarNav: NavItem[] = [
  { icon: HomeIcon, label: "首页", active: true },
  {
    icon: Image,
    label: "AI 图片生成",
    children: [
      { icon: Shirt, label: "AI 换装" },
      { icon: Users, label: "AI 模特生成" },
      { icon: Sparkles, label: "AI 场景生成" },
      { icon: LayoutTemplate, label: "批量处理" },
    ],
  },
  {
    icon: Video,
    label: "AI 视频生成",
    children: [
      { icon: Film, label: "产品展示视频" },
      { icon: Play, label: "模特走秀视频" },
    ],
  },
  { icon: LayoutTemplate, label: "模板库" },
  { icon: Users, label: "社区作品" },
];

/* ─── Hero Slides (A/B/C) ─── */
const heroSlides = [
  {
    badge: "换装",
    title: "一件服装，10秒生成专业大片",
    subtitle: "上传实物图，AI 自动生成高质量商业棚拍效果。告别高昂摄影成本，每张图仅需 5 毛钱。",
    cta: "免费试用",
    stat: "90%",
    statLabel: "降低拍摄成本",
    image: `https://picsum.photos/seed/hero-garment-a/1200/500`,
  },
  {
    badge: "模特",
    title: "告别真人模特，AI 模特随时待机",
    subtitle: "海量 AI 模特，多种肤色 / 体型 / 风格可选。无需档期协调，无版权纠纷，批量生图随时启动。",
    cta: "查看模特库",
    stat: "10×",
    statLabel: "提升出图速度",
    image: `https://picsum.photos/seed/hero-model-b/1200/500`,
  },
  {
    badge: "跨境",
    title: "跨境卖家专属利器，多场景无限裂变",
    subtitle: "一键切换欧美 / 日韩 / 东南亚场景风格，适配 Amazon、Shopee、Temu 等平台主图规范，快速起量。",
    cta: "立刻体验",
    stat: "2000+",
    statLabel: "月均可出图（Pro版）",
    image: `https://picsum.photos/seed/hero-cross-c/1200/500`,
  },
];

/* ─── Workflow Steps ─── */
const workflowSteps = [
  {
    icon: Upload,
    title: "上传款图",
    desc: "上传服装实物照片或设计效果图，支持 JPG / PNG / WEBP，无需后期处理。",
  },
  {
    icon: Sparkles,
    title: "选模特 / 场景",
    desc: "从模特库中选择体型、风格，再选背景场景，5 秒完成配置。",
  },
  {
    icon: Download,
    title: "下载成品",
    desc: "AI 渲染完成后即可下载高清商业图片，保留服装所有细节和质感。",
  },
];

/* ─── Customer Segments ─── */
const segments = [
  {
    label: "服装工厂",
    pain: "版单多、打样周期长，样衣拍摄占用大量人力和时间。",
    solution: "批量上传款式图，AI 生成全套商业模特图，一键交付电商客户。",
    stat: "90%",
    statDesc: "缩短打样到上架周期",
    features: ["批量处理 支持 CSV 导入", "款式图 → 成品图 全自动", "多平台尺寸规格一键适配"],
  },
  {
    label: "批发商",
    pain: "SKU 多、更新快，每季新款都要重新拍摄，成本高且效率低。",
    solution: "按季批量换装，一套 AI 模特贯穿全年，大幅摊薄视觉成本。",
    stat: "95折",
    statDesc: "订阅期内充值积分优惠",
    features: ["同款模特跨季复用", "一次上传 批量裂变场景", "支持线下展会高清输出"],
  },
  {
    label: "跨境电商",
    pain: "不同市场审美差异大，同一款服装需要多套风格的主图。",
    solution: "一键切换模特肤色 / 场景风格，快速生成欧美 / 东南亚 / 日韩版本。",
    stat: "10×",
    statDesc: "主图产出速度提升",
    features: ["多区域模特风格库", "平台主图规格自动裁剪", "Amazon / Temu / Shopee 场景预设"],
  },
  {
    label: "国内电商",
    pain: "淘宝 / 抖店主图竞争激烈，视觉差异化越来越难做。",
    solution: "AI 生成高点击率场景大片，配合趋势模板库，持续保持视觉新鲜感。",
    stat: "50+",
    statDesc: "内测用户免费试用次数",
    features: ["趋势模板每周更新", "社区作品参考和一键复刻", "小红书 / 抖音种草图适配"],
  },
];

/* ─── AI Tools Grid ─── */
const aiTools = [
  { title: "AI 换装大片", badge: "HOT" as const },
  { title: "AI 换装-元素替换", badge: "HOT" as const },
  { title: "AI 电商详情图", badge: "NEW" as const },
  { title: "家纺场景裂变", badge: "NEW" as const },
  { title: "AI 模特生成", badge: null },
  { title: "高清放大 2.0", badge: null },
  { title: "姿势裂变", badge: "NEW" as const },
  { title: "一键同款", badge: null },
  { title: "服装大片裂变", badge: "NEW" as const },
  { title: "AI 场景生成", badge: null },
  { title: "服装视频（测试）", badge: "NEW" as const },
  { title: "详情图裂变", badge: "NEW" as const },
  { title: "AI 视频-元素替换", badge: "NEW" as const },
  { title: "提取花纹-高级", badge: null },
  { title: "批量处理", badge: null },
];

/* ─── Template Categories ─── */
const templateCats1 = ["女装", "男装", "家纺", "配饰"];
const templateCats2 = ["商业大片", "棚拍", "社媒种草", "跨境"];

const templates1 = Array.from({ length: 13 }, (_, i) => ({
  image: `https://picsum.photos/seed/tpl-a${i}/300/400`,
  isVideo: i < 4,
}));

const templates2 = Array.from({ length: 13 }, (_, i) => ({
  image: `https://picsum.photos/seed/tpl-b${i}/300/400`,
  isVideo: i < 4,
}));

/* ─── Customer Cases ─── */
const customerCases = [
  {
    tag: "服装工厂",
    title: "某广州童装工厂",
    desc: "月均出款 200+ SKU，接入 COIN AI 后拍摄外包费用降低 85%，客户交付周期从 5 天缩短至当天。",
    stat: "85% 成本降低",
    image: `https://picsum.photos/seed/case-factory/600/450`,
  },
  {
    tag: "跨境电商",
    title: "某义乌跨境卖家",
    desc: "同时运营 Amazon US / DE / JP 三个站点，用 COIN AI 为同款产品生成三套差异化主图，CTR 提升 40%。",
    stat: "+40% 点击率",
    image: `https://picsum.photos/seed/case-cross/600/450`,
  },
  {
    tag: "批发商",
    title: "某杭州女装批发商",
    desc: "每月新款 300+ 件，借助批量处理功能一次性生成全季主图，视觉外包成本节省超 6 万元/年。",
    stat: "6万+/年 节省外包费",
    image: `https://picsum.photos/seed/case-wholesale/600/450`,
  },
];

/* ─── Community ─── */
const communityItems = [
  { user: "隔壁老周", likes: 12, image: `https://picsum.photos/seed/comm1/300/500` },
  { user: "莫MO", likes: 8, image: `https://picsum.photos/seed/comm2/300/350` },
  { user: "Bruce", likes: 3, image: `https://picsum.photos/seed/comm3/300/450` },
  { user: "Candy", likes: 7, image: `https://picsum.photos/seed/comm4/300/380` },
  { user: "大萨满", likes: 21, image: `https://picsum.photos/seed/comm5/300/520` },
  { user: "摸爬滚打233", likes: 5, image: `https://picsum.photos/seed/comm6/300/400` },
  { user: "发财小狗", likes: 19, image: `https://picsum.photos/seed/comm7/300/360` },
  { user: "设计师小林", likes: 34, image: `https://picsum.photos/seed/comm8/300/480` },
];

/* ─── Pricing ─── */
const pricingPlans = [
  {
    tier: "标准版",
    price: "899",
    isEnterprise: false,
    period: "/月",
    credits: "10,000 积分/月",
    images: "≈ 200 张图",
    videos: "≈ 20 段视频",
    discount: "充值享 95 折",
    featured: false,
    features: [
      "每月赠送 10,000 积分",
      "生图 50 积分/次",
      "视频 500 积分/次",
      "充值积分享 95 折优惠",
      "AI 换装 / 模特 / 场景全功能",
      "高清下载无水印",
    ],
    cta: "申请内测",
  },
  {
    tier: "Pro 版",
    price: "5,899",
    isEnterprise: false,
    period: "/月",
    credits: "100,000 积分/月",
    images: "≈ 2,000 张图",
    videos: "≈ 200 段视频",
    discount: "充值享 85 折",
    featured: true,
    features: [
      "每月赠送 100,000 积分",
      "生图 50 积分/次",
      "视频 500 积分/次",
      "充值积分享 85 折优惠",
      "批量处理优先队列",
      "专属客户成功经理",
    ],
    cta: "申请内测",
  },
  {
    tier: "企业版",
    price: "联系商务",
    isEnterprise: true,
    period: "",
    credits: "定制积分包",
    images: "不限量",
    videos: "不限量",
    discount: "专属折扣",
    featured: false,
    features: [
      "海量积分定制方案",
      "私有化部署可选",
      "专属模型微调训练",
      "SLA 服务保障",
      "专属 API 接入",
      "多账号团队协作",
    ],
    cta: "联系我们",
  },
];

/* ─── Component ─── */
export default function Home() {
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [tplCat1, setTplCat1] = useState(0);
  const [tplCat2, setTplCat2] = useState(0);
  const [segmentIndex, setSegmentIndex] = useState(0);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    "AI 图片生成": true,
    "AI 视频生成": false,
  });

  const toggleExpand = (label: string) => {
    setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const badgeClass = (badge: string | null) => {
    if (badge === "HOT") return "badge-hot";
    if (badge === "NEW") return "badge-new";
    return "";
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="grain-overlay" />

      {/* ═══ Announcement Bar ═══ */}
      <div className="announcement-bar">
        <Zap size={14} />
        <span>内测开放中 — 前 100 名用户月费永久锁定 ¥899！</span>
        <button className="ml-2 text-black/50 hover:text-black" aria-label="关闭">
          <X size={14} />
        </button>
      </div>

      {/* ═══ Top Header ═══ */}
      <header className="top-header">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg active:bg-white/5"
            aria-label="菜单"
          >
            <Menu size={20} className="text-white/60" />
          </button>
          <Logo bg="dark" />
        </div>
        <div className="flex items-center gap-2">
          <button className="btn-ghost text-xs px-3 py-1.5 min-h-0 h-8 hidden sm:inline-flex">
            官方教程
          </button>
          <button className="btn-ghost text-xs px-3 py-1.5 min-h-0 h-8 hidden sm:inline-flex">
            更新公告
          </button>
          {user ? (
            <>
              <Link href="/recharge" className="btn-ghost text-xs px-3 py-1.5 min-h-0 h-8 hidden sm:inline-flex">
                充值
              </Link>
              <Link href="/dashboard" className="btn-primary text-xs px-4 py-1.5 min-h-0 h-8">
                控制台
              </Link>
            </>
          ) : (
            <>
              <Link href="/login" className="btn-ghost text-xs px-3 py-1.5 min-h-0 h-8">
                登录
              </Link>
              <Link href="/beta" className="btn-primary text-xs px-4 py-1.5 min-h-0 h-8">
                申请内测
              </Link>
            </>
          )}
        </div>
      </header>

      {/* ═══ Mobile Drawer ═══ */}
      {mobileMenuOpen && (
        <>
          <div className="mobile-drawer-overlay open" onClick={() => setMobileMenuOpen(false)} />
          <div className="mobile-drawer open">
            <div className="px-5 pb-4 mb-2 border-b border-white/10">
              <div className="flex items-center justify-between">
                <Logo bg="dark" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg active:bg-white/5"
                >
                  <X size={20} className="text-white/60" />
                </button>
              </div>
            </div>
            {sidebarNav.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <div className="mobile-drawer-item" onClick={() => toggleExpand(item.label)}>
                      <item.icon size={18} strokeWidth={1.5} />
                      {item.label}
                      <ChevronDown
                        size={16}
                        className="ml-auto transition-transform duration-200"
                        style={{ transform: expanded[item.label] ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    </div>
                    <div
                      className="overflow-hidden transition-all"
                      style={{ maxHeight: expanded[item.label] ? "300px" : "0px", opacity: expanded[item.label] ? 1 : 0 }}
                    >
                      {item.children.map((child) => (
                        <div key={child.label} className="mobile-drawer-item pl-12" onClick={() => setMobileMenuOpen(false)}>
                          <child.icon size={16} strokeWidth={1.5} />
                          {child.label}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className={`mobile-drawer-item ${item.active ? "active" : ""}`} onClick={() => setMobileMenuOpen(false)}>
                    <item.icon size={18} strokeWidth={1.5} />
                    {item.label}
                  </div>
                )}
              </div>
            ))}
            <div className="px-5 mt-4 space-y-2">
              {user ? (
                <Link href="/dashboard" className="btn-primary w-full justify-center" onClick={() => setMobileMenuOpen(false)}>
                  进入控制台 <ArrowRight size={14} />
                </Link>
              ) : (
                <>
                  <Link href="/login" className="btn-ghost w-full justify-center" onClick={() => setMobileMenuOpen(false)}>
                    登录
                  </Link>
                  <Link href="/beta" className="btn-primary w-full justify-center" onClick={() => setMobileMenuOpen(false)}>
                    申请内测 <ArrowRight size={14} />
                  </Link>
                </>
              )}
            </div>
          </div>
        </>
      )}

      {/* ═══ Desktop Sidebar ═══ */}
      <aside className="sidebar-desktop">
        <div className="px-5 pb-4 mb-1">
          <Logo bg="light" />
        </div>

        {sidebarNav.map((item) => (
          <div key={item.label}>
            {item.children ? (
              <>
                <div
                  className={`sidebar-parent-header ${expanded[item.label] ? "expanded" : ""}`}
                  onClick={() => toggleExpand(item.label)}
                >
                  <span className="sidebar-item-icon">
                    <item.icon size={18} strokeWidth={1.5} />
                  </span>
                  {item.label}
                  <ChevronDown size={16} className="sidebar-chevron" />
                </div>
                <div className={`sidebar-children ${expanded[item.label] ? "open" : ""}`}>
                  {item.children.map((child) => (
                    <div key={child.label} className="sidebar-child-item">
                      <span className="sidebar-item-icon">
                        <child.icon size={16} strokeWidth={1.5} />
                      </span>
                      {child.label}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className={`sidebar-item ${item.active ? "active" : ""}`}>
                <span className="sidebar-item-icon">
                  <item.icon size={18} strokeWidth={1.5} />
                </span>
                {item.label}
              </div>
            )}
          </div>
        ))}

        <div className="sidebar-bottom-cta">
          <a href="/beta">申请内测 <ArrowRight size={14} /></a>
        </div>
      </aside>

      {/* ═══ Main Content ═══ */}
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
                        className="w-full h-full object-cover opacity-35"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center p-6 sm:p-10 lg:p-14">
                      <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#9AFF07]/30 bg-[#9AFF07]/10 text-[#9AFF07] text-xs font-bold mb-4">
                          {slide.badge}
                        </div>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
                          {slide.title}
                        </h2>
                        <p className="text-sm sm:text-base text-white/55 mb-6 leading-relaxed max-w-md">
                          {slide.subtitle}
                        </p>
                        <div className="flex items-center gap-6">
                          <a href="/beta" className="hero-cta-button">
                            {slide.cta}
                            <ArrowRight size={14} />
                          </a>
                          <div className="hidden sm:block">
                            <div className="text-2xl font-extrabold text-[#9AFF07]">{slide.stat}</div>
                            <div className="text-xs text-white/40">{slide.statLabel}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

          {/* ─── 3步工作流 ─── */}
          <section>
            <div className="section-header">
              <h3 className="section-title">三步完成专业商业图</h3>
            </div>
            <div className="workflow-grid">
              {workflowSteps.map((step, i) => (
                <div key={i} className="workflow-step">
                  {i < workflowSteps.length - 1 && (
                    <div className="workflow-arrow">
                      <ChevronRight size={20} />
                    </div>
                  )}
                  <div className="workflow-step-number">{i + 1}</div>
                  <div className="workflow-step-title">{step.title}</div>
                  <div className="workflow-step-desc">{step.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── 客户群体 Segment Tabs ─── */}
          <section>
            <div className="section-header">
              <h3 className="section-title">专为服装行业设计</h3>
            </div>
            <div className="segment-tabs">
              {segments.map((seg, i) => (
                <button
                  key={seg.label}
                  className={`segment-tab-btn ${i === segmentIndex ? "active" : ""}`}
                  onClick={() => setSegmentIndex(i)}
                >
                  {seg.label}
                </button>
              ))}
            </div>
            {segments.map((seg, i) => (
              <div key={seg.label} className={`segment-panel ${i === segmentIndex ? "active" : ""}`}>
                <div className="bg-[#0F0F0F] border border-white/6 rounded-xl p-5">
                  <div className="text-xs font-bold tracking-widest text-white/30 uppercase mb-3">痛点</div>
                  <p className="text-sm text-white/60 leading-relaxed mb-5">{seg.pain}</p>
                  <div className="text-xs font-bold tracking-widest text-[#9AFF07] uppercase mb-3">解决方案</div>
                  <p className="text-sm text-white/80 leading-relaxed">{seg.solution}</p>
                </div>
                <div className="bg-[#0F0F0F] border border-white/6 rounded-xl p-5">
                  <div className="segment-stat">{seg.stat}</div>
                  <div className="segment-stat-label mb-5">{seg.statDesc}</div>
                  <div className="space-y-2.5">
                    {seg.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#9AFF07]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={10} className="text-[#9AFF07]" />
                        </div>
                        <span className="text-sm text-white/55">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* ─── AI 创作工具 ─── */}
          <section>
            <div className="section-header">
              <h3 className="section-title">AI 创作工具</h3>
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
                        <span className={`badge ${badgeClass(tool.badge)}`}>{tool.badge}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── 模板库 ─── */}
          <section>
            <div className="section-header">
              <h3 className="section-title">模板库</h3>
              <span className="section-link">查看全部 <ChevronRight size={14} /></span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="count-badge">
                <span className="count-badge-number">5,000+</span>
                <span className="count-badge-label">视频模板</span>
              </div>
              <div className="count-badge">
                <span className="count-badge-number">20,000+</span>
                <span className="count-badge-label">图片模板</span>
              </div>
            </div>
            <div className="tab-bar mb-4">
              {templateCats1.map((cat, i) => (
                <button key={cat} className={`tab-item ${i === tplCat1 ? "active" : ""}`} onClick={() => setTplCat1(i)}>
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
              <div className="template-card">
                <div className="template-card-image flex items-center justify-center bg-[#0F0F0F] border border-dashed border-white/10">
                  <button className="text-xs text-white/40 hover:text-[#9AFF07] transition-colors flex items-center gap-1">
                    查看所有模板 <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            </div>

            <div className="tab-bar mb-4 mt-6">
              {templateCats2.map((cat, i) => (
                <button key={cat} className={`tab-item ${i === tplCat2 ? "active" : ""}`} onClick={() => setTplCat2(i)}>
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
                    查看所有模板 <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ─── 客户案例 ─── */}
          <section>
            <div className="section-header">
              <h3 className="section-title">客户案例</h3>
              <span className="text-xs text-white/25 italic">（示意展示，实际案例因保密需求暂不公开）</span>
            </div>
            <div className="cases-grid">
              {customerCases.map((c, i) => (
                <div key={i} className="case-card">
                  <div className="case-card-image">
                    <img src={c.image} alt={c.title} loading="lazy" />
                  </div>
                  <div className="case-card-body">
                    <div className="case-card-tag">{c.tag}</div>
                    <div className="case-card-title">{c.title}</div>
                    <div className="case-card-desc">{c.desc}</div>
                    <div className="case-stat">
                      <TrendingUp size={13} />
                      {c.stat}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── 社区 ─── */}
          <section>
            <div className="section-header">
              <h3 className="section-title">社区作品</h3>
              <span className="section-link">查看更多 <ChevronRight size={14} /></span>
            </div>
            <div className="community-grid">
              {communityItems.map((item, i) => (
                <div key={i} className="community-item">
                  <img src={item.image} alt={item.user} loading="lazy" />
                  <div className="community-item-overlay">
                    <div className="community-avatar" />
                    <span className="community-name">{item.user}</span>
                    <span className="ml-auto text-[11px] text-white/50 flex items-center gap-1">
                      <Star size={10} /> {item.likes}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── 定价 ─── */}
          <section id="pricing" className="mt-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-white mb-2">简单透明的定价</h3>
              <p className="text-sm text-white/40">按月订阅，随时取消。积分永不过期。</p>
            </div>
            <div className="pricing-grid">
              {pricingPlans.map((plan) => (
                <div key={plan.tier} className={`pricing-card ${plan.featured ? "featured" : ""}`}>
                  <div className="pricing-tier">{plan.tier}</div>
                  {plan.isEnterprise ? (
                    <div className="text-2xl font-bold text-white mb-1">联系商务</div>
                  ) : (
                    <div className="pricing-price">
                      <span className="pricing-currency">¥</span>
                      <span className="pricing-amount">{plan.price}</span>
                    </div>
                  )}
                  <div className="pricing-period">
                    {plan.period && `每月${plan.period} · `}
                    <span className="pricing-highlight">{plan.credits}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 text-xs text-white/50 bg-white/5 px-2.5 py-1 rounded-full">
                      <Clock size={11} /> {plan.images}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-white/50 bg-white/5 px-2.5 py-1 rounded-full">
                      <Film size={11} /> {plan.videos}
                    </span>
                    {plan.discount && (
                      <span className="pricing-discount">{plan.discount}</span>
                    )}
                  </div>

                  <div className="pricing-divider" />

                  <div className="space-y-1 mb-6">
                    {plan.features.map((f) => (
                      <div key={f} className="pricing-feature">
                        <div className="pricing-feature-icon">
                          <Check size={10} className="text-[#9AFF07]" />
                        </div>
                        {f}
                      </div>
                    ))}
                  </div>

                  <a
                    href="/beta"
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all ${
                      plan.featured
                        ? "bg-[#9AFF07] text-black hover:shadow-[0_0_20px_rgba(154,255,7,0.35)]"
                        : plan.isEnterprise
                        ? "border border-white/20 text-white/70 hover:border-white/40 hover:text-white"
                        : "border border-white/15 text-white/70 hover:border-[#9AFF07]/40 hover:text-white"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight size={14} />
                  </a>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-white/25 mt-6">
              生图 50 积分/次 · 视频 500 积分/次 · 积分不清零 · 支持充值叠加
            </p>
          </section>

          {/* ─── CTA Banner ─── */}
          <section className="mt-16 mb-8">
            <div className="cta-banner">
              <div className="cta-urgency-badge">
                <Flame size={13} />
                限时内测优惠
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                前 100 名内测用户
                <br />
                <span className="text-[#9AFF07]">月费永久锁定 ¥899</span>
              </h2>
              <p className="text-sm text-white/45 mb-6 max-w-sm mx-auto">
                正式上线后价格将随需求上调，内测期申请即锁定现价，终身有效。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="/beta" className="btn-primary glow-green px-8 py-3 text-base">
                  立即申请内测
                  <ArrowRight size={16} />
                </a>
                <a href="#" className="btn-ghost px-8 py-3 text-base">
                  电话咨询
                </a>
              </div>
              <div className="cta-spots-left mt-4">
                名额有限，已有真实客户使用中
              </div>
            </div>
          </section>

          {/* ─── Footer ─── */}
          <footer className="border-t border-white/5 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-wrap">
                <Logo bg="dark" className="opacity-70" />
                <span className="text-[10px] text-white/30">
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

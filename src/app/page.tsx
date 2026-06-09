"use client";

import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import {
  LayoutDashboard,
  Sparkles,
  User,
  Shirt,
  Palette,
  Settings,
  Download,
  Heart,
  MoreHorizontal,
  Plus,
  ChevronRight,
  Globe,
  Search,
  X,
} from "lucide-react";

/* ─── Sidebar Navigation (YUUY workspace style) ─── */
const sidebarNav = [
  { icon: LayoutDashboard, label: "工作台", active: true },
  { icon: Sparkles, label: "风格库" },
  { icon: User, label: "模特库" },
  { icon: Shirt, label: "服装库" },
  { icon: Palette, label: "场景库" },
  { icon: Settings, label: "设置" },
];

/* ─── AI Model cases (placeholder data) ─── */
const modelCases = [
  { id: 1, name: "Fashion Look A", category: "女装", seed: "fashion-a" },
  { id: 2, name: "Street Style B", category: "街拍", seed: "street-b" },
  { id: 3, name: "Studio Shot C", category: "棚拍", seed: "studio-c" },
  { id: 4, name: "Editorial D", category: "杂志", seed: "editorial-d" },
  { id: 5, name: "Casual Wear E", category: "休闲", seed: "casual-e" },
  { id: 6, name: "Luxury Brand F", category: "轻奢", seed: "luxury-f" },
  { id: 7, name: "Sport Style G", category: "运动", seed: "sport-g" },
  { id: 8, name: "Evening Dress H", category: "晚装", seed: "evening-h" },
];

const categories = ["全部", "女装", "街拍", "棚拍", "杂志", "休闲", "轻奢", "运动", "晚装"];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredCases =
    activeCategory === "全部"
      ? modelCases
      : modelCases.filter((c) => c.category === activeCategory);

  return (
    <div className="flex h-screen overflow-hidden bg-bg">
      {/* ─── Sidebar (Desktop) ─── */}
      <aside
        className={`hidden md:flex flex-col border-r border-border bg-bg transition-all duration-200 ${
          sidebarCollapsed ? "w-[68px]" : "w-[220px]"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-5 h-14 border-b border-border">
          <div className="w-7 h-7 rounded-full border-[1.5px] border-text flex items-center justify-center text-[11px] font-bold flex-shrink-0">
            $
          </div>
          {!sidebarCollapsed && (
            <span className="text-[13px] font-medium tracking-tight whitespace-nowrap">COIN AI</span>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-3 px-3 space-y-0.5">
          {sidebarNav.map((item) => (
            <div key={item.label} className={`sidebar-item ${item.active ? "active" : ""}`}>
              <item.icon size={18} strokeWidth={1.5} />
              {!sidebarCollapsed && <span>{item.label}</span>}
            </div>
          ))}
        </nav>

        {/* Collapse toggle */}
        <div className="px-3 py-3 border-t border-border">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="sidebar-item w-full"
          >
            <ChevronRight
              size={16}
              className={`transition-transform ${sidebarCollapsed ? "" : "rotate-180"}`}
            />
            {!sidebarCollapsed && <span>收起侧栏</span>}
          </button>
        </div>
      </aside>

      {/* ─── Main Content ─── */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* ─── Top Bar ─── */}
        <header className="flex items-center justify-between h-14 px-5 border-b border-border bg-bg flex-shrink-0">
          <div className="flex items-center gap-3">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden w-8 h-8 rounded-lg flex items-center justify-center hover:bg-bg-soft transition-colors"
            >
              <LayoutDashboard size={18} />
            </button>

            <div className="flex items-center gap-2">
              <h1 className="text-[13px] font-medium text-text">模特库</h1>
              <span className="text-[11px] text-text-tertiary">·</span>
              <span className="text-[11px] text-text-tertiary">{filteredCases.length} 个模特</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button className="btn-fill !py-1.5 !px-3.5 !text-[12px]">
              <Plus size={14} />
              创建模特
            </button>
          </div>
        </header>

        {/* ─── Content Area ─── */}
        <div className="flex-1 overflow-y-auto">
          {/* Welcome Banner */}
          <div className="px-6 pt-6 pb-4">
            <div className="rounded-xl bg-bg-soft border border-border p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-lg font-medium text-text mb-1">
                    AI 赋能服装行业新视觉引擎
                  </h2>
                  <p className="text-[13px] text-text-secondary leading-relaxed max-w-lg">
                    从白底模卡、模特形象生成，到服装试穿和品牌视觉测试。帮助品牌更快得到可用的商业模特图。
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="tab-pill !text-[11px] !py-1 !px-2.5 active">
                    内测中
                  </span>
                  <a href="#contact" className="btn-outline !py-1.5 !px-3.5 !text-[12px]">
                    申请内测
                    <ChevronRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="px-6 py-3 flex items-center gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`tab-pill whitespace-nowrap ${activeCategory === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Model Grid */}
          <div className="px-6 pb-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {filteredCases.map((item) => (
                <div key={item.id} className="image-card group">
                  {/* Placeholder image area */}
                  <div className="aspect-[3/4] bg-bg-muted relative">
                    {/* Placeholder gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-bg-soft to-bg-muted flex items-center justify-center">
                      <div className="text-center">
                        <User size={24} className="mx-auto text-text-tertiary mb-1" />
                        <span className="text-[10px] text-text-tertiary">{item.category}</span>
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end justify-between p-2 opacity-0 group-hover:opacity-100">
                      <button className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
                        <Heart size={12} className="text-black" />
                      </button>
                      <button className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
                        <Download size={12} className="text-black" />
                      </button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-2.5">
                    <p className="text-[12px] font-medium text-text truncate">{item.name}</p>
                    <p className="text-[11px] text-text-tertiary">{item.category}</p>
                  </div>
                </div>
              ))}

              {/* Add new card */}
              <div className="image-card !border-dashed flex items-center justify-center min-h-[200px]">
                <div className="text-center py-8">
                  <Plus size={20} className="mx-auto text-text-tertiary mb-1.5" />
                  <p className="text-[11px] text-text-tertiary">创建新模特</p>
                </div>
              </div>
            </div>
          </div>

          {/* ─── Features Section ─── */}
          <div className="px-6 py-12 border-t border-border">
            <div className="max-w-4xl mx-auto">
              <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-text-tertiary mb-3">
                CAPABILITIES
              </p>
              <h2 className="text-2xl font-medium text-text mb-8 tracking-tight">
                AI 视觉能力
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    icon: User,
                    title: "模特形象生成",
                    desc: "自定义面部特征、体型、风格，生成专属品牌模特形象",
                  },
                  {
                    icon: Shirt,
                    title: "服装试穿",
                    desc: "将服装自然穿在 AI 模特身上，呈现真实穿着效果",
                  },
                  {
                    icon: Palette,
                    title: "品牌视觉测试",
                    desc: "快速生成多种风格视觉方案，A/B 测试最优效果",
                  },
                ].map((f) => (
                  <div
                    key={f.title}
                    className="p-5 rounded-xl bg-bg-soft border border-border hover:border-border-hover transition-colors"
                  >
                    <f.icon size={20} strokeWidth={1.5} className="text-text-secondary mb-3" />
                    <h3 className="text-[13px] font-medium text-text mb-1.5">{f.title}</h3>
                    <p className="text-[12px] text-text-secondary leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Stats ─── */}
          <div className="px-6 py-12 border-t border-border bg-bg-soft">
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "200+", label: "服务客户" },
                { value: "50,000+", label: "产出作品" },
                { value: "1,000万+", label: "社媒总曝光" },
                { value: "50+", label: "活动场次" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-medium text-text tracking-tight mb-1">
                    {s.value}
                  </div>
                  <div className="text-[12px] text-text-secondary">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── CTA ─── */}
          <div id="contact" className="px-6 py-16 border-t border-border">
            <div className="max-w-xl mx-auto text-center">
              <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-text-tertiary mb-3">
                GET STARTED
              </p>
              <h2 className="text-2xl font-medium text-text mb-3 tracking-tight">
                让 AI 为你的服装生意加速
              </h2>
              <p className="text-[13px] text-text-secondary mb-6 leading-relaxed">
                预约免费咨询，获取定制方案
              </p>
              <div className="flex items-center justify-center gap-3">
                <a href="mailto:hello@youqiankeji.com" className="btn-fill">
                  预约咨询
                </a>
                <a href="tel:+8613800000000" className="btn-outline">
                  电话联系
                </a>
              </div>
            </div>
          </div>

          {/* ─── Footer ─── */}
          <footer className="px-6 py-6 border-t border-border bg-bg-soft">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border border-text flex items-center justify-center text-[8px] font-bold">
                  $
                </div>
                <span className="text-[11px] text-text-secondary">
                  &copy; {new Date().getFullYear()} 广州有钱科技技术有限公司
                </span>
              </div>
              <div className="flex items-center gap-4 text-[11px] text-text-tertiary">
                <span>粤ICP备XXXXXXXX号</span>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* ─── Mobile Sidebar Overlay ─── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileMenuOpen(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-[240px] bg-bg border-r border-border flex flex-col">
            <div className="flex items-center justify-between px-5 h-14 border-b border-border">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full border-[1.5px] border-text flex items-center justify-center text-[11px] font-bold">
                  $
                </div>
                <span className="text-[13px] font-medium">COIN AI</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-bg-soft"
              >
                <X size={16} />
              </button>
            </div>
            <nav className="flex-1 py-3 px-3 space-y-0.5">
              {sidebarNav.map((item) => (
                <div key={item.label} className={`sidebar-item ${item.active ? "active" : ""}`}>
                  <item.icon size={18} strokeWidth={1.5} />
                  <span>{item.label}</span>
                </div>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
}

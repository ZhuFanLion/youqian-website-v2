"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import Logo from "@/components/Logo";
import {
  Zap, TrendingUp, CreditCard, ArrowRight, LogOut, User,
  Image, Video, Clock, ChevronRight, LayoutGrid, Plus,
} from "lucide-react";

/* ── Mock data ── */
const MOCK = {
  credits: 8450,
  totalCredits: 10000,
  plan: "标准版",
  planExpiry: "2026-07-12",
  usedThisMonth: 1550,
  transactions: [
    { id: 1, date: "2026-06-12", desc: "AI 换装大片", type: "usage",   credits: -50,    balance: 8450 },
    { id: 2, date: "2026-06-12", desc: "AI 场景生成",  type: "usage",   credits: -50,    balance: 8500 },
    { id: 3, date: "2026-06-11", desc: "AI 模特生成",  type: "usage",   credits: -50,    balance: 8550 },
    { id: 4, date: "2026-06-11", desc: "AI 换装大片",  type: "usage",   credits: -50,    balance: 8600 },
    { id: 5, date: "2026-06-08", desc: "充值 100 元",  type: "recharge", credits: +2000, balance: 8650 },
    { id: 6, date: "2026-06-01", desc: "订阅赠送（标准版）", type: "bonus", credits: +10000, balance: 6650 },
  ],
  stats: [
    { label: "本月生图",  value: "31 张",  icon: Image },
    { label: "本月视频",  value: "0 段",   icon: Video },
    { label: "累计使用",  value: "87 次",  icon: LayoutGrid },
  ],
};

export default function DashboardPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-6 h-6 rounded-full border-2 border-[#9AFF07] border-t-transparent animate-spin" />
      </div>
    );
  }

  const pct = Math.round((MOCK.credits / MOCK.totalCredits) * 100);
  const displayName = user.user_metadata?.name || user.email?.split("@")[0] || "用户";

  return (
    <div className="min-h-screen bg-black">
      <div className="grain-overlay" />

      {/* Header */}
      <header className="top-header">
        <Link href="/"><Logo bg="dark" /></Link>
        <div className="flex items-center gap-3">
          <Link href="/recharge" className="btn-primary text-xs px-4 py-1.5 min-h-0 h-8">
            <Plus size={13} /> 充值积分
          </Link>
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-9 h-9 rounded-full bg-[#9AFF07]/15 border border-[#9AFF07]/25 flex items-center justify-center text-[#9AFF07] hover:bg-[#9AFF07]/25 transition-colors"
            >
              <User size={16} />
            </button>
            {menuOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
                <div className="absolute right-0 top-12 z-50 w-52 bg-[#1A1A1A] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                  <div className="px-4 py-3 border-b border-white/8">
                    <div className="text-sm font-medium text-white truncate">{displayName}</div>
                    <div className="text-xs text-white/40 truncate">{user.email}</div>
                  </div>
                  <Link href="/account" className="flex items-center gap-3 px-4 py-3 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors" onClick={() => setMenuOpen(false)}>
                    <User size={14} /> 账户设置
                  </Link>
                  <Link href="/subscribe" className="flex items-center gap-3 px-4 py-3 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors" onClick={() => setMenuOpen(false)}>
                    <CreditCard size={14} /> 订阅管理
                  </Link>
                  <button
                    onClick={() => { signOut(); router.push("/"); }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400/70 hover:text-red-400 hover:bg-red-500/5 transition-colors border-t border-white/8"
                  >
                    <LogOut size={14} /> 退出登录
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 lg:px-6 pt-20 pb-20">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-xl font-bold text-white">你好，{displayName} 👋</h1>
          <p className="text-sm text-white/40 mt-1">这里是你的 COIN AI 控制台</p>
        </div>

        {/* Credits + Plan row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {/* Credit card */}
          <div className="dashboard-card col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs text-white/40 font-medium uppercase tracking-wider">
                <Zap size={13} className="text-[#9AFF07]" /> 积分余额
              </div>
              <Link href="/recharge" className="text-xs text-[#9AFF07] hover:underline flex items-center gap-1">
                充值 <ChevronRight size={12} />
              </Link>
            </div>
            <div className="text-4xl font-extrabold text-white mb-1">
              {MOCK.credits.toLocaleString()}
            </div>
            <div className="text-xs text-white/30 mb-4">/ {MOCK.totalCredits.toLocaleString()} 本月赠送</div>
            {/* Progress bar */}
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-[#9AFF07] rounded-full transition-all" style={{ width: `${pct}%` }} />
            </div>
            <div className="text-xs text-white/30 mt-2">已使用 {MOCK.usedThisMonth.toLocaleString()} 积分（{100 - pct}%）</div>
          </div>

          {/* Plan card */}
          <div className="dashboard-card">
            <div className="flex items-center gap-2 text-xs text-white/40 font-medium uppercase tracking-wider mb-4">
              <CreditCard size={13} className="text-[#9AFF07]" /> 当前套餐
            </div>
            <div className="text-xl font-bold text-white mb-1">{MOCK.plan}</div>
            <div className="text-xs text-white/30 mb-4 flex items-center gap-1.5">
              <Clock size={11} /> 有效期至 {MOCK.planExpiry}
            </div>
            <Link href="/subscribe" className="text-xs text-[#9AFF07] hover:underline flex items-center gap-1">
              升级 Pro 版 <ArrowRight size={12} />
            </Link>
          </div>

          {/* Stats card */}
          <div className="dashboard-card">
            <div className="flex items-center gap-2 text-xs text-white/40 font-medium uppercase tracking-wider mb-4">
              <TrendingUp size={13} className="text-[#9AFF07]" /> 本月数据
            </div>
            <div className="space-y-3">
              {MOCK.stats.map((s) => (
                <div key={s.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <s.icon size={14} /> {s.label}
                  </div>
                  <span className="text-sm font-semibold text-white">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: "AI 换装", href: "/", icon: Image },
            { label: "AI 模特", href: "/", icon: User },
            { label: "充值积分", href: "/recharge", icon: Zap },
            { label: "订阅管理", href: "/subscribe", icon: CreditCard },
          ].map((a) => (
            <Link key={a.label} href={a.href} className="dashboard-action-btn">
              <a.icon size={18} className="text-[#9AFF07] mb-2" />
              <span className="text-sm text-white/70">{a.label}</span>
            </Link>
          ))}
        </div>

        {/* Transaction history */}
        <div>
          <h2 className="text-base font-semibold text-white mb-4">积分记录</h2>
          <div className="dashboard-card p-0 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/6">
                  <th className="text-left px-5 py-3 text-xs text-white/30 font-medium">时间</th>
                  <th className="text-left px-5 py-3 text-xs text-white/30 font-medium">描述</th>
                  <th className="text-right px-5 py-3 text-xs text-white/30 font-medium">积分</th>
                  <th className="text-right px-5 py-3 text-xs text-white/30 font-medium hidden sm:table-cell">余额</th>
                </tr>
              </thead>
              <tbody>
                {MOCK.transactions.map((tx, i) => (
                  <tr key={tx.id} className={`border-b border-white/4 ${i === MOCK.transactions.length - 1 ? "border-0" : ""}`}>
                    <td className="px-5 py-3.5 text-white/35 whitespace-nowrap">{tx.date}</td>
                    <td className="px-5 py-3.5 text-white/70">{tx.desc}</td>
                    <td className={`px-5 py-3.5 text-right font-semibold whitespace-nowrap ${tx.credits > 0 ? "text-[#9AFF07]" : "text-white/60"}`}>
                      {tx.credits > 0 ? "+" : ""}{tx.credits.toLocaleString()}
                    </td>
                    <td className="px-5 py-3.5 text-right text-white/35 hidden sm:table-cell">
                      {tx.balance.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

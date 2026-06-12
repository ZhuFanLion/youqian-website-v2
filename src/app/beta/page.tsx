"use client";

import { useState } from "react";
import Logo from "@/components/Logo";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  User,
  Building2,
  Mail,
  Phone,
  MessageSquare,
  ChevronDown,
} from "lucide-react";

const benefits = [
  "前 100 名用户月费永久锁定 ¥899",
  "免费试用 AI 模特生成 50 次",
  "一对一专属方案咨询",
  "优先体验新功能 & 定制需求通道",
];

const customerTypes = [
  { value: "factory", label: "服装工厂" },
  { value: "wholesale", label: "批发商" },
  { value: "cross-border", label: "跨境电商" },
  { value: "domestic-ecom", label: "国内电商" },
  { value: "other", label: "其他" },
];

export default function BetaPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="grain-overlay" />

      {/* Nav */}
      <nav className="top-header">
        <div className="flex items-center gap-3">
          <a href="/"><Logo bg="dark" /></a>
        </div>
      </nav>

      <main className="pt-20 sm:pt-24 pb-16 sm:pb-24">
        <div className="max-w-lg mx-auto px-4 sm:px-6">
          {/* Back link */}
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-[#9AFF07] transition-colors mb-6 sm:mb-8"
          >
            <ArrowLeft size={14} />
            返回首页
          </a>

          {!submitted ? (
            <>
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                申请内测
              </h1>
              <p className="text-sm text-white/40 mb-6 sm:mb-8">
                填写以下信息，我们会在 24 小时内与你联系。
              </p>

              {/* Benefits */}
              <div className="rounded-xl bg-[#0F0F0F] border border-white/5 p-4 sm:p-6 mb-6 sm:mb-8">
                <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/25 mb-3">
                  内测用户专属权益
                </p>
                <div className="space-y-2.5">
                  {benefits.map((b) => (
                    <div key={b} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#9AFF07]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-[#9AFF07]" />
                      </div>
                      <span className="text-sm text-white/50">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Customer Type */}
                <div>
                  <label className="block text-xs font-medium text-white/40 mb-1.5">客户类型 *</label>
                  <div className="relative">
                    <Building2 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" />
                    <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" />
                    <select
                      required
                      className="input-field pl-10 pr-10 appearance-none cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled>请选择你的业务类型</option>
                      {customerTypes.map((t) => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/40 mb-1.5">姓名 *</label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/20" />
                    <input type="text" required placeholder="你的姓名" className="input-field pl-10" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/40 mb-1.5">公司名称 *</label>
                  <div className="relative">
                    <Building2 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/20" />
                    <input type="text" required placeholder="公司或品牌名称" className="input-field pl-10" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/40 mb-1.5">邮箱 *</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/20" />
                    <input type="email" required placeholder="your@company.com" className="input-field pl-10" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/40 mb-1.5">手机号</label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/20" />
                    <input type="tel" placeholder="138-0000-0000" className="input-field pl-10" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/40 mb-1.5">需求描述</label>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-3.5 top-3.5 text-white/20" />
                    <textarea placeholder="简单描述你的需求，例如：月均 SKU 数量、主要销售平台..." className="input-field pl-10 pt-3" rows={4} />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center glow-green disabled:opacity-50"
                >
                  {loading ? "提交中..." : "提交申请"}
                  {!loading && <ArrowRight size={16} />}
                </button>
                <p className="text-[10px] text-white/20 text-center">
                  提交即表示同意我们的隐私政策和服务条款
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-12 sm:py-16">
              <div className="w-16 h-16 rounded-full bg-[#9AFF07]/10 flex items-center justify-center mx-auto mb-6">
                <Check size={28} className="text-[#9AFF07]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                申请已提交！
              </h2>
              <p className="text-sm text-white/40 mb-8 max-w-sm mx-auto">
                感谢你的兴趣，我们会在 24 小时内通过邮箱与你联系，请留意收件箱。
              </p>
              <a href="/" className="btn-primary">
                返回首页
                <ArrowLeft size={16} />
              </a>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

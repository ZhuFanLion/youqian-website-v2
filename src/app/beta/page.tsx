"use client";

import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  User,
  Building2,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";

const benefits = [
  "免费试用 AI 模特生成 50 次",
  "一对一专属方案咨询",
  "前 50 名用户享终身折扣",
  "优先体验新功能",
];

export default function BetaPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-bg">
      <div className="grain-overlay" />

      {/* Nav */}
      <nav className="glass-nav">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-[1.5px] border-text flex items-center justify-center text-[10px] sm:text-xs font-bold">
              $
            </div>
            <span className="text-sm font-semibold tracking-tight">COIN AI</span>
          </a>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main className="pt-20 sm:pt-24 pb-16 sm:pb-24">
        <div className="max-w-lg mx-auto px-4 sm:px-6">
          {/* Back link */}
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-text transition-colors mb-6 sm:mb-8"
          >
            <ArrowLeft size={14} />
            返回首页
          </a>

          {!submitted ? (
            <>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                申请内测
              </h1>
              <p className="text-sm sm:text-base text-text-secondary mb-6 sm:mb-8">
                填写以下信息，我们会在 24 小时内与你联系。
              </p>

              {/* Benefits */}
              <div className="feature-card mb-6 sm:mb-8 p-4 sm:p-6">
                <p className="text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase text-text-tertiary mb-3">
                  内测用户专属权益
                </p>
                <div className="space-y-2.5">
                  {benefits.map((b) => (
                    <div key={b} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-emerald-600" />
                      </div>
                      <span className="text-sm text-text-secondary">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-1.5">
                    姓名 *
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-tertiary" />
                    <input
                      type="text"
                      required
                      placeholder="你的姓名"
                      className="input-field pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-1.5">
                    公司名称 *
                  </label>
                  <div className="relative">
                    <Building2 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-tertiary" />
                    <input
                      type="text"
                      required
                      placeholder="公司或品牌名称"
                      className="input-field pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-1.5">
                    邮箱 *
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-tertiary" />
                    <input
                      type="email"
                      required
                      placeholder="your@company.com"
                      className="input-field pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-1.5">
                    手机号
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-tertiary" />
                    <input
                      type="tel"
                      placeholder="138-0000-0000"
                      className="input-field pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-1.5">
                    需求描述
                  </label>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-3.5 top-3.5 text-text-tertiary" />
                    <textarea
                      placeholder="简单描述你的需求，如：每天需要生成约 200 张模特图..."
                      className="input-field pl-10 pt-3"
                      rows={4}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-fill w-full text-center disabled:opacity-50"
                >
                  {loading ? "提交中..." : "提交申请"}
                  {!loading && <ArrowRight size={16} />}
                </button>

                <p className="text-[10px] sm:text-xs text-text-tertiary text-center">
                  提交即表示同意我们的隐私政策和服务条款
                </p>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-12 sm:py-16">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                <Check size={28} className="text-emerald-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                申请已提交！
              </h2>
              <p className="text-sm sm:text-base text-text-secondary mb-8 max-w-sm mx-auto">
                感谢你的兴趣，我们会在 24 小时内通过邮箱与你联系。
              </p>
              <a href="/" className="btn-fill">
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

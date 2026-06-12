"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import Logo from "@/components/Logo";
import { Check, ArrowRight, ArrowLeft, X, Zap } from "lucide-react";

const plans = [
  {
    id: "standard",
    tier: "标准版",
    price: 899,
    credits: "10,000 积分/月",
    images: "≈ 200 张图",
    discount: "充值享 95 折",
    featured: false,
    features: ["每月赠送 10,000 积分", "生图 50 积分/次", "视频 500 积分/次", "充值积分享 95 折", "高清下载无水印"],
  },
  {
    id: "pro",
    tier: "Pro 版",
    price: 5899,
    credits: "100,000 积分/月",
    images: "≈ 2,000 张图",
    discount: "充值享 85 折",
    featured: true,
    features: ["每月赠送 100,000 积分", "生图 50 积分/次", "视频 500 积分/次", "充值积分享 85 折", "批量处理优先队列", "专属客户成功经理"],
  },
];

type Step = "select" | "pay" | "success";

export default function SubscribePage() {
  const { user } = useAuth();
  const router = useRouter();
  const [step, setStep] = useState<Step>("select");
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
  const [payMethod, setPayMethod] = useState<"wechat" | "alipay">("wechat");
  const [paying, setPaying] = useState(false);

  const handlePay = () => {
    setPaying(true);
    setTimeout(() => {
      setPaying(false);
      setStep("success");
    }, 2000);
  };

  if (step === "success") {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        <div className="grain-overlay" />
        <nav className="top-header"><Link href="/"><Logo bg="dark" /></Link></nav>
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-sm">
            <div className="w-16 h-16 rounded-full bg-[#9AFF07]/10 flex items-center justify-center mx-auto mb-6">
              <Check size={28} className="text-[#9AFF07]" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">订阅成功！</h2>
            <p className="text-sm text-white/40 mb-2">
              {selectedPlan?.tier} 已激活，{selectedPlan?.credits} 已到账。
            </p>
            <p className="text-xs text-white/25 mb-8">（演示模式 — 实际支付对接上线后生效）</p>
            <Link href="/dashboard" className="btn-primary">
              进入控制台 <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (step === "pay" && selectedPlan) {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        <div className="grain-overlay" />
        <nav className="top-header"><Link href="/"><Logo bg="dark" /></Link></nav>
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="w-full max-w-sm">
            <button onClick={() => setStep("select")} className="flex items-center gap-1.5 text-xs text-white/40 hover:text-[#9AFF07] transition-colors mb-6">
              <ArrowLeft size={14} /> 返回选择套餐
            </button>
            <h2 className="text-xl font-bold text-white mb-1">确认订阅</h2>
            <p className="text-sm text-white/40 mb-6">{selectedPlan.tier} · ¥{selectedPlan.price}/月</p>

            {/* Order summary */}
            <div className="dashboard-card mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white/50">{selectedPlan.tier}</span>
                <span className="text-white">¥{selectedPlan.price.toLocaleString()}/月</span>
              </div>
              <div className="flex justify-between text-sm mb-3">
                <span className="text-white/50">赠送积分</span>
                <span className="text-[#9AFF07]">{selectedPlan.credits}</span>
              </div>
              <div className="border-t border-white/8 pt-3 flex justify-between font-semibold">
                <span className="text-white/70">本次应付</span>
                <span className="text-white text-lg">¥{selectedPlan.price.toLocaleString()}</span>
              </div>
            </div>

            {/* Payment method */}
            <div className="mb-6">
              <p className="text-xs text-white/40 mb-3">选择支付方式</p>
              <div className="grid grid-cols-2 gap-3">
                {(["wechat", "alipay"] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setPayMethod(m)}
                    className={`pay-method-btn ${payMethod === m ? "active" : ""}`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${m === "wechat" ? "bg-[#07C160]" : "bg-[#1677FF]"}`}>
                      <span className="text-white text-xs font-bold">{m === "wechat" ? "微" : "支"}</span>
                    </div>
                    <span className="text-sm">{m === "wechat" ? "微信支付" : "支付宝"}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mock QR */}
            <div className="dashboard-card text-center mb-6">
              <div className="w-32 h-32 mx-auto bg-white rounded-xl mb-3 flex items-center justify-center">
                <div className="grid grid-cols-5 gap-1 p-2 opacity-60">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className={`w-4 h-4 rounded-sm ${Math.random() > 0.4 ? "bg-black" : "bg-white"}`} />
                  ))}
                </div>
              </div>
              <p className="text-xs text-white/40">
                用{payMethod === "wechat" ? "微信" : "支付宝"}扫码支付 ¥{selectedPlan.price.toLocaleString()}
              </p>
              <p className="text-[10px] text-white/20 mt-1">演示二维码 · 不会产生真实扣款</p>
            </div>

            <button onClick={handlePay} disabled={paying} className="btn-primary w-full justify-center py-3 text-base glow-green disabled:opacity-50">
              {paying ? "处理中..." : "模拟支付成功"}
              {!paying && <Zap size={16} />}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="grain-overlay" />
      <nav className="top-header">
        <Link href="/"><Logo bg="dark" /></Link>
        <Link href="/dashboard" className="btn-ghost text-xs px-4 py-1.5 min-h-0 h-8">控制台</Link>
      </nav>

      <div className="flex-1 px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <Link href="/dashboard" className="flex items-center gap-1.5 text-xs text-white/40 hover:text-[#9AFF07] transition-colors mb-8">
            <ArrowLeft size={14} /> 返回控制台
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">订阅套餐</h1>
          <p className="text-sm text-white/40 mb-10">按月订阅，随时取消。积分永不过期。</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {plans.map((plan) => (
              <div key={plan.id} className={`pricing-card ${plan.featured ? "featured" : ""}`}>
                <div className="pricing-tier">{plan.tier}</div>
                <div className="pricing-price">
                  <span className="pricing-currency">¥</span>
                  <span className="pricing-amount">{plan.price.toLocaleString()}</span>
                </div>
                <div className="pricing-period">每月 · <span className="pricing-highlight">{plan.credits}</span></div>
                <div className="text-xs text-white/40 mb-4">{plan.images} · <span className="pricing-discount">{plan.discount}</span></div>
                <div className="pricing-divider" />
                <div className="space-y-1.5 mb-6">
                  {plan.features.map((f) => (
                    <div key={f} className="pricing-feature">
                      <div className="pricing-feature-icon"><Check size={10} className="text-[#9AFF07]" /></div>
                      {f}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => { setSelectedPlan(plan); setStep("pay"); }}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all ${plan.featured ? "bg-[#9AFF07] text-black hover:shadow-[0_0_20px_rgba(154,255,7,0.35)]" : "border border-white/15 text-white/70 hover:border-[#9AFF07]/40 hover:text-white"}`}
                >
                  订阅{plan.tier} <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-xl bg-white/3 border border-white/6 text-center">
            <p className="text-sm text-white/50 mb-2">需要更大规模？</p>
            <p className="text-xs text-white/30">企业版支持私有化部署、专属模型微调及 SLA 保障</p>
            <a href="mailto:business@coinai.com" className="inline-flex items-center gap-2 mt-3 text-sm text-[#9AFF07] hover:underline">
              联系商务 <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

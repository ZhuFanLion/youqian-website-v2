"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import Logo from "@/components/Logo";
import { ArrowLeft, Zap, Check, ArrowRight } from "lucide-react";

const amounts = [
  { label: "¥50",  credits: 1000,  bonus: 0 },
  { label: "¥100", credits: 2000,  bonus: 100 },
  { label: "¥200", credits: 4200,  bonus: 200,  tag: "热门" },
  { label: "¥500", credits: 11000, bonus: 1000, tag: "超值" },
  { label: "¥1000", credits: 23000, bonus: 3000, tag: "最划算" },
];

type Step = "select" | "pay" | "success";

export default function RechargePage() {
  const { user } = useAuth();
  const [step, setStep] = useState<Step>("select");
  const [selected, setSelected] = useState(amounts[2]);
  const [payMethod, setPayMethod] = useState<"wechat" | "alipay">("wechat");
  const [paying, setPaying] = useState(false);

  const handlePay = () => {
    setPaying(true);
    setTimeout(() => { setPaying(false); setStep("success"); }, 2000);
  };

  if (step === "success") {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        <div className="grain-overlay" />
        <nav className="top-header"><Link href="/"><Logo bg="dark" /></Link></nav>
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-sm">
            <div className="w-16 h-16 rounded-full bg-[#9AFF07]/10 flex items-center justify-center mx-auto mb-6">
              <Zap size={28} className="text-[#9AFF07]" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">充值成功！</h2>
            <p className="text-sm text-white/40 mb-1">
              <span className="text-[#9AFF07] font-semibold">+{(selected.credits + selected.bonus).toLocaleString()} 积分</span> 已到账
            </p>
            <p className="text-xs text-white/25 mb-8">（演示模式 — 实际支付对接上线后生效）</p>
            <Link href="/dashboard" className="btn-primary">
              查看余额 <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (step === "pay") {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        <div className="grain-overlay" />
        <nav className="top-header"><Link href="/"><Logo bg="dark" /></Link></nav>
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="w-full max-w-sm">
            <button onClick={() => setStep("select")} className="flex items-center gap-1.5 text-xs text-white/40 hover:text-[#9AFF07] transition-colors mb-6">
              <ArrowLeft size={14} /> 返回选择金额
            </button>
            <h2 className="text-xl font-bold text-white mb-1">确认充值</h2>
            <p className="text-sm text-white/40 mb-6">支付 {selected.label} · 到账 {(selected.credits + selected.bonus).toLocaleString()} 积分</p>

            <div className="dashboard-card mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white/50">充值金额</span>
                <span className="text-white">{selected.label}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white/50">基础积分</span>
                <span className="text-white">{selected.credits.toLocaleString()}</span>
              </div>
              {selected.bonus > 0 && (
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white/50">赠送积分</span>
                  <span className="text-[#9AFF07]">+{selected.bonus.toLocaleString()}</span>
                </div>
              )}
              <div className="border-t border-white/8 pt-3 flex justify-between font-semibold">
                <span className="text-white/70">到账合计</span>
                <span className="text-[#9AFF07] text-lg">{(selected.credits + selected.bonus).toLocaleString()} 积分</span>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-xs text-white/40 mb-3">选择支付方式</p>
              <div className="grid grid-cols-2 gap-3">
                {(["wechat", "alipay"] as const).map((m) => (
                  <button key={m} onClick={() => setPayMethod(m)} className={`pay-method-btn ${payMethod === m ? "active" : ""}`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${m === "wechat" ? "bg-[#07C160]" : "bg-[#1677FF]"}`}>
                      <span className="text-white text-xs font-bold">{m === "wechat" ? "微" : "支"}</span>
                    </div>
                    <span className="text-sm">{m === "wechat" ? "微信支付" : "支付宝"}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="dashboard-card text-center mb-6">
              <div className="w-32 h-32 mx-auto bg-white rounded-xl mb-3 flex items-center justify-center">
                <div className="grid grid-cols-5 gap-1 p-2 opacity-60">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className={`w-4 h-4 rounded-sm ${[0,1,5,6,12,18,19,23,24].includes(i) ? "bg-black" : Math.random() > 0.5 ? "bg-black" : "bg-white"}`} />
                  ))}
                </div>
              </div>
              <p className="text-xs text-white/40">用{payMethod === "wechat" ? "微信" : "支付宝"}扫码支付 {selected.label}</p>
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
        <div className="max-w-lg mx-auto">
          <Link href="/dashboard" className="flex items-center gap-1.5 text-xs text-white/40 hover:text-[#9AFF07] transition-colors mb-8">
            <ArrowLeft size={14} /> 返回控制台
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">充值积分</h1>
          <p className="text-sm text-white/40 mb-8">充值越多，赠送越多。积分永不过期。</p>

          <div className="grid grid-cols-1 gap-3 mb-8">
            {amounts.map((a) => (
              <button
                key={a.label}
                onClick={() => setSelected(a)}
                className={`relative flex items-center justify-between p-4 rounded-xl border transition-all text-left ${
                  selected.label === a.label
                    ? "border-[#9AFF07] bg-[#9AFF07]/5"
                    : "border-white/10 bg-white/2 hover:border-white/20"
                }`}
              >
                {a.tag && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#9AFF07]/15 text-[#9AFF07]">
                    {a.tag}
                  </span>
                )}
                <div className="flex items-center gap-4">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    selected.label === a.label ? "border-[#9AFF07]" : "border-white/20"
                  }`}>
                    {selected.label === a.label && <div className="w-2.5 h-2.5 rounded-full bg-[#9AFF07]" />}
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{a.label}</div>
                    <div className="text-xs text-white/40">
                      {a.credits.toLocaleString()} 积分
                      {a.bonus > 0 && <span className="text-[#9AFF07] ml-1">+{a.bonus.toLocaleString()} 赠送</span>}
                    </div>
                  </div>
                </div>
                <div className="text-right pr-8">
                  <div className="text-sm font-semibold text-white">{(a.credits + a.bonus).toLocaleString()}</div>
                  <div className="text-[10px] text-white/30">积分到账</div>
                </div>
              </button>
            ))}
          </div>

          <div className="dashboard-card mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap size={14} className="text-[#9AFF07]" />
              <span className="text-sm font-semibold text-white">订阅用户专享折扣</span>
            </div>
            <div className="text-xs text-white/40 space-y-1">
              <div className="flex justify-between"><span>标准版会员</span><span className="text-white/60">充值享 95 折</span></div>
              <div className="flex justify-between"><span>Pro 版会员</span><span className="text-white/60">充值享 85 折</span></div>
            </div>
            <div className="mt-3 pt-3 border-t border-white/6">
              <Link href="/subscribe" className="text-xs text-[#9AFF07] hover:underline flex items-center gap-1">
                了解订阅套餐 <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          <button
            onClick={() => setStep("pay")}
            className="btn-primary w-full justify-center py-3.5 text-base glow-green"
          >
            立即充值 {selected.label} <ArrowRight size={16} />
          </button>
          <p className="text-xs text-white/20 text-center mt-3">积分永不过期 · 可用于所有 AI 生成功能</p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import Logo from "@/components/Logo";
import { Mail, Lock, User, Building2, ChevronDown, ArrowRight, Check, Eye, EyeOff } from "lucide-react";

const customerTypes = [
  { value: "factory", label: "服装工厂" },
  { value: "wholesale", label: "批发商" },
  { value: "cross-border", label: "跨境电商" },
  { value: "domestic-ecom", label: "国内电商" },
  { value: "other", label: "其他" },
];

const benefits = [
  "注册即获 500 积分体验额度",
  "免费试用 AI 换装 10 次",
  "内测期专属折扣",
];

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPwd, setShowPwd] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    company: "",
    customerType: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password.length < 8) {
      setError("密码至少 8 位");
      return;
    }
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          name: form.name,
          company: form.company,
          customer_type: form.customerType,
        },
      },
    });

    if (error) {
      setError(
        error.message.includes("already registered")
          ? "该邮箱已注册，请直接登录"
          : error.message
      );
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        <div className="grain-overlay" />
        <nav className="top-header">
          <Link href="/"><Logo bg="dark" /></Link>
        </nav>
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-sm">
            <div className="w-16 h-16 rounded-full bg-[#9AFF07]/10 flex items-center justify-center mx-auto mb-6">
              <Check size={28} className="text-[#9AFF07]" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">注册成功！</h2>
            <p className="text-sm text-white/40 mb-8">
              我们已向 <span className="text-white/70">{form.email}</span> 发送了确认邮件，
              请点击邮件中的链接激活账号后登录。
            </p>
            <Link href="/login" className="btn-primary">
              前往登录 <ArrowRight size={16} />
            </Link>
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
      </nav>

      <div className="flex-1 flex items-start justify-center px-4 py-16">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-white mb-1">创建账号</h1>
          <p className="text-sm text-white/40 mb-6">
            已有账号？
            <Link href="/login" className="text-[#9AFF07] hover:underline ml-1">立即登录</Link>
          </p>

          {/* Benefits */}
          <div className="rounded-xl bg-[#9AFF07]/5 border border-[#9AFF07]/15 p-4 mb-6 flex gap-4 flex-wrap">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-2 text-xs text-white/50">
                <Check size={12} className="text-[#9AFF07] flex-shrink-0" />
                {b}
              </div>
            ))}
          </div>

          {error && (
            <div className="mb-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Customer type */}
            <div>
              <label className="block text-xs font-medium text-white/40 mb-1.5">业务类型 *</label>
              <div className="relative">
                <Building2 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                <select required value={form.customerType} onChange={set("customerType")} className="input-field pl-10 pr-10 appearance-none cursor-pointer">
                  <option value="" disabled>请选择你的业务类型</option>
                  {customerTypes.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-xs font-medium text-white/40 mb-1.5">姓名 *</label>
              <div className="relative">
                <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                <input type="text" required value={form.name} onChange={set("name")} placeholder="你的姓名" className="input-field pl-10" />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="block text-xs font-medium text-white/40 mb-1.5">公司名称</label>
              <div className="relative">
                <Building2 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                <input type="text" value={form.company} onChange={set("company")} placeholder="公司或品牌名称（选填）" className="input-field pl-10" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-white/40 mb-1.5">邮箱 *</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                <input type="email" required value={form.email} onChange={set("email")} placeholder="your@email.com" className="input-field pl-10" />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-medium text-white/40 mb-1.5">密码 * <span className="text-white/20 font-normal">（至少 8 位）</span></label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                <input
                  type={showPwd ? "text" : "password"}
                  required
                  minLength={8}
                  value={form.password}
                  onChange={set("password")}
                  placeholder="••••••••"
                  className="input-field pl-10 pr-10"
                />
                <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors">
                  {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center glow-green py-3 text-base mt-2 disabled:opacity-50"
            >
              {loading ? "注册中..." : "创建账号"}
              {!loading && <ArrowRight size={16} />}
            </button>
          </form>

          <p className="text-[11px] text-white/20 text-center mt-6">
            注册即表示同意
            <a href="#" className="hover:text-white/40 transition-colors mx-1">服务条款</a>
            和
            <a href="#" className="hover:text-white/40 transition-colors mx-1">隐私政策</a>
          </p>
        </div>
      </div>
    </div>
  );
}

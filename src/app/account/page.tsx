"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import Logo from "@/components/Logo";
import { ArrowLeft, User, Lock, Check, Eye, EyeOff, AlertCircle } from "lucide-react";

export default function AccountPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [savingProfile, setSavingProfile] = useState(false);
  const [profileMsg, setProfileMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  const [currentPwd, setCurrentPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [savingPwd, setSavingPwd] = useState(false);
  const [pwdMsg, setPwdMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      setName(user.user_metadata?.name || "");
      setCompany(user.user_metadata?.company || "");
    }
  }, [user]);

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-6 h-6 rounded-full border-2 border-[#9AFF07] border-t-transparent animate-spin" />
      </div>
    );
  }

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingProfile(true);
    setProfileMsg(null);
    const { error } = await supabase.auth.updateUser({
      data: { name, company },
    });
    setSavingProfile(false);
    setProfileMsg(error
      ? { type: "err", text: "保存失败：" + error.message }
      : { type: "ok", text: "资料已更新" }
    );
  };

  const handleChangePwd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPwd.length < 8) {
      setPwdMsg({ type: "err", text: "新密码至少 8 位" });
      return;
    }
    setSavingPwd(true);
    setPwdMsg(null);
    const { error } = await supabase.auth.updateUser({ password: newPwd });
    setSavingPwd(false);
    if (error) {
      setPwdMsg({ type: "err", text: "修改失败：" + error.message });
    } else {
      setPwdMsg({ type: "ok", text: "密码已修改" });
      setCurrentPwd("");
      setNewPwd("");
    }
  };

  const displayEmail = user.email || "";

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="grain-overlay" />
      <header className="top-header">
        <Link href="/"><Logo bg="dark" /></Link>
        <Link href="/dashboard" className="btn-ghost text-xs px-4 py-1.5 min-h-0 h-8">控制台</Link>
      </header>

      <main className="flex-1 px-4 py-20">
        <div className="max-w-lg mx-auto">
          <Link href="/dashboard" className="flex items-center gap-1.5 text-xs text-white/40 hover:text-[#9AFF07] transition-colors mb-8">
            <ArrowLeft size={14} /> 返回控制台
          </Link>
          <h1 className="text-2xl font-bold text-white mb-8">账户设置</h1>

          {/* Profile section */}
          <div className="dashboard-card mb-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#9AFF07]/10 flex items-center justify-center">
                <User size={15} className="text-[#9AFF07]" />
              </div>
              <h2 className="text-base font-semibold text-white">基本信息</h2>
            </div>

            <div className="mb-4 px-4 py-3 rounded-xl bg-white/3 border border-white/6">
              <div className="text-xs text-white/30 mb-0.5">邮箱（不可修改）</div>
              <div className="text-sm text-white/60">{displayEmail}</div>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-white/40 mb-1.5">姓名</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="你的姓名"
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-white/40 mb-1.5">公司名称</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="公司或品牌名称（选填）"
                  className="input-field"
                />
              </div>

              {profileMsg && (
                <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm ${
                  profileMsg.type === "ok"
                    ? "bg-[#9AFF07]/8 border border-[#9AFF07]/20 text-[#9AFF07]"
                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                }`}>
                  {profileMsg.type === "ok" ? <Check size={14} /> : <AlertCircle size={14} />}
                  {profileMsg.text}
                </div>
              )}

              <button type="submit" disabled={savingProfile} className="btn-primary disabled:opacity-50">
                {savingProfile ? "保存中..." : "保存资料"}
              </button>
            </form>
          </div>

          {/* Password section */}
          <div className="dashboard-card">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#9AFF07]/10 flex items-center justify-center">
                <Lock size={15} className="text-[#9AFF07]" />
              </div>
              <h2 className="text-base font-semibold text-white">修改密码</h2>
            </div>

            <form onSubmit={handleChangePwd} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-white/40 mb-1.5">当前密码</label>
                <div className="relative">
                  <input
                    type={showCurrent ? "text" : "password"}
                    value={currentPwd}
                    onChange={(e) => setCurrentPwd(e.target.value)}
                    placeholder="••••••••"
                    className="input-field pr-10"
                  />
                  <button type="button" onClick={() => setShowCurrent(!showCurrent)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors">
                    {showCurrent ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-white/40 mb-1.5">新密码 <span className="text-white/20 font-normal">（至少 8 位）</span></label>
                <div className="relative">
                  <input
                    type={showNew ? "text" : "password"}
                    value={newPwd}
                    onChange={(e) => setNewPwd(e.target.value)}
                    placeholder="••••••••"
                    className="input-field pr-10"
                    minLength={8}
                  />
                  <button type="button" onClick={() => setShowNew(!showNew)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors">
                    {showNew ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {pwdMsg && (
                <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm ${
                  pwdMsg.type === "ok"
                    ? "bg-[#9AFF07]/8 border border-[#9AFF07]/20 text-[#9AFF07]"
                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                }`}>
                  {pwdMsg.type === "ok" ? <Check size={14} /> : <AlertCircle size={14} />}
                  {pwdMsg.text}
                </div>
              )}

              <button type="submit" disabled={savingPwd} className="btn-ghost disabled:opacity-50">
                {savingPwd ? "修改中..." : "修改密码"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

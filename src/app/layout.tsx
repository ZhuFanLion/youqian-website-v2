import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "有钱科技 | COIN AI — AI 赋能服装行业新视觉引擎",
  description:
    "COIN AI 提供AI模特生成、智能服装试穿、品牌视觉测试等一站式AI视觉解决方案。成本降低90%，速度提升10倍。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}

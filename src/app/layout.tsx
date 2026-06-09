import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "有钱科技 | COIN AI — AI赋能服装行业新视觉引擎",
  description:
    "广州有钱科技技术有限公司，为服装品牌和电商商家提供AI模特图片视频、社媒IP打造、线下活动引流等一站式数字营销解决方案。",
  keywords: ["AI模特", "电商视觉", "服装行业", "AI图片生成", "有钱科技", "COIN AI"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  );
}

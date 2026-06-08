import Link from "next/link";

const footerLinks = {
  services: [
    { href: "#services", label: "AI模特图片与视频" },
    { href: "#services", label: "社媒IP打造" },
    { href: "#services", label: "线下活动引流" },
  ],
  company: [
    { href: "#", label: "关于我们" },
    { href: "#testimonials", label: "客户评价" },
    { href: "#contact", label: "联系我们" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-muted-light border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full border-2 border-foreground flex items-center justify-center text-xs font-bold">
                $
              </div>
              <span className="text-sm font-medium tracking-tight">COIN AI</span>
            </div>
            <p className="text-muted text-sm max-w-md leading-relaxed">
              广州有钱科技技术有限公司，专注为服装行业提供AI视觉生成、社媒IP运营、线下活动引流等一站式数字营销解决方案。
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium text-sm mb-4 text-foreground">服务项目</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-sm mb-4 text-foreground">公司</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} 广州有钱科技技术有限公司 版权所有
          </p>
          <div className="flex gap-6 text-xs text-muted">
            <span>粤ICP备XXXXXXXX号</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

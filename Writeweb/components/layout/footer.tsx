import Link from "next/link"

const footerLinks = {
  product: {
    title: "产品",
    links: [
      { name: "书籍写作软件", href: "/book-writing-software" },
      { name: "小说写作软件", href: "/novel-writing-software" },
      { name: "剧本写作软件", href: "/screenwriting-software" },
      { name: "定价", href: "/pricing" },
    ],
  },
  ai: {
    title: "AI工具",
    links: [
      { name: "AI书籍写作", href: "/ai-book-writer" },
      { name: "AI故事生成器", href: "/ai-story-generator" },
      { name: "情节生成器", href: "/plot-generator" },
      { name: "写作提示生成器", href: "/writing-prompt-generator" },
    ],
  },
  resources: {
    title: "资源",
    links: [
      { name: "博客", href: "/blog" },
      { name: "知识中心", href: "/knowledge-center" },
      { name: "更新日志", href: "/changelog" },
      { name: "帮助中心", href: "/help" },
    ],
  },
  company: {
    title: "公司",
    links: [
      { name: "关于我们", href: "/about" },
      { name: "职业机会", href: "/careers" },
      { name: "联盟计划", href: "/affiliates" },
      { name: "联系我们", href: "/contact" },
    ],
  },
  legal: {
    title: "法律",
    links: [
      { name: "服务条款", href: "/terms" },
      { name: "隐私政策", href: "/privacy" },
      { name: "Cookie政策", href: "/cookies" },
    ],
  },
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">Squibler</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              AI驱动的写作软件，帮助作家更快更好地完成创作。
            </p>
          </div>

          {/* Link Sections */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Squibler. 保留所有权利。
            </p>
            <div className="flex items-center gap-6">
              <Link href="https://twitter.com" className="text-background/60 hover:text-background transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link href="https://linkedin.com" className="text-background/60 hover:text-background transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              <Link href="https://facebook.com" className="text-background/60 hover:text-background transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

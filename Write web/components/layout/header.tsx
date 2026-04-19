"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = {
  squiblerAI: {
    title: "Squibler AI",
    items: [
      { name: "AI书籍写作", href: "/ai-book-writer", description: "使用AI创作完整书籍" },
      { name: "AI小说写作", href: "/ai-novel-writer", description: "AI辅助小说创作" },
      { name: "AI剧本写作", href: "/ai-screenplay-writer", description: "专业剧本AI创作工具" },
      { name: "AI故事生成器", href: "/ai-story-generator", description: "一键生成精彩故事" },
    ],
  },
  writingSoftware: {
    title: "写作软件",
    items: [
      { name: "书籍写作软件", href: "/book-writing-software", description: "专业书籍创作平台" },
      { name: "小说写作软件", href: "/novel-writing-software", description: "小说家的最佳选择" },
      { name: "剧本写作软件", href: "/screenwriting-software", description: "好莱坞级剧本工具" },
    ],
  },
  tools: {
    title: "写作工具",
    items: [
      { name: "情节生成器", href: "/plot-generator", description: "激发创意灵感" },
      { name: "写作提示生成器", href: "/writing-prompt-generator", description: "获取写作灵感" },
      { name: "AI剧本生成器", href: "/ai-screenplay-generator", description: "快速生成剧本" },
    ],
  },
  resources: {
    title: "资源",
    items: [
      { name: "博客", href: "/blog", description: "写作技巧与行业资讯" },
      { name: "知识中心", href: "/knowledge-center", description: "学习写作知识" },
      { name: "更新日志", href: "/changelog", description: "产品最新动态" },
    ],
  },
}

function NavDropdown({ 
  title, 
  items,
  isOpen,
  onToggle
}: { 
  title: string
  items: { name: string; href: string; description: string }[]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="relative group">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-72 bg-card rounded-xl shadow-lg border border-border p-2 z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 rounded-lg hover:bg-accent transition-colors"
            >
              <div className="font-medium text-foreground">{item.name}</div>
              <div className="text-sm text-muted-foreground mt-0.5">{item.description}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleToggle = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-foreground">Squibler</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavDropdown
              title={navigation.squiblerAI.title}
              items={navigation.squiblerAI.items}
              isOpen={openDropdown === 'squiblerAI'}
              onToggle={() => handleToggle('squiblerAI')}
            />
            <NavDropdown
              title={navigation.writingSoftware.title}
              items={navigation.writingSoftware.items}
              isOpen={openDropdown === 'writingSoftware'}
              onToggle={() => handleToggle('writingSoftware')}
            />
            <NavDropdown
              title={navigation.tools.title}
              items={navigation.tools.items}
              isOpen={openDropdown === 'tools'}
              onToggle={() => handleToggle('tools')}
            />
            <NavDropdown
              title={navigation.resources.title}
              items={navigation.resources.items}
              isOpen={openDropdown === 'resources'}
              onToggle={() => handleToggle('resources')}
            />
            <Link
              href="/pricing"
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              定价
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                登录
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                免费试用
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
            {Object.entries(navigation).map(([key, section]) => (
              <div key={key}>
                <div className="font-medium text-foreground mb-2">{section.title}</div>
                <div className="space-y-1 pl-4">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link
              href="/pricing"
              className="block py-2 font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              定价
            </Link>
            <div className="flex gap-3 pt-4 border-t border-border">
              <Link href="/login" className="flex-1">
                <Button variant="outline" className="w-full">登录</Button>
              </Link>
              <Link href="/signup" className="flex-1">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">免费试用</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

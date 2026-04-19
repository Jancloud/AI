"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X, BookOpen, PenTool, Wrench, FileText, Sparkles, Monitor, Lightbulb, Newspaper, BookMarked, Clapperboard, LightbulbIcon, History, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = {
  squiblerAI: {
    title: "Squibler AI",
    icon: Sparkles,
    items: [
      { name: "AI书籍写作", href: "/ai-book-writer", description: "使用AI创作完整书籍", icon: BookOpen },
      { name: "AI小说写作", href: "/ai-novel-writer", description: "AI辅助小说创作", icon: PenTool },
      { name: "AI剧本写作", href: "/ai-screenplay-writer", description: "专业剧本AI创作工具", icon: Clapperboard },
      { name: "AI故事生成器", href: "/ai-story-generator", description: "一键生成精彩故事", icon: Sparkles },
    ],
  },
  writingSoftware: {
    title: "写作软件",
    icon: Monitor,
    items: [
      { name: "书籍写作软件", href: "/book-writing-software", description: "专业书籍创作平台", icon: BookMarked },
      { name: "小说写作软件", href: "/novel-writing-software", description: "小说家的最佳选择", icon: PenTool },
      { name: "剧本写作软件", href: "/screenwriting-software", description: "好莱坞级剧本工具", icon: Clapperboard },
    ],
  },
  tools: {
    title: "写作工具",
    icon: Wrench,
    items: [
      { name: "情节生成器", href: "/plot-generator", description: "激发创意灵感", icon: Lightbulb },
      { name: "写作提示生成器", href: "/writing-prompt-generator", description: "获取写作灵感", icon: LightbulbIcon },
      { name: "AI剧本生成器", href: "/ai-screenplay-generator", description: "快速生成剧本", icon: FileText },
    ],
  },
  resources: {
    title: "资源",
    icon: FileText,
    items: [
      { name: "博客", href: "/blog", description: "写作技巧与行业资讯", icon: Newspaper },
      { name: "知识中心", href: "/knowledge-center", description: "学习写作知识", icon: BookOpen },
      { name: "更新日志", href: "/changelog", description: "产品最新动态", icon: History },
      { name: "帮助中心", href: "/help", description: "常见问题与支持", icon: HelpCircle },
    ],
  },
}

function NavDropdown({ 
  title, 
  items,
  icon: Icon,
  isOpen,
  onToggle,
  onHover
}: { 
  title: string
  items: { name: string; href: string; description: string; icon: any }[]
  icon: any
  isOpen: boolean
  onToggle: () => void
  onHover: (isOpen: boolean) => void
}) {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onHover(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onHover])

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    onHover(true)
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      onHover(false)
    }, 150)
  }

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onToggle()
  }

  return (
    <div 
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleClick}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-accent/50"
      >
        <Icon className="w-4 h-4" />
        {title}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-2 w-80 bg-card rounded-xl shadow-xl border border-border overflow-hidden z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-2">
            {items.map((item) => {
              const ItemIcon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-accent transition-all duration-150 group"
                >
                  <div className="mt-0.5 p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <ItemIcon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="px-4 py-3 bg-muted/50 border-t border-border">
            <Link 
              href="/pricing" 
              className="text-xs text-primary hover:underline font-medium"
            >
              查看全部产品 →
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null)

  const handleToggle = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key)
  }

  const handleHover = (key: string, isOpen: boolean) => {
    setHoveredDropdown(isOpen ? key : null)
  }

  const isDropdownOpen = (key: string) => {
    return openDropdown === key || hoveredDropdown === key
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
              icon={navigation.squiblerAI.icon}
              isOpen={isDropdownOpen('squiblerAI')}
              onToggle={() => handleToggle('squiblerAI')}
              onHover={(isOpen) => handleHover('squiblerAI', isOpen)}
            />
            <NavDropdown
              title={navigation.writingSoftware.title}
              items={navigation.writingSoftware.items}
              icon={navigation.writingSoftware.icon}
              isOpen={isDropdownOpen('writingSoftware')}
              onToggle={() => handleToggle('writingSoftware')}
              onHover={(isOpen) => handleHover('writingSoftware', isOpen)}
            />
            <NavDropdown
              title={navigation.tools.title}
              items={navigation.tools.items}
              icon={navigation.tools.icon}
              isOpen={isDropdownOpen('tools')}
              onToggle={() => handleToggle('tools')}
              onHover={(isOpen) => handleHover('tools', isOpen)}
            />
            <NavDropdown
              title={navigation.resources.title}
              items={navigation.resources.items}
              icon={navigation.resources.icon}
              isOpen={isDropdownOpen('resources')}
              onToggle={() => handleToggle('resources')}
              onHover={(isOpen) => handleHover('resources', isOpen)}
            />
            <Link
              href="/pricing"
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-accent/50"
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
        <div className="lg:hidden bg-background border-t border-border max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {Object.entries(navigation).map(([key, section]) => (
              <MobileDropdown
                key={key}
                title={section.title}
                icon={section.icon}
                items={section.items}
                isOpen={openDropdown === key}
                onToggle={() => handleToggle(key)}
                onClose={() => setMobileMenuOpen(false)}
              />
            ))}
            <Link
              href="/pricing"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <FileText className="w-4 h-4" />
              </div>
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

function MobileDropdown({
  title,
  icon: Icon,
  items,
  isOpen,
  onToggle,
  onClose
}: {
  title: string
  icon: any
  items: { name: string; href: string; description: string; icon: any }[]
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}) {
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-accent/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Icon className="w-4 h-4" />
          </div>
          <span className="font-medium text-foreground">{title}</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="border-t border-border bg-muted/30">
          {items.map((item) => {
            const ItemIcon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-start gap-3 px-4 py-3 pl-12 hover:bg-accent/50 transition-colors"
                onClick={onClose}
              >
                <div className="mt-0.5 p-1.5 rounded bg-primary/10 text-primary">
                  <ItemIcon className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-foreground text-sm">{item.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

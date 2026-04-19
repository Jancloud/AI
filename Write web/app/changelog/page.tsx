import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Check, Zap, Sparkles, Bug, Rocket } from "lucide-react"

const changelogs = [
  {
    version: "2.8.0",
    date: "2026-04-18",
    type: "feature" as const,
    title: "AI剧本生成器正式上线",
    changes: [
      "新增AI剧本生成器功能，支持快速生成专业格式剧本",
      "优化剧本格式化工具，自动应用行业标准",
      "新增场景生成和对话创作AI功能",
      "改进用户界面，提升操作体验",
    ],
  },
  {
    version: "2.7.0",
    date: "2026-04-10",
    type: "feature" as const,
    title: "团队协作功能增强",
    changes: [
      "新增团队成员权限管理",
      "实时协作编辑功能",
      "版本历史对比工具",
      "团队项目模板库",
    ],
  },
  {
    version: "2.6.1",
    date: "2026-04-05",
    type: "improvement" as const,
    title: "性能优化和错误修复",
    changes: [
      "优化AI响应速度，提升30%生成速度",
      "修复编辑器在某些浏览器中的兼容性问题",
      "改进移动端显示效果",
      "修复导出PDF时的格式问题",
    ],
  },
  {
    version: "2.6.0",
    date: "2026-03-28",
    type: "feature" as const,
    title: "写作提示生成器更新",
    changes: [
      "新增1000+写作提示模板",
      "支持自定义提示参数",
      "提示收藏和管理功能",
      "每日推荐提示功能",
    ],
  },
  {
    version: "2.5.0",
    date: "2026-03-20",
    type: "feature" as const,
    title: "多语言支持",
    changes: [
      "支持中文、英文、日文、韩文界面",
      "AI多语言写作能力增强",
      "多语言拼写检查",
      "翻译辅助功能",
    ],
  },
  {
    version: "2.4.0",
    date: "2026-03-10",
    type: "improvement" as const,
    title: "用户体验改进",
    changes: [
      "全新设计的用户界面",
      "暗黑模式支持",
      "快捷键自定义功能",
      "离线写作支持",
    ],
  },
]

const typeIcons = {
  feature: <Rocket className="w-5 h-5" />,
  improvement: <Zap className="w-5 h-5" />,
  bugfix: <Bug className="w-5 h-5" />,
}

const typeLabels = {
  feature: "新功能",
  improvement: "改进",
  bugfix: "修复",
}

const typeColors = {
  feature: "bg-green-500",
  improvement: "bg-blue-500",
  bugfix: "bg-orange-500",
}

export default function ChangelogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                更新日志
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                产品最新动态
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                了解Squibler的最新功能更新、改进和修复记录。
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

              {/* Changelog items */}
              <div className="space-y-12">
                {changelogs.map((log, index) => (
                  <div key={index} className="relative flex gap-6">
                    {/* Timeline dot */}
                    <div className={`relative z-10 w-16 h-16 ${typeColors[log.type]} rounded-full flex items-center justify-center shrink-0`}>
                      {typeIcons[log.type]}
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-card rounded-xl border border-border p-6">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <Badge className={`${typeColors[log.type]} text-white`}>
                          v{log.version}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{log.date}</span>
                        <span className="text-sm font-medium text-primary">{typeLabels[log.type]}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        {log.title}
                      </h3>
                      <ul className="space-y-2">
                        {log.changes.map((change, changeIndex) => (
                          <li key={changeIndex} className="flex items-start gap-2 text-muted-foreground">
                            <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>{change}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              体验最新功能
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              立即注册，免费试用所有新功能。
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

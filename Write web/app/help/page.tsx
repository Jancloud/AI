import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Search, BookOpen, MessageCircle, LifeBuoy, HelpCircle, ArrowRight, ChevronRight } from "lucide-react"

const helpCategories = [
  {
    name: "入门指南",
    icon: BookOpen,
    description: "新手快速上手教程",
    articles: 15,
    articles_list: ["账户注册与设置", "项目创建与管理", "编辑器基础操作", "AI功能使用指南"],
  },
  {
    name: "写作工具",
    icon: MessageCircle,
    description: "了解各种写作功能的使用方法",
    articles: 22,
    articles_list: ["AI写作助手", "格式化工具", "导出和发布", "协作功能"],
  },
  {
    name: "账户管理",
    icon: LifeBuoy,
    description: "账户设置和订阅管理",
    articles: 12,
    articles_list: ["修改个人信息", "订阅计划管理", "付款方式", "取消订阅"],
  },
  {
    name: "常见问题",
    icon: HelpCircle,
    description: "热门问题的快速解答",
    articles: 18,
    articles_list: ["AI生成内容版权", "数据安全与隐私", "技术故障排查", "联系技术支持"],
  },
]

const faqItems = [
  {
    question: "如何开始使用Squibler？",
    answer: "注册免费账户后，您可以立即创建新项目并开始写作。我们提供详细的新手教程，帮助您快速熟悉所有功能。"
  },
  {
    question: "AI功能如何工作？",
    answer: "我们的AI基于先进的语言模型，能够理解上下文并提供写作建议、内容生成、风格优化等功能。专业版和大师版用户可以使用AI功能。"
  },
  {
    question: "我的数据安全吗？",
    answer: "我们使用银行级加密技术保护您的数据。您的作品完全属于您，我们不会访问或使用您的内容。您可以随时导出所有数据。"
  },
  {
    question: "如何升级或降级订阅？",
    answer: "在账户设置中的\"订阅管理\"部分，您可以随时升级或降级计划。升级立即生效，降级在当前计费周期结束后生效。"
  },
]

export default function HelpPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                帮助中心
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                我们能帮您什么？
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                搜索知识库或浏览分类，找到您需要的答案。
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="搜索帮助文章..."
                  className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">浏览帮助中心</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {helpCategories.map((category) => {
                const Icon = category.icon
                return (
                  <div key={category.name} className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">{category.name}</h3>
                        <p className="text-muted-foreground text-sm">{category.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {category.articles_list.map((article, index) => (
                        <li key={index}>
                          <Link 
                            href={`/help/${category.name.toLowerCase()}/${article.toLowerCase()}`}
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                          >
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            {article}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-6 border-t border-border">
                      <Link 
                        href={`/help/${category.name.toLowerCase()}`}
                        className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-sm"
                      >
                        查看全部 {category.articles} 篇文章 <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">常见问题</h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-card rounded-xl border border-border p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed ml-8">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              还需要帮助？
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              如果找不到您需要的答案，请随时联系我们的支持团队。
            </p>
            <Button size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
              联系技术支持
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

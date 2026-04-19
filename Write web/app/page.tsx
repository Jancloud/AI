import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { MediaLogos } from "@/components/sections/media-logos"
import { FeaturesGrid } from "@/components/sections/features-grid"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"
import { 
  BookOpen, 
  Sparkles, 
  Zap, 
  Shield, 
  Globe, 
  Users,
  FileText,
  Wand2,
  BarChart3,
  Cloud,
  Lock,
  Smartphone
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Sparkles,
    title: "AI写作助手",
    description: "智能AI帮助您克服写作瓶颈，提供创意建议和内容优化。"
  },
  {
    icon: BookOpen,
    title: "专业写作工具",
    description: "为书籍、小说、剧本等各类型写作提供专业的格式和模板。"
  },
  {
    icon: Zap,
    title: "快速生成",
    description: "一键生成故事大纲、角色设定、对话场景等写作元素。"
  },
  {
    icon: Cloud,
    title: "云端同步",
    description: "所有内容自动保存到云端，随时随地继续您的创作。"
  },
  {
    icon: Lock,
    title: "安全可靠",
    description: "您的作品受到严格保护，只有您能访问自己的内容。"
  },
  {
    icon: Smartphone,
    title: "多端支持",
    description: "支持网页、桌面和移动设备，随时随地进行创作。"
  }
]

const aiFeatures = [
  {
    icon: Wand2,
    title: "智能续写",
    description: "AI根据您的写作风格，智能续写下一段落内容。"
  },
  {
    icon: FileText,
    title: "大纲生成",
    description: "输入主题，AI自动生成完整的故事大纲和章节规划。"
  },
  {
    icon: Users,
    title: "角色塑造",
    description: "AI帮助您创建丰满立体的人物角色和背景故事。"
  },
  {
    icon: BarChart3,
    title: "写作分析",
    description: "分析您的写作风格，提供改进建议和数据洞察。"
  }
]

const faqItems = [
  {
    question: "Squibler适合哪些类型的作家？",
    answer: "Squibler适合所有类型的作家，包括小说家、编剧、博客作者、学术写作者等。我们提供专业的工具和模板，满足不同写作需求。"
  },
  {
    question: "AI写作功能如何工作？",
    answer: "我们的AI基于先进的语言模型，能够理解您的写作风格和上下文，提供创意建议、续写内容、生成大纲等功能。AI是您的写作助手，而非替代者。"
  },
  {
    question: "我的作品安全吗？",
    answer: "绝对安全。我们使用银行级加密技术保护您的数据，您的作品完全属于您，我们不会用于任何其他目的。"
  },
  {
    question: "可以免费试用吗？",
    answer: "是的，我们提供14天免费试用，让您充分体验Squibler的所有功能。无需信用卡即可开始。"
  },
  {
    question: "支持离线使用吗？",
    answer: "是的，我们的桌面应用支持离线写作，内容会在您重新连接网络时自动同步到云端。"
  },
  {
    question: "如何取消订阅？",
    answer: "您可以随时在账户设置中取消订阅，不会产生任何额外费用。取消后仍可使用到当前计费周期结束。"
  }
]

function ProductShowcase() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            专为作家打造的写作平台
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            从灵感到出版，Squibler为您的整个创作过程提供支持
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">书籍写作</h3>
                  <p className="text-muted-foreground">章节管理、目录生成、进度追踪</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">剧本创作</h3>
                  <p className="text-muted-foreground">专业剧本格式、场景管理、角色追踪</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">世界观构建</h3>
                  <p className="text-muted-foreground">地图制作、时间线、设定文档</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">版本控制</h3>
                  <p className="text-muted-foreground">自动保存、历史版本、一键恢复</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground">智能编辑器预览</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WritingTypesSection() {
  const types = [
    {
      title: "书籍写作",
      description: "非虚构、传记、教程等各类书籍创作",
      href: "/book-writing-software",
      icon: BookOpen
    },
    {
      title: "小说创作",
      description: "科幻、奇幻、悬疑、言情等小说类型",
      href: "/novel-writing-software",
      icon: FileText
    },
    {
      title: "剧本编写",
      description: "电影、电视剧、舞台剧剧本",
      href: "/screenwriting-software",
      icon: Users
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            适用于各种写作类型
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            无论您是写书、创作小说还是编写剧本，Squibler都能满足您的需求
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {types.map((type) => (
            <Link
              key={type.href}
              href={type.href}
              className="group block p-8 bg-card rounded-2xl border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <type.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {type.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {type.description}
              </p>
              <span className="text-primary font-medium text-sm">
                了解更多 →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  const stats = [
    { value: "500K+", label: "活跃作家" },
    { value: "10M+", label: "创作文字" },
    { value: "50+", label: "国家和地区" },
    { value: "4.9", label: "用户评分" }
  ]

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AIToolsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              AI驱动
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              让AI成为您的写作伙伴
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Squibler的AI功能不是要替代您的创意，而是帮助您更好地表达想法。从灵感激发到内容优化，AI始终是您可靠的写作助手。
            </p>
            <div className="space-y-4">
              {aiFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/ai-book-writer">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  探索AI功能
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-12 h-12 text-primary" />
                </div>
                <p className="text-xl font-semibold text-foreground mb-2">AI写作助手</p>
                <p className="text-muted-foreground">智能、快速、创意无限</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection
          badge="AI写作新时代"
          title="用AI加速您的"
          highlightedText="写作之旅"
          description="Squibler是专为作家打造的AI写作平台。无论是书籍、小说还是剧本，我们都能帮助您更快、更好地完成创作。"
          primaryButtonText="免费开始"
          primaryButtonHref="/signup"
          secondaryButtonText="观看演示"
          secondaryButtonHref="#demo"
          showVideo={true}
          imageSrc="/demo.png"
        />
        <MediaLogos />
        <FeaturesGrid
          title="为什么选择Squibler"
          subtitle="强大的功能，简单的体验"
          features={features}
        />
        <ProductShowcase />
        <StatsSection />
        <WritingTypesSection />
        <AIToolsSection />
        <Testimonials />
        <FAQSection items={faqItems} />
        <CTASection
          title="准备好开启您的写作之旅了吗？"
          description="加入50万+作家的行列，体验AI驱动的写作新方式。"
          buttonText="立即免费试用"
          buttonHref="/signup"
        />
      </main>
      <Footer />
    </div>
  )
}

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesGrid } from "@/components/sections/features-grid"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Sparkles, 
  Lightbulb, 
  RefreshCw, 
  Filter, 
  Bookmark,
  Zap,
  Target,
  Shuffle,
  PenTool
} from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "无限灵感",
    description: "AI生成源源不断的创意写作提示，激发您的创作灵感。"
  },
  {
    icon: Filter,
    title: "类型筛选",
    description: "按类型、情绪、主题筛选提示，找到最适合您的灵感。"
  },
  {
    icon: RefreshCw,
    title: "一键刷新",
    description: "不喜欢当前提示？一键获取新的写作灵感。"
  },
  {
    icon: Target,
    title: "难度选择",
    description: "从简单到复杂，选择适合您水平的写作挑战。"
  },
  {
    icon: Bookmark,
    title: "收藏功能",
    description: "保存喜欢的提示，随时回来使用。"
  },
  {
    icon: Zap,
    title: "即时可用",
    description: "提示简洁有力，让您立即开始写作。"
  }
]

const faqItems = [
  {
    question: "写作提示生成器适合谁？",
    answer: "适合任何想要写作灵感的人：作家、学生、写作爱好者、创意写作课程、写作小组活动等。无论是日常写作练习还是突破创作瓶颈都很有用。"
  },
  {
    question: "提示有多具体？",
    answer: "您可以选择提示的具体程度：简单（一个主题或场景）、标准（包含角色和冲突）、详细（完整的场景设定和要求）。"
  },
  {
    question: "可以保存喜欢的提示吗？",
    answer: "是的，您可以收藏任何喜欢的提示，它们会保存在您的账户中，随时可以查看和使用。"
  },
  {
    question: "每天可以生成多少提示？",
    answer: "免费用户每天20个提示，专业版无限制。大多数用户的免费额度足够日常写作练习使用。"
  },
  {
    question: "提示是随机的还是可以定制？",
    answer: "两者都可以。您可以完全随机生成，也可以选择类型、主题、情绪等条件来定制生成的提示。"
  },
  {
    question: "可以直接用提示开始写作吗？",
    answer: "当然可以。生成提示后，点击「开始写作」按钮直接进入编辑器，提示会自动添加到您的项目中。"
  }
]

function PromptCategories() {
  const categories = [
    { name: "奇幻", count: "500+" },
    { name: "科幻", count: "400+" },
    { name: "悬疑", count: "300+" },
    { name: "言情", count: "350+" },
    { name: "惊悚", count: "250+" },
    { name: "日常", count: "400+" },
    { name: "历史", count: "200+" },
    { name: "喜剧", count: "300+" }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            丰富的提示类型
          </h2>
          <p className="text-lg text-muted-foreground">
            覆盖各种写作类型和场景
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border text-center hover:shadow-lg hover:border-primary/20 transition-all cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-foreground mb-1">{category.name}</h3>
              <p className="text-sm text-primary font-medium">{category.count} 提示</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExamplePrompts() {
  const prompts = [
    {
      category: "奇幻",
      text: "你发现祖母留下的旧相册中，有一张你从未见过的照片——照片中的人和你长得一模一样，但背景是一座你从未去过的城堡..."
    },
    {
      category: "悬疑",
      text: "深夜，你收到一条来自陌生号码的短信：「别回头，有人在跟踪你。走进最近的便利店，假装在购物，我会找你。」"
    },
    {
      category: "科幻",
      text: "2150年，人类已经可以上传意识到云端。今天，你决定第一次「下载」回你20年前的肉体..."
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            示例写作提示
          </h2>
          <p className="text-lg text-muted-foreground">
            看看AI生成的创意提示
          </p>
        </div>

        <div className="space-y-6">
          {prompts.map((prompt, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border"
            >
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                {prompt.category}
              </span>
              <p className="text-foreground leading-relaxed">{prompt.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/pricing">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Shuffle className="w-5 h-5 mr-2" />
              获取更多提示
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function UseCases() {
  const cases = [
    {
      icon: PenTool,
      title: "日常写作练习",
      description: "每天一个提示，保持写作习惯"
    },
    {
      icon: Lightbulb,
      title: "突破创作瓶颈",
      description: "当灵感枯竭时获取新想法"
    },
    {
      icon: Target,
      title: "写作挑战",
      description: "用于个人或小组的写作挑战活动"
    },
    {
      icon: Sparkles,
      title: "创意写作课",
      description: "为学生提供多样化的写作素材"
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            多种使用场景
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border text-center"
            >
              <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function WritingPromptGeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection
          badge="写作灵感工具"
          title="AI驱动的"
          highlightedText="写作提示生成器"
          description="缺乏灵感？让AI为您生成无限创意写作提示，激发您的创作潜能。"
          primaryButtonText="获取灵感"
          primaryButtonHref="/pricing"
          secondaryButtonText="查看示例"
          secondaryButtonHref="#examples"
        />
        
        <FeaturesGrid
          title="灵感生成功能"
          subtitle="源源不断的创意支持"
          features={features}
        />
        
        <PromptCategories />
        <ExamplePrompts />
        <UseCases />
        <Testimonials />
        <FAQSection items={faqItems} />
        
        <CTASection
          title="准备好获取灵感了吗？"
          description="让AI帮您突破创作瓶颈，开始您的写作之旅。"
          buttonText="免费开始"
          buttonHref="/pricing"
        />
      </main>
      <Footer />
    </div>
  )
}

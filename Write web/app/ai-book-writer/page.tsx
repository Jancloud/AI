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
  BookOpen, 
  Wand2, 
  Zap, 
  Brain,
  FileText,
  RefreshCw,
  Target,
  Check
} from "lucide-react"

const features = [
  {
    icon: Wand2,
    title: "一键生成书籍大纲",
    description: "输入您的书籍主题，AI立即生成完整的章节大纲和内容规划。"
  },
  {
    icon: Brain,
    title: "智能内容续写",
    description: "AI理解您的写作风格和上下文，无缝续写下一段内容。"
  },
  {
    icon: RefreshCw,
    title: "内容扩展与润色",
    description: "将简短的想法扩展成丰富的段落，或润色现有内容使其更加精彩。"
  },
  {
    icon: FileText,
    title: "研究资料整合",
    description: "AI帮助您整理研究资料，提取关键信息并融入写作中。"
  },
  {
    icon: Target,
    title: "风格一致性",
    description: "AI学习您的写作风格，确保全书语言和叙述风格保持一致。"
  },
  {
    icon: Zap,
    title: "快速初稿生成",
    description: "让AI帮您快速完成初稿，您专注于修改和完善。"
  }
]

const faqItems = [
  {
    question: "AI写的内容属于谁？",
    answer: "所有使用Squibler创作的内容都完全属于您。我们不会对您的作品主张任何权利，您可以自由出版、销售或以任何方式使用。"
  },
  {
    question: "AI能完全代替我写书吗？",
    answer: "AI是您的写作助手，而非替代者。它可以帮助生成初稿、提供灵感、扩展内容，但最终的创意方向和编辑决策都由您掌控。优秀的书籍需要人类的创意和判断。"
  },
  {
    question: "AI生成的内容质量如何？",
    answer: "我们使用最先进的语言模型，生成的内容连贯、语法正确、风格自然。但我们建议您始终审阅和编辑AI输出，加入您独特的声音和见解。"
  },
  {
    question: "AI如何学习我的写作风格？",
    answer: "当您在Squibler中写作时，AI会分析您的词汇选择、句子结构、叙述方式等，逐渐适应您的个人风格，使续写内容更加自然衔接。"
  },
  {
    question: "有使用次数限制吗？",
    answer: "免费版不含AI功能，专业版每月5000次AI调用，大师版无限使用。大多数作家的专业版额度足够完成数本书籍的创作。"
  },
  {
    question: "AI支持哪些类型的书籍？",
    answer: "AI支持几乎所有类型的书籍创作，包括非虚构（商业、自助、传记、教程）和虚构（小说、短篇）。不同类型有专门优化的提示和输出风格。"
  }
]

function AIShowcase() {
  const capabilities = [
    "从主题生成完整书籍大纲",
    "智能续写保持风格一致",
    "将要点扩展为完整章节",
    "润色和优化现有内容",
    "生成引人入胜的开头和结尾",
    "提供相关研究和事实支持"
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              AI 驱动
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              让AI成为您的写书搭档
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Squibler的AI不仅仅是一个工具，它是一个理解您创作意图的智能伙伴。
              从灵感迸发到最终成稿，AI始终伴您左右。
            </p>
            <ul className="space-y-3 mb-8">
              {capabilities.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/signup">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                免费体验AI写作
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border border-border p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">AI书籍助手</h3>
                <p className="text-muted-foreground">输入想法，AI帮您成书</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-primary/5 rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: "告诉AI您的书籍主题",
      description: "描述您想写的书籍类型、主题、目标读者。AI会理解您的意图。"
    },
    {
      step: 2,
      title: "AI生成大纲和结构",
      description: "AI为您规划章节结构，生成内容大纲，您可以自由调整。"
    },
    {
      step: 3,
      title: "AI辅助内容创作",
      description: "AI帮您扩展要点、续写段落、提供灵感，您专注于创意和编辑。"
    },
    {
      step: 4,
      title: "润色并完成书籍",
      description: "AI帮您润色文字、检查一致性，直到您满意为止。"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI如何帮您写书
          </h2>
          <p className="text-lg text-muted-foreground">
            简单四步，让书籍创作变得轻松高效
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((item, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shrink-0 text-primary-foreground font-bold text-xl">
                {item.step}
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function AIBookWriterPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection
          badge="AI 书籍写作"
          title="用AI加速您的"
          highlightedText="书籍创作"
          description="让人工智能成为您的写作伙伴。从灵感到成稿，AI帮助您更快、更高效地完成书籍创作。"
          primaryButtonText="免费试用"
          primaryButtonHref="/signup"
          secondaryButtonText="了解更多"
          secondaryButtonHref="#how-it-works"
        />
        
        <FeaturesGrid
          title="AI书籍写作功能"
          subtitle="强大的AI功能，让写书变得简单"
          features={features}
        />
        
        <AIShowcase />
        <HowItWorks />
        <Testimonials />
        <FAQSection items={faqItems} />
        
        <CTASection
          title="准备好用AI写书了吗？"
          description="立即开始您的AI辅助写作之旅，让创作变得前所未有的轻松。"
          buttonText="免费开始"
          buttonHref="/signup"
        />
      </main>
      <Footer />
    </div>
  )
}

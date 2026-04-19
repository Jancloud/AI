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
  Wand2, 
  Layers, 
  RefreshCw, 
  Target,
  GitBranch,
  Lightbulb,
  Zap,
  Check
} from "lucide-react"

const features = [
  {
    icon: Wand2,
    title: "一键生成情节",
    description: "输入故事类型和关键元素，AI立即生成完整的情节大纲。"
  },
  {
    icon: Layers,
    title: "三幕结构",
    description: "自动规划开头、发展、高潮和结局，确保情节结构完整。"
  },
  {
    icon: GitBranch,
    title: "情节转折",
    description: "生成意想不到的情节转折，让故事更加引人入胜。"
  },
  {
    icon: RefreshCw,
    title: "多版本探索",
    description: "不满意当前情节？一键重新生成，探索不同的故事走向。"
  },
  {
    icon: Target,
    title: "冲突设计",
    description: "AI帮您设计核心冲突和角色对立，增强故事张力。"
  },
  {
    icon: Lightbulb,
    title: "主题深化",
    description: "围绕主题构建情节线索，让故事更有深度和意义。"
  }
]

const faqItems = [
  {
    question: "情节生成器如何工作？",
    answer: "您提供故事类型、主要角色和核心冲突，AI会分析这些元素并生成一个结构完整的情节大纲，包括主要事件、转折点和结局建议。"
  },
  {
    question: "可以自定义生成的情节吗？",
    answer: "当然可以。您可以指定特定的情节元素、排除不想要的方向，或要求AI围绕特定场景展开。生成的情节可以随意修改。"
  },
  {
    question: "适合什么类型的故事？",
    answer: "情节生成器支持各种类型：奇幻、科幻、悬疑、言情、惊悚、历史等。不同类型有专门优化的情节模式。"
  },
  {
    question: "能帮助突破创作瓶颈吗？",
    answer: "这正是情节生成器的核心用途之一。当您不知道故事该如何发展时，AI可以提供多种可能的方向供您选择。"
  },
  {
    question: "生成的情节有多详细？",
    answer: "您可以选择详细程度：简要大纲（主要事件）、标准大纲（场景级别）或详细大纲（包含节拍和情感弧线）。"
  },
  {
    question: "可以用于剧本创作吗？",
    answer: "完全可以。情节生成器同样适用于剧本，可以生成适合电影或电视剧的三幕或多幕结构。"
  }
]

function PlotStructures() {
  const structures = [
    { name: "三幕结构", description: "经典的开头、中间、结尾结构" },
    { name: "英雄之旅", description: "12阶段神话叙事模式" },
    { name: "七点结构", description: "从钩子到结局的关键节点" },
    { name: "悬疑结构", description: "适合推理和惊悚故事" },
    { name: "言情结构", description: "相遇到在一起的情感弧线" },
    { name: "自定义", description: "根据您的需求灵活设计" }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            多种情节结构
          </h2>
          <p className="text-lg text-muted-foreground">
            选择最适合您故事的叙事结构
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {structures.map((structure, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">{structure.name}</h3>
              <p className="text-muted-foreground text-sm">{structure.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PlotElements() {
  const elements = [
    "核心冲突设计",
    "角色目标与动机",
    "障碍与阻力",
    "情节转折点",
    "高潮场景设计",
    "结局收尾",
    "副线情节",
    "情感弧线"
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              完整情节要素
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              AI帮您构建每一个情节要素
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              一个好的情节需要多个要素配合。我们的AI理解叙事的各个方面，帮您构建完整、有吸引力的故事骨架。
            </p>
            <ul className="grid grid-cols-2 gap-3 mb-8">
              {elements.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/pricing">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                免费生成情节
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border border-border p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <GitBranch className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">情节生成器</h3>
                <p className="text-muted-foreground">让故事发展一目了然</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function PlotGeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection
          badge="情节生成工具"
          title="AI驱动的"
          highlightedText="情节生成器"
          description="不知道故事该怎么发展？让AI帮您设计引人入胜的情节，包括冲突、转折和结局。"
          primaryButtonText="免费试用"
          primaryButtonHref="/pricing"
          secondaryButtonText="查看功能"
          secondaryButtonHref="#features"
        />
        
        <FeaturesGrid
          title="情节生成功能"
          subtitle="专业的情节设计工具"
          features={features}
        />
        
        <PlotStructures />
        <PlotElements />
        <Testimonials />
        <FAQSection items={faqItems} />
        
        <CTASection
          title="准备好设计您的情节了吗？"
          description="让AI帮您构建引人入胜的故事骨架。"
          buttonText="免费开始"
          buttonHref="/pricing"
        />
      </main>
      <Footer />
    </div>
  )
}

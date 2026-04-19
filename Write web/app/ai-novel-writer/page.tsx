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
  Users, 
  Wand2, 
  MessageSquare, 
  Brain,
  Layers,
  Globe,
  BookOpen,
  Check
} from "lucide-react"

const features = [
  {
    icon: Wand2,
    title: "情节生成",
    description: "描述您的故事概念，AI帮您生成引人入胜的情节大纲和故事弧线。"
  },
  {
    icon: Users,
    title: "角色创建",
    description: "AI帮您创建丰满的角色，包括背景故事、性格特点和人物关系。"
  },
  {
    icon: MessageSquare,
    title: "对话生成",
    description: "生成符合角色性格的对话，让您的人物栩栩如生。"
  },
  {
    icon: Globe,
    title: "世界观构建",
    description: "AI帮您构建丰富的故事世界，包括地理、历史、社会设定。"
  },
  {
    icon: Brain,
    title: "智能续写",
    description: "AI理解您的故事和风格，自然地续写情节发展。"
  },
  {
    icon: Layers,
    title: "场景描写",
    description: "生成生动的场景描写，营造氛围和情感张力。"
  }
]

const faqItems = [
  {
    question: "AI能帮我写出好小说吗？",
    answer: "AI是您的创作伙伴，它可以帮助您克服创作瓶颈、生成灵感、扩展情节。但优秀的小说需要您的创意vision和艺术判断。AI提供工具，您是真正的创作者。"
  },
  {
    question: "AI如何理解我的故事？",
    answer: "当您在Squibler中写作时，AI会分析您的故事元素：角色、情节、主题、风格。它利用这些上下文来提供相关的建议和续写内容。"
  },
  {
    question: "我可以控制AI生成的内容吗？",
    answer: "完全可以。您可以给AI详细的指令，指定情节方向、情感基调、写作风格。AI生成的内容只是建议，您可以编辑、修改或完全重写。"
  },
  {
    question: "AI支持哪些小说类型？",
    answer: "AI支持所有主流小说类型：奇幻、科幻、悬疑、言情、历史、现代等。不同类型有专门优化的模型和提示。"
  },
  {
    question: "生成的内容是原创的吗？",
    answer: "是的，AI生成的内容是基于您的输入和上下文原创生成的，不是从其他来源复制。但我们建议您在发布前进行查重检查。"
  },
  {
    question: "会有抄袭问题吗？",
    answer: "AI不会复制现有作品。它基于学习的模式生成新内容。但作为负责任的作者，您应该在出版前进行抄袭检查，就像对待任何作品一样。"
  }
]

function GenreShowcase() {
  const genres = [
    { name: "奇幻", description: "魔法世界、史诗冒险" },
    { name: "科幻", description: "未来科技、太空探索" },
    { name: "悬疑", description: "谜团解密、惊悚推理" },
    { name: "言情", description: "爱情故事、情感纠葛" },
    { name: "历史", description: "历史背景、时代风貌" },
    { name: "现代", description: "都市生活、当代故事" }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            支持各种小说类型
          </h2>
          <p className="text-lg text-muted-foreground">
            无论您想写什么类型的故事，AI都能提供专业支持
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {genres.map((genre, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 text-center"
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">{genre.name}</h3>
              <p className="text-muted-foreground text-sm">{genre.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AICapabilities() {
  const capabilities = [
    "根据主题生成故事大纲",
    "创建独特的角色档案",
    "生成符合角色的对话",
    "描写生动的场景和环境",
    "智能续写保持风格一致",
    "提供情节转折建议",
    "帮助解决叙事难题",
    "润色和优化文字表达"
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border border-border p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">AI小说助手</h3>
                <p className="text-muted-foreground">您的创意，AI的执行力</p>
              </div>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              强大功能
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              AI能为您的小说做什么
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              从故事构思到最终成稿，AI在创作的每一个阶段都能提供帮助。
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {capabilities.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/signup">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  开始创作小说
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function AINovelWriterPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection
          badge="AI 小说创作"
          title="用AI释放您的"
          highlightedText="小说创意"
          description="AI帮您构建世界观、塑造角色、推进情节。让您的小说创作之旅更加顺畅精彩。"
          primaryButtonText="免费试用"
          primaryButtonHref="/signup"
          secondaryButtonText="查看功能"
          secondaryButtonHref="#features"
        />
        
        <FeaturesGrid
          title="AI小说写作功能"
          subtitle="专为小说家设计的AI工具"
          features={features}
        />
        
        <GenreShowcase />
        <AICapabilities />
        <Testimonials />
        <FAQSection items={faqItems} />
        
        <CTASection
          title="准备好创作您的小说了吗？"
          description="让AI成为您的创作伙伴，开始您的小说写作之旅。"
          buttonText="免费开始"
          buttonHref="/signup"
        />
      </main>
      <Footer />
    </div>
  )
}

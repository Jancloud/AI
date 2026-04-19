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
  Film, 
  MessageSquare, 
  Wand2, 
  Users, 
  Clapperboard,
  FileText,
  Layers,
  Sparkles,
  Check
} from "lucide-react"

const features = [
  {
    icon: Clapperboard,
    title: "场景生成",
    description: "描述场景需求，AI生成专业的场景标题、动作描述和环境设定。"
  },
  {
    icon: MessageSquare,
    title: "对话创作",
    description: "AI生成符合角色性格的对话，包括潜台词和情感层次。"
  },
  {
    icon: Users,
    title: "角色声音",
    description: "为每个角色建立独特的说话方式，AI保持对话风格一致。"
  },
  {
    icon: Layers,
    title: "情节节拍",
    description: "生成故事节拍和情节转折点，构建紧凑的三幕结构。"
  },
  {
    icon: FileText,
    title: "格式自动化",
    description: "AI内容自动套用行业标准剧本格式，无需手动调整。"
  },
  {
    icon: Wand2,
    title: "改写建议",
    description: "AI提供对话和动作描述的替代版本，帮您找到最佳表达。"
  }
]

const faqItems = [
  {
    question: "AI生成的剧本格式正确吗？",
    answer: "是的，Squibler自动将AI生成的内容格式化为行业标准格式。场景标题、角色名、对话、动作描述都会正确排版。"
  },
  {
    question: "AI能帮我写出好对话吗？",
    answer: "AI可以生成自然、有层次的对话，包括潜台词。但好的对话需要您的判断和修改。AI是起点，您的创意让对话真正出彩。"
  },
  {
    question: "如何让AI保持角色声音一致？",
    answer: "为每个角色创建档案，描述他们的背景、性格、说话方式。AI会参考这些信息，生成符合角色的对话。"
  },
  {
    question: "AI支持哪种剧本类型？",
    answer: "支持电影剧本、电视剧本、网剧、短片、舞台剧本等。不同类型有专门的格式和创作建议。"
  },
  {
    question: "可以让AI生成整个剧本吗？",
    answer: "技术上可以，但不建议。好的剧本需要您的创意vision和编剧技巧。AI最适合用于克服瓶颈、探索可能性和加速初稿。"
  },
  {
    question: "AI内容可以商业使用吗？",
    answer: "是的，所有在Squibler中创作的内容都属于您，可以自由商业使用、销售或提交给制片公司。"
  }
]

function ScreenplayShowcase() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              专业编剧工具
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              AI理解剧本的语言
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Squibler的AI专门为剧本创作训练，理解场景结构、对话节奏、视觉叙事。
              它不只是写文字，而是在帮您讲故事。
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "生成专业的场景标题和SLUG LINE",
                "创作有潜台词的角色对话",
                "描写动作和视觉元素",
                "提供情节和结构建议",
                "保持角色声音一致性",
                "自动应用行业标准格式"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/signup">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                免费体验
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border border-border p-8 flex items-center justify-center">
              <div className="text-left font-mono text-sm space-y-4 text-foreground/80">
                <p className="font-bold">内景 咖啡馆 - 日</p>
                <p className="pl-0">
                  阳光透过落地窗洒进来。<br />
                  小明坐在角落，紧张地搅动咖啡。
                </p>
                <p className="text-center font-bold">小明</p>
                <p className="text-center px-8">
                  我等这一刻等了很久了。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ScriptTypes() {
  const types = [
    { name: "电影剧本", description: "长片、短片剧本创作" },
    { name: "电视剧本", description: "单集、连续剧剧本" },
    { name: "网剧剧本", description: "网络剧、网大剧本" },
    { name: "舞台剧本", description: "话剧、音乐剧剧本" }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            支持多种剧本类型
          </h2>
          <p className="text-lg text-muted-foreground">
            无论您要写什么类型的剧本，AI都能提供专业支持
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {types.map((type, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border text-center hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <Film className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-1">{type.name}</h3>
              <p className="text-sm text-muted-foreground">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function AIScreenplayWriterPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection
          badge="AI 剧本创作"
          title="用AI打造您的"
          highlightedText="银幕故事"
          description="专业的AI剧本创作助手。从场景构思到对话创作，让您的剧本创作更加高效专业。"
          primaryButtonText="免费试用"
          primaryButtonHref="/signup"
          secondaryButtonText="查看功能"
          secondaryButtonHref="#features"
        />
        
        <FeaturesGrid
          title="AI剧本写作功能"
          subtitle="专为编剧设计的AI工具"
          features={features}
        />
        
        <ScreenplayShowcase />
        <ScriptTypes />
        <Testimonials />
        <FAQSection items={faqItems} />
        
        <CTASection
          title="准备好创作您的剧本了吗？"
          description="让AI成为您的编剧搭档，开始您的银幕创作之旅。"
          buttonText="免费开始"
          buttonHref="/signup"
        />
      </main>
      <Footer />
    </div>
  )
}

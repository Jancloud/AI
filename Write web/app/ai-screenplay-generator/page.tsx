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
  FileText, 
  Wand2, 
  Clapperboard,
  Sparkles,
  Zap,
  Check,
  MessageSquare
} from "lucide-react"

const features = [
  {
    icon: Clapperboard,
    title: "智能场景生成",
    description: "输入故事概要，AI自动生成完整的场景描述和动作指令。"
  },
  {
    icon: MessageSquare,
    title: "对话快速生成",
    description: "AI根据角色设定生成自然流畅的对白，提升创作效率。"
  },
  {
    icon: FileText,
    title: "剧本格式化",
    description: "自动应用行业标准格式，包括场景标题、角色名和对齐。"
  },
  {
    icon: Wand2,
    title: "情节扩展",
    description: "输入简短提示，AI为您扩展成详细的剧情段落。"
  },
  {
    icon: Zap,
    title: "实时生成",
    description: "输入提示词后，AI在几秒钟内生成完整的剧本片段。"
  },
  {
    icon: Sparkles,
    title: "创意增强",
    description: "AI提供创意建议，帮助您突破创作瓶颈。"
  }
]

const faqItems = [
  {
    question: "AI剧本生成器如何工作？",
    answer: "您提供故事梗概、角色信息和关键情节，AI会分析这些元素并生成符合行业标准格式的剧本内容，包括场景标题、动作描述和角色对话。"
  },
  {
    question: "生成的剧本可以直接使用吗？",
    answer: "AI生成的剧本可以作为初稿使用，但我们建议您根据具体需求进行审阅和修改，以确保完全符合您的创作意图。"
  },
  {
    question: "支持哪些类型的剧本？",
    answer: "支持电影剧本、电视剧本、网剧剧本、短片剧本和舞台剧本等多种类型，每种类型都有专门优化的格式和结构。"
  },
  {
    question: "可以控制生成内容的风格吗？",
    answer: "是的，您可以在生成前指定剧本的风格、情感基调、对话风格等参数，AI会根据您的要求生成相应的内容。"
  },
  {
    question: "生成的内容版权归谁所有？",
    answer: "All inSquibler中生成的内容都完全属于您，您可以自由使用、修改、出版或商业化。"
  },
  {
    question: "有使用次数限制吗？",
    answer: "免费版每日3次生成，专业版每月5000次AI调用，大师版无限使用。大多数创作者的专业版额度足够完成多个剧本项目。"
  }
]

export default function AIScreenplayGeneratorPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection
          title="AI剧本生成器"
          description="输入创意，快速生成专业剧本。AI帮您将想法转化为符合行业标准的剧本格式。"
          primaryButtonText="免费生成剧本"
          primaryButtonHref="/signup"
          secondaryButtonText="查看定价"
          secondaryButtonHref="/pricing"
        />

        <FeaturesGrid
          title="强大功能，让剧本创作更轻松"
          subtitle="AI驱动的智能工具，助力创作者快速实现剧本梦想"
          features={features}
        />

        {/* Workflow Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                三步生成剧本
              </h2>
              <p className="text-lg text-muted-foreground">
                简单高效的工作流程，让创作更快
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-card rounded-2xl border border-border">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-2xl">
                  1
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">输入故事概要</h3>
                <p className="text-muted-foreground">
                  描述您的故事主题、主要角色和核心冲突
                </p>
              </div>
              <div className="text-center p-8 bg-card rounded-2xl border border-border">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-2xl">
                  2
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">选择风格和格式</h3>
                <p className="text-muted-foreground">
                  指定剧本类型、情感基调和详细程度
                </p>
              </div>
              <div className="text-center p-8 bg-card rounded-2xl border border-border">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-2xl">
                  3
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">获取完整剧本</h3>
                <p className="text-muted-foreground">
                  AI在几秒钟内生成专业格式的剧本内容
                </p>
              </div>
            </div>
          </div>
        </section>

        <Testimonials
          title="创作者信赖AI剧本生成器"
          subtitle="来自全球编剧的真实反馈"
        />

        <FAQSection 
          title="常见问题"
          subtitle="了解AI剧本生成器的工作原理"
          items={faqItems} 
        />

        <CTASection
          title="立即开始您的剧本创作"
          description="加入数百万创作者，使用AI加速剧本创作流程"
          buttonText="免费注册"
          buttonHref="/signup"
        />
      </main>
      <Footer />
    </>
  )
}

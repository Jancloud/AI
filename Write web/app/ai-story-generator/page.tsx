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
  Zap, 
  RefreshCw, 
  BookOpen,
  Users,
  Target,
  Layers,
  Check,
  ArrowRight
} from "lucide-react"

const features = [
  {
    icon: Wand2,
    title: "一键生成故事",
    description: "输入简单的主题或关键词，AI立即生成完整的短篇故事。"
  },
  {
    icon: Users,
    title: "角色自动创建",
    description: "AI为您的故事创建独特的角色，包括性格、背景和动机。"
  },
  {
    icon: Layers,
    title: "情节编织",
    description: "AI构建引人入胜的情节，包含冲突、高潮和结局。"
  },
  {
    icon: RefreshCw,
    title: "多版本生成",
    description: "不满意？一键重新生成，探索不同的故事可能性。"
  },
  {
    icon: Target,
    title: "风格定制",
    description: "选择故事风格：幽默、悬疑、浪漫、奇幻等。"
  },
  {
    icon: Zap,
    title: "即时输出",
    description: "几秒钟内获得完整故事，无需等待。"
  }
]

const faqItems = [
  {
    question: "AI故事生成器适合谁使用？",
    answer: "适合需要灵感的作家、想要快速内容的内容创作者、教育工作者、游戏设计师，以及任何想要创作或阅读独特故事的人。"
  },
  {
    question: "生成的故事有多长？",
    answer: "您可以选择故事长度：微型故事（100-300字）、短篇故事（500-1000字）或完整短篇（2000-5000字）。长篇故事可以分章节生成。"
  },
  {
    question: "可以自定义故事元素吗？",
    answer: "当然可以。您可以指定主角、场景、时代背景、冲突类型、情感基调等。AI会根据您的要求创作故事。"
  },
  {
    question: "生成的故事可以商业使用吗？",
    answer: "是的，所有生成的内容都属于您，可以自由发布、修改或商业使用。我们建议在发布前进行编辑和个性化。"
  },
  {
    question: "故事质量如何？",
    answer: "AI生成的故事结构完整、情节连贯。但最好的故事需要人类的创意和编辑。我们建议把AI输出作为起点，加入您的独特视角。"
  },
  {
    question: "每天可以生成多少故事？",
    answer: "免费用户每天3个故事，专业版每月5000次AI调用，大师版无限使用。"
  }
]

function GeneratorDemo() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            三步生成您的故事
          </h2>
          <p className="text-lg text-muted-foreground">
            简单、快速、创意无限
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-card rounded-2xl border border-border">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-2xl">
              1
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">输入主题</h3>
            <p className="text-muted-foreground">
              描述您想要的故事主题、类型或关键词
            </p>
          </div>
          <div className="text-center p-8 bg-card rounded-2xl border border-border">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-2xl">
              2
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">选择风格</h3>
            <p className="text-muted-foreground">
              选择故事风格、长度和其他偏好设置
            </p>
          </div>
          <div className="text-center p-8 bg-card rounded-2xl border border-border">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-2xl">
              3
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">获得故事</h3>
            <p className="text-muted-foreground">
              几秒钟内获得完整故事，可编辑或重新生成
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/pricing">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              立即尝试
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function StoryTypes() {
  const types = [
    "奇幻冒险",
    "科幻故事",
    "悬疑推理",
    "浪漫爱情",
    "恐怖惊悚",
    "儿童故事",
    "历史小说",
    "都市生活"
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            支持多种故事类型
          </h2>
          <p className="text-lg text-muted-foreground">
            无论您想要什么风格的故事，AI都能生成
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {types.map((type, index) => (
            <span
              key={index}
              className="px-6 py-3 bg-card rounded-full border border-border text-foreground font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function UseCases() {
  const cases = [
    {
      title: "作家灵感",
      description: "突破创作瓶颈，获取新故事灵感和情节想法"
    },
    {
      title: "内容创作",
      description: "为博客、社交媒体、播客快速生成故事内容"
    },
    {
      title: "教育用途",
      description: "为学生创作阅读材料，激发创意写作兴趣"
    },
    {
      title: "游戏设计",
      description: "生成游戏背景故事、任务剧情和角色设定"
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
              className="p-6 bg-card rounded-xl border border-border"
            >
              <BookOpen className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function AIStoryGeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection
          badge="AI 故事生成"
          title="一键生成"
          highlightedText="精彩故事"
          description="输入主题，AI立即为您创作完整的故事。从灵感到成稿，只需几秒钟。"
          primaryButtonText="免费试用"
          primaryButtonHref="/pricing"
          secondaryButtonText="了解更多"
          secondaryButtonHref="#how-it-works"
        />
        
        <FeaturesGrid
          title="强大的故事生成功能"
          subtitle="AI驱动的创意引擎"
          features={features}
        />
        
        <GeneratorDemo />
        <StoryTypes />
        <UseCases />
        <Testimonials />
        <FAQSection items={faqItems} />
        
        <CTASection
          title="准备好生成您的故事了吗？"
          description="立即体验AI故事生成器，释放您的创意潜能。"
          buttonText="免费开始"
          buttonHref="/pricing"
        />
      </main>
      <Footer />
    </div>
  )
}

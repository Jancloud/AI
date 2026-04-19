import { ProductPageTemplate } from "@/components/templates/product-page-template"
import { 
  BookOpen, 
  Layers, 
  Target, 
  FileText, 
  BarChart3, 
  Cloud,
  Users,
  Sparkles,
  Clock,
  Shield
} from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "章节管理",
    description: "轻松创建、重新排列和组织章节。拖拽式界面让内容结构一目了然。"
  },
  {
    icon: Layers,
    title: "场景与节拍",
    description: "将章节细分为场景和节拍，更精细地控制故事节奏和结构。"
  },
  {
    icon: Target,
    title: "写作目标",
    description: "设定每日、每周或总体字数目标，追踪进度，保持写作动力。"
  },
  {
    icon: FileText,
    title: "专业模板",
    description: "提供非虚构、传记、教程等多种书籍模板，快速开始创作。"
  },
  {
    icon: BarChart3,
    title: "进度分析",
    description: "详细的写作统计数据，包括字数趋势、写作时间和效率分析。"
  },
  {
    icon: Cloud,
    title: "云端同步",
    description: "所有内容自动保存到云端，支持多设备无缝切换。"
  }
]

const benefits = [
  {
    title: "无干扰写作环境",
    description: "简洁的界面设计，让您专注于内容创作，不被复杂功能分散注意力。"
  },
  {
    title: "AI智能辅助",
    description: "AI帮助您克服写作瓶颈，提供创意建议、内容扩展和文字润色。"
  },
  {
    title: "版本历史",
    description: "自动保存每个版本，随时可以回溯到任意历史状态。"
  },
  {
    title: "多格式导出",
    description: "支持导出为PDF、DOCX、EPUB、Markdown等多种格式。"
  },
  {
    title: "研究笔记",
    description: "内置笔记功能，方便您整理研究资料和写作素材。"
  },
  {
    title: "目标追踪",
    description: "可视化的进度追踪，帮助您按计划完成写作项目。"
  }
]

const howItWorksSteps = [
  {
    step: 1,
    title: "创建您的书籍项目",
    description: "选择书籍类型和模板，设定基本信息和写作目标。几秒钟内即可开始写作。"
  },
  {
    step: 2,
    title: "规划结构",
    description: "使用大纲工具规划章节结构，或让AI帮您生成初始大纲。"
  },
  {
    step: 3,
    title: "专注写作",
    description: "在无干扰的编辑器中开始创作。AI随时待命，帮助您突破瓶颈。"
  },
  {
    step: 4,
    title: "导出发布",
    description: "完成后导出为专业格式，准备好出版或分享。"
  }
]

const faqItems = [
  {
    question: "Squibler适合写什么类型的书？",
    answer: "Squibler支持各种类型的书籍写作，包括非虚构类（传记、自助书、商业书籍、教程）和虚构类（小说、短篇故事集）。我们提供针对不同类型的专业模板和工具。"
  },
  {
    question: "AI功能如何帮助我写书？",
    answer: "AI可以帮助您生成书籍大纲、扩展段落、提供措辞建议、润色文字，以及在您遇到写作瓶颈时提供创意灵感。AI是辅助工具，最终的创作决定权在您手中。"
  },
  {
    question: "如何组织长篇书籍的内容？",
    answer: "Squibler提供层级式的内容组织：书籍 > 部分 > 章节 > 场景。您可以通过拖拽轻松重新排列内容，大纲视图让您一目了然整体结构。"
  },
  {
    question: "可以设置写作目标吗？",
    answer: "当然可以。您可以设置每日字数目标、总体字数目标和截止日期。系统会追踪您的进度并发送提醒，帮助您保持写作动力。"
  },
  {
    question: "支持哪些导出格式？",
    answer: "支持导出为PDF、DOCX、EPUB、MOBI、HTML、Markdown和纯文本格式。专业版用户还可以自定义导出模板。"
  },
  {
    question: "我的书籍内容安全吗？",
    answer: "非常安全。我们使用银行级加密保护您的数据，所有内容都存储在安全的云服务器上。您的作品完全属于您，我们不会访问或使用您的内容。"
  }
]

export default function BookWritingSoftwarePage() {
  return (
    <ProductPageTemplate
      badge="专业书籍写作"
      title="最强大的"
      highlightedText="书籍写作软件"
      description="从灵感到出版，Squibler为您的整个书籍创作过程提供支持。专业的章节管理、AI辅助写作、进度追踪，让您的写书之旅更加顺畅。"
      featuresTitle="为书籍作者打造"
      featuresSubtitle="专业的工具，简单的体验"
      features={features}
      benefitsTitle="为什么作家选择Squibler"
      benefitsSubtitle="数万名作家的共同选择"
      benefits={benefits}
      howItWorksTitle="四步完成您的书籍"
      howItWorksSteps={howItWorksSteps}
      faqItems={faqItems}
      ctaTitle="开始写您的书"
      ctaDescription="加入数万名作家的行列，使用Squibler让您的出书梦想成真。"
    />
  )
}

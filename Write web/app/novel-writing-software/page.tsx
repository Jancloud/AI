import { ProductPageTemplate } from "@/components/templates/product-page-template"
import { 
  BookOpen, 
  Users, 
  Globe, 
  Layers, 
  Sparkles, 
  Clock,
  Map,
  FileText,
  BarChart3,
  Target
} from "lucide-react"

const features = [
  {
    icon: Users,
    title: "角色管理",
    description: "为每个角色创建详细档案，追踪关系网络，确保角色塑造一致性。"
  },
  {
    icon: Globe,
    title: "世界观构建",
    description: "创建设定文档、地图和时间线，构建丰富的小说世界。"
  },
  {
    icon: Layers,
    title: "情节规划",
    description: "使用情节板和大纲工具规划故事线，追踪多条叙事线索。"
  },
  {
    icon: Sparkles,
    title: "AI创意助手",
    description: "AI帮您突破创作瓶颈，提供情节建议、对话生成和描写灵感。"
  },
  {
    icon: Clock,
    title: "时间线工具",
    description: "可视化故事时间线，确保情节发展逻辑一致，避免时间线错误。"
  },
  {
    icon: Target,
    title: "写作目标",
    description: "设定字数目标和截止日期，追踪每日写作进度，保持创作动力。"
  }
]

const benefits = [
  {
    title: "完整的小说写作生态",
    description: "从角色设定到情节规划，从初稿到润色，一站式解决小说创作需求。"
  },
  {
    title: "AI驱动的创意辅助",
    description: "智能续写、对话生成、场景描写，AI让您的创作更流畅。"
  },
  {
    title: "专业的角色档案",
    description: "创建详细的角色背景、性格特点、外貌描写，保持人物一致性。"
  },
  {
    title: "灵活的章节管理",
    description: "拖拽式章节排序，场景分割，让长篇小说结构清晰可控。"
  },
  {
    title: "沉浸式写作体验",
    description: "无干扰全屏模式，专注于您的故事世界。"
  },
  {
    title: "实时进度追踪",
    description: "字数统计、写作习惯分析，帮您建立稳定的创作节奏。"
  }
]

const howItWorksSteps = [
  {
    step: 1,
    title: "创建小说项目",
    description: "选择小说类型（奇幻、科幻、言情、悬疑等），设定基本信息和写作目标。"
  },
  {
    step: 2,
    title: "构建世界观",
    description: "创建角色档案、世界设定、时间线。让AI帮您完善细节。"
  },
  {
    step: 3,
    title: "规划情节",
    description: "使用情节板规划故事弧线，设计每个章节的关键节点。"
  },
  {
    step: 4,
    title: "开始创作",
    description: "在优雅的编辑器中尽情书写。AI随时帮您突破瓶颈，完成大作。"
  }
]

const faqItems = [
  {
    question: "Squibler支持哪些类型的小说？",
    answer: "Squibler支持所有类型的小说创作，包括奇幻、科幻、悬疑、言情、历史、现代都市等。我们为不同类型提供专门的模板和写作建议。"
  },
  {
    question: "如何管理复杂的角色关系？",
    answer: "Squibler提供角色管理系统，您可以创建详细的角色档案，记录外貌、性格、背景故事。角色关系图帮您可视化人物之间的联系。"
  },
  {
    question: "AI能帮我写小说吗？",
    answer: "AI是您的创作助手，可以帮助生成情节建议、续写段落、优化对话、提供描写灵感。但最终的创作决定和艺术方向完全由您掌控。"
  },
  {
    question: "如何追踪多条故事线？",
    answer: "使用情节板功能，您可以创建多条时间线和叙事线，清晰地看到各条线索的发展和交汇点。"
  },
  {
    question: "小说写完后如何出版？",
    answer: "Squibler支持导出为各种电子书格式（EPUB、MOBI）和印刷格式（PDF）。您可以轻松上传到Kindle、Apple Books等平台，或准备印刷出版。"
  },
  {
    question: "可以和其他作家协作吗？",
    answer: "大师版支持团队协作功能。您可以邀请合著者、编辑或测试读者，实时协作或留下评论反馈。"
  }
]

export default function NovelWritingSoftwarePage() {
  return (
    <ProductPageTemplate
      badge="小说创作专属"
      title="专为小说家打造的"
      highlightedText="写作软件"
      description="从世界观构建到情节规划，从角色塑造到稿件润色。Squibler是您创作长篇小说的最佳伙伴。"
      featuresTitle="小说创作必备功能"
      featuresSubtitle="让您的故事世界栩栩如生"
      features={features}
      benefitsTitle="小说家的选择"
      benefitsSubtitle="专业工具，成就您的文学梦想"
      benefits={benefits}
      howItWorksTitle="四步开始您的小说"
      howItWorksSteps={howItWorksSteps}
      faqItems={faqItems}
      ctaTitle="开始您的小说创作"
      ctaDescription="加入数万名小说家的行列，用Squibler讲述您的故事。"
    />
  )
}

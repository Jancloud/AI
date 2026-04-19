import { ProductPageTemplate } from "@/components/templates/product-page-template"
import { 
  Film, 
  Users, 
  FileText, 
  Layers, 
  Sparkles, 
  Clock,
  MessageSquare,
  Clapperboard,
  BarChart3,
  Download
} from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "专业剧本格式",
    description: "自动套用行业标准格式（Final Draft兼容），无需手动调整排版。"
  },
  {
    icon: Clapperboard,
    title: "场景管理",
    description: "场景导航、场景标题自动编号、场景卡片视图，高效组织剧本结构。"
  },
  {
    icon: Users,
    title: "角色管理",
    description: "角色档案、对话追踪、角色出场统计，确保人物塑造始终一致。"
  },
  {
    icon: MessageSquare,
    title: "智能对话",
    description: "AI辅助对话创作，生成符合角色性格的台词和潜台词。"
  },
  {
    icon: Sparkles,
    title: "AI场景生成",
    description: "描述场景需求，AI帮您生成动作描述、场景设置和氛围渲染。"
  },
  {
    icon: Download,
    title: "专业导出",
    description: "导出为PDF、Final Draft（.fdx）、Fountain等行业标准格式。"
  }
]

const benefits = [
  {
    title: "行业标准格式",
    description: "自动应用好莱坞标准剧本格式，您只需专注于故事创作。"
  },
  {
    title: "实时页数统计",
    description: "剧本页数实时计算，按照1分钟=1页的行业标准换算。"
  },
  {
    title: "场景卡片",
    description: "在卡片视图中规划故事，拖拽重组场景顺序。"
  },
  {
    title: "角色对话分析",
    description: "查看每个角色的台词量、出场场景，确保戏份平衡。"
  },
  {
    title: "协作批注",
    description: "团队成员可添加批注和修改建议，简化审稿流程。"
  },
  {
    title: "多种格式导出",
    description: "兼容Final Draft、Celtx等主流剧本软件格式。"
  }
]

const howItWorksSteps = [
  {
    step: 1,
    title: "选择剧本类型",
    description: "电影剧本、电视剧本、短片或舞台剧？选择模板后即刻开始。"
  },
  {
    step: 2,
    title: "创建角色和大纲",
    description: "设定主要角色，使用节拍板规划三幕结构或其他叙事框架。"
  },
  {
    step: 3,
    title: "场景写作",
    description: "在专业编辑器中写作，格式自动应用。AI帮您写台词和动作描述。"
  },
  {
    step: 4,
    title: "导出投稿",
    description: "导出为行业标准PDF或FDX格式，准备好提交给制片公司。"
  }
]

const faqItems = [
  {
    question: "Squibler的剧本格式符合行业标准吗？",
    answer: "是的，Squibler使用行业标准的剧本格式，包括正确的页边距、字体（Courier 12pt）、场景标题格式等。导出的PDF可直接提交给制片公司或参加剧本比赛。"
  },
  {
    question: "支持哪些类型的剧本？",
    answer: "支持电影剧本、电视剧本（单集和连续剧）、网剧、短片、舞台剧本等。每种类型都有专门的模板和格式预设。"
  },
  {
    question: "可以导出为Final Draft格式吗？",
    answer: "是的，Squibler支持导出为.fdx格式，可直接在Final Draft中打开。同时也支持Fountain、PDF、DOCX等格式。"
  },
  {
    question: "AI如何帮助剧本创作？",
    answer: "AI可以帮助生成对话、动作描述、场景设置，以及提供情节建议。您也可以让AI根据角色性格调整台词风格。"
  },
  {
    question: "如何追踪角色的对话量？",
    answer: "角色管理面板显示每个角色的台词数量、出场场景列表和戏份占比。这帮助您确保重要角色得到足够的发展空间。"
  },
  {
    question: "支持多人协作吗？",
    answer: "大师版支持实时协作。编剧团队可以同时编辑剧本，看到彼此的光标位置。也可以添加批注进行异步反馈。"
  }
]

export default function ScreenwritingSoftwarePage() {
  return (
    <ProductPageTemplate
      badge="专业剧本工具"
      title="好莱坞标准的"
      highlightedText="剧本写作软件"
      description="专业的剧本格式、智能场景管理、AI对话辅助。Squibler是编剧的终极创作工具。"
      featuresTitle="编剧必备功能"
      featuresSubtitle="专业工具，成就银幕梦想"
      features={features}
      benefitsTitle="为什么编剧选择Squibler"
      benefitsSubtitle="从独立编剧到制片公司的共同选择"
      benefits={benefits}
      howItWorksTitle="四步完成您的剧本"
      howItWorksSteps={howItWorksSteps}
      faqItems={faqItems}
      ctaTitle="开始您的剧本创作"
      ctaDescription="加入数千名编剧的行列，用Squibler创作下一部银幕佳作。"
    />
  )
}

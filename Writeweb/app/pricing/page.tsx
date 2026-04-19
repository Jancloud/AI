import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "免费版",
    description: "适合刚开始写作的新手",
    price: "0",
    period: "永久免费",
    features: [
      { name: "基础写作编辑器", included: true },
      { name: "最多3个项目", included: true },
      { name: "云端存储 100MB", included: true },
      { name: "基础导出格式", included: true },
      { name: "AI写作助手", included: false },
      { name: "高级模板", included: false },
      { name: "版本历史", included: false },
      { name: "优先客服支持", included: false },
    ],
    buttonText: "免费开始",
    buttonVariant: "outline" as const,
    popular: false,
  },
  {
    name: "专业版",
    description: "适合认真对待写作的作家",
    price: "99",
    period: "每月",
    features: [
      { name: "所有免费版功能", included: true },
      { name: "无限项目", included: true },
      { name: "云端存储 10GB", included: true },
      { name: "所有导出格式", included: true },
      { name: "AI写作助手（5000次/月）", included: true },
      { name: "高级模板库", included: true },
      { name: "30天版本历史", included: true },
      { name: "邮件客服支持", included: true },
    ],
    buttonText: "开始试用",
    buttonVariant: "default" as const,
    popular: true,
  },
  {
    name: "大师版",
    description: "适合专业作家和团队",
    price: "199",
    period: "每月",
    features: [
      { name: "所有专业版功能", included: true },
      { name: "无限云端存储", included: true },
      { name: "AI写作助手（无限制）", included: true },
      { name: "团队协作功能", included: true },
      { name: "自定义模板", included: true },
      { name: "无限版本历史", included: true },
      { name: "API访问", included: true },
      { name: "专属客服经理", included: true },
    ],
    buttonText: "联系销售",
    buttonVariant: "outline" as const,
    popular: false,
  },
]

const faqItems = [
  {
    question: "免费试用期是多长？",
    answer: "专业版和大师版都提供14天免费试用，试用期内可以体验所有功能，包括AI写作助手、高级模板、版本历史等。试用期结束前24小时，我们会发送提醒邮件。您可以随时取消，不会收取任何费用。"
  },
  {
    question: "可以随时取消订阅吗？",
    answer: "是的，您可以随时在账户设置中取消订阅。取消后，您仍可以使用当前套餐的所有功能直到计费周期结束。例如，如果您在月中取消月付套餐，您可以继续使用到月底。不会产生任何额外费用或取消费用。"
  },
  {
    question: "支持哪些付款方式？",
    answer: "我们支持多种付款方式：\n• 支付宝\n• 微信支付\n• 银联卡\n• 国际信用卡（Visa、Mastercard、American Express）\n• PayPal（国际用户）\n所有付款都经过加密处理，确保您的支付安全。"
  },
  {
    question: "可以升级或降级套餐吗？",
    answer: "当然可以！升级套餐会立即生效，系统会按比例计算差价。例如，如果您在月中从免费版升级到专业版，只需支付剩余天数的费用。降级会在当前计费周期结束后生效，确保您不会失去已付费的服务。"
  },
  {
    question: "有年付优惠吗？",
    answer: "是的，选择年付可享受约17%的折扣（相当于免2个月费用）。具体价格：\n• 专业版年付：¥990/年（月付为¥99×12=¥1,188）\n• 大师版年付：¥1,990/年（月付为¥199×12=¥2,388）\n年付用户还可获得额外的存储空间和AI使用额度。"
  },
  {
    question: "团队版有特别定价吗？",
    answer: "是的，我们为5人以上团队提供批量折扣：\n• 5-10人：9折优惠\n• 11-20人：8折优惠\n• 20人以上：请联系销售获取定制报价\n团队版还包括专属的客户成功经理、统一账单管理和优先技术支持。"
  },
  {
    question: "AI写作助手的使用限制是什么？",
    answer: "不同套餐的AI使用额度：\n• 免费版：不包含AI功能\n• 专业版：每月5000次AI调用，包括智能续写、大纲生成、对话创作等\n• 大师版：无限次AI调用\nAI调用次数会在每月初重置。如需额外额度，可单独购买AI点数包。"
  },
  {
    question: "我的数据安全吗？",
    answer: "我们非常重视数据安全：\n• 使用银行级SSL/TLS加密传输数据\n• 数据存储采用AES-256加密\n• 定期备份，防止数据丢失\n• 符合GDPR隐私保护标准\n• 您的作品完全属于您，我们不会访问或使用您的内容\n• 可随时导出所有数据"
  },
  {
    question: "如果超过存储限制怎么办？",
    answer: "当接近存储限制时，我们会提前通知您。您可以：\n1. 删除旧项目或不需要的文件释放空间\n2. 导出并本地保存旧项目\n3. 升级到更高套餐获得更多存储空间\n注意：达到存储上限后，您仍然可以编辑现有项目，但无法创建新项目或上传新文件。"
  },
  {
    question: "支持离线使用吗？",
    answer: "是的！我们的桌面应用（Windows/Mac）支持离线写作。您可以在无网络环境下继续创作，内容会保存在本地。重新连接网络后，所有内容会自动同步到云端。移动应用也支持有限的离线功能。"
  },
  {
    question: "如何导出我的作品？",
    answer: "支持的导出格式因套餐而异：\n• 免费版：PDF、TXT\n• 专业版：PDF、DOCX、EPUB、MOBI、HTML、Markdown、TXT\n• 大师版：以上所有格式 + 自定义导出模板 + Final Draft (.fdx) 剧本格式\n导出无次数限制，可随时进行。"
  },
  {
    question: "退款政策是怎样的？",
    answer: "我们提供30天无理由退款保证。如果您在购买后30天内对产品不满意，可以联系客服申请全额退款，无需提供任何理由。退款将在5-7个工作日内原路返回。超过30天后，您可以在当前计费周期结束时取消订阅，但不予退款。"
  },
]

const comparisonFeatures = [
  { name: "写作项目数量", free: "3个", pro: "无限", master: "无限" },
  { name: "云端存储", free: "100MB", pro: "10GB", master: "无限" },
  { name: "AI写作助手", free: "无", pro: "5000次/月", master: "无限" },
  { name: "导出格式", free: "PDF、TXT", pro: "全部格式", master: "全部格式" },
  { name: "模板库", free: "基础", pro: "高级", master: "高级+自定义" },
  { name: "版本历史", free: "无", pro: "30天", master: "无限" },
  { name: "团队协作", free: "无", pro: "无", master: "支持" },
  { name: "API访问", free: "无", pro: "无", master: "支持" },
  { name: "客服支持", free: "社区", pro: "邮件", master: "专属经理" },
]

function PricingCard({ plan }: { plan: typeof plans[0] }) {
  return (
    <div className={`relative p-8 rounded-2xl border ${plan.popular ? 'border-primary shadow-xl scale-105' : 'border-border'} bg-card`}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
            最受欢迎
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
        <div className="flex items-end justify-center gap-1">
          <span className="text-4xl font-bold text-foreground">¥{plan.price}</span>
          <span className="text-muted-foreground mb-1">/{plan.period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            {feature.included ? (
              <Check className="w-5 h-5 text-primary shrink-0" />
            ) : (
              <X className="w-5 h-5 text-muted-foreground/40 shrink-0" />
            )}
            <span className={feature.included ? 'text-foreground' : 'text-muted-foreground/60'}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>

      <Link href="/pricing">
        <Button 
          className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : ''}`}
          variant={plan.buttonVariant}
          size="lg"
        >
          {plan.buttonText}
        </Button>
      </Link>
    </div>
  )
}

function ComparisonTable() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            功能对比
          </h2>
          <p className="text-muted-foreground">
            详细了解各套餐的功能差异
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold text-foreground">功能</th>
                <th className="text-center py-4 px-4 font-semibold text-foreground">免费版</th>
                <th className="text-center py-4 px-4 font-semibold text-primary">专业版</th>
                <th className="text-center py-4 px-4 font-semibold text-foreground">大师版</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature, index) => (
                <tr key={index} className="border-b border-border">
                  <td className="py-4 px-4 text-foreground">{feature.name}</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">{feature.free}</td>
                  <td className="py-4 px-4 text-center text-foreground font-medium">{feature.pro}</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">{feature.master}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function MoneyBackGuarantee() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center border border-primary/10">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            30天无理由退款保证
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            我们对产品充满信心。如果您在购买后30天内对Squibler不满意，我们将全额退款，无需任何理由。
          </p>
        </div>
      </div>
    </section>
  )
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              选择适合您的套餐
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              无论您是刚开始写作还是专业作家，我们都有适合您的方案。所有付费套餐均提供14天免费试用。
            </p>
            <div className="inline-flex items-center gap-4 bg-muted rounded-full p-1">
              <button className="px-6 py-2 bg-card rounded-full font-medium text-foreground shadow-sm">
                月付
              </button>
              <button className="px-6 py-2 text-muted-foreground hover:text-foreground transition-colors">
                年付（省17%）
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {plans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
              ))}
            </div>
          </div>
        </section>

        <ComparisonTable />
        <MoneyBackGuarantee />
        <FAQSection 
          title="定价常见问题"
          subtitle="关于定价、订阅和功能的详细解答"
          items={faqItems} 
        />
        <CTASection
          title="准备好开始写作了吗？"
          description="立即开始14天免费试用，体验Squibler的全部功能。"
          buttonText="开始免费试用"
          buttonHref="/signup"
        />
      </main>
      <Footer />
    </div>
  )
}

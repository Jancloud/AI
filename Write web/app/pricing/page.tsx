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
    answer: "专业版和大师版都提供14天免费试用，试用期内可以体验所有功能。试用期结束前，您可以随时取消，不会收取任何费用。"
  },
  {
    question: "可以随时取消订阅吗？",
    answer: "是的，您可以随时取消订阅。取消后，您仍可以使用服务直到当前计费周期结束，不会产生额外费用。"
  },
  {
    question: "支持哪些付款方式？",
    answer: "我们支持支付宝、微信支付、银联卡以及主流国际信用卡（Visa、Mastercard、American Express等）。"
  },
  {
    question: "可以升级或降级套餐吗？",
    answer: "当然可以。您可以随时升级套餐，升级会立即生效。降级会在当前计费周期结束后生效。"
  },
  {
    question: "有年付优惠吗？",
    answer: "是的，选择年付可享受2个月免费优惠，相当于8.3折。年付用户还可获得额外的存储空间和AI使用额度。"
  },
  {
    question: "团队版有特别定价吗？",
    answer: "是的，5人以上团队可享受批量折扣。请联系我们的销售团队获取定制报价。"
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

      <Link href="/signup">
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
          subtitle="关于定价和订阅的常见问题"
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

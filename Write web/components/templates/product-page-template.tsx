import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesGrid } from "@/components/sections/features-grid"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"
import { LucideIcon, Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface FAQItem {
  question: string
  answer: string
}

interface Benefit {
  title: string
  description: string
}

interface ProductPageTemplateProps {
  // Hero
  badge?: string
  title: string
  highlightedText?: string
  description: string
  
  // Features
  featuresTitle?: string
  featuresSubtitle?: string
  features: Feature[]
  
  // Benefits
  benefitsTitle?: string
  benefitsSubtitle?: string
  benefits?: Benefit[]
  
  // How it works
  howItWorksTitle?: string
  howItWorksSteps?: { step: number; title: string; description: string }[]
  
  // FAQ
  faqItems: FAQItem[]
  
  // CTA
  ctaTitle?: string
  ctaDescription?: string
}

function BenefitsSection({ 
  title = "为什么选择我们", 
  subtitle,
  benefits 
}: { 
  title?: string
  subtitle?: string
  benefits: Benefit[] 
}) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border"
            >
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection({ 
  title = "如何使用", 
  steps 
}: { 
  title?: string
  steps: { step: number; title: string; description: string }[] 
}) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
        </div>

        <div className="space-y-8">
          {steps.map((item, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0 text-primary-foreground font-bold text-lg">
                {item.step}
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block pt-6">
                  <ArrowRight className="w-6 h-6 text-muted-foreground/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/signup">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              立即开始
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProductShowcaseSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-muted-foreground">产品界面预览</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              专业级写作体验
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              我们的编辑器专为作家设计，提供无干扰的写作环境。
              智能排版、自动保存、多设备同步，让您专注于创作本身。
            </p>
            <ul className="space-y-3">
              {[
                "简洁优雅的写作界面",
                "实时字数和进度统计",
                "智能章节管理",
                "一键导出多种格式"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProductPageTemplate({
  badge,
  title,
  highlightedText,
  description,
  featuresTitle = "核心功能",
  featuresSubtitle,
  features,
  benefitsTitle,
  benefitsSubtitle,
  benefits,
  howItWorksTitle,
  howItWorksSteps,
  faqItems,
  ctaTitle = "准备好开始了吗？",
  ctaDescription = "立即体验我们的写作工具，开启您的创作之旅。"
}: ProductPageTemplateProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection
          badge={badge}
          title={title}
          highlightedText={highlightedText}
          description={description}
          primaryButtonText="免费试用"
          primaryButtonHref="/signup"
          secondaryButtonText="了解定价"
          secondaryButtonHref="/pricing"
        />
        
        <FeaturesGrid
          title={featuresTitle}
          subtitle={featuresSubtitle}
          features={features}
        />
        
        <ProductShowcaseSection />
        
        {benefits && benefits.length > 0 && (
          <BenefitsSection 
            title={benefitsTitle}
            subtitle={benefitsSubtitle}
            benefits={benefits} 
          />
        )}
        
        {howItWorksSteps && howItWorksSteps.length > 0 && (
          <HowItWorksSection 
            title={howItWorksTitle}
            steps={howItWorksSteps} 
          />
        )}
        
        <Testimonials />
        
        <FAQSection items={faqItems} />
        
        <CTASection
          title={ctaTitle}
          description={ctaDescription}
          buttonText="免费开始"
          buttonHref="/signup"
        />
      </main>
      <Footer />
    </div>
  )
}

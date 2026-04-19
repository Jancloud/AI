import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

interface HeroSectionProps {
  badge?: string
  title: string
  highlightedText?: string
  description: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  showVideo?: boolean
  imageSrc?: string
  imageAlt?: string
}

export function HeroSection({
  badge,
  title,
  highlightedText,
  description,
  primaryButtonText = "免费开始",
  primaryButtonHref = "/signup",
  secondaryButtonText,
  secondaryButtonHref,
  showVideo = false,
  imageSrc,
  imageAlt = "产品截图"
}: HeroSectionProps) {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {badge && (
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {badge}
            </div>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            {title}
            {highlightedText && (
              <span className="text-primary"> {highlightedText}</span>
            )}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryButtonHref}>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold w-full sm:w-auto"
              >
                {primaryButtonText}
              </Button>
            </Link>
            {secondaryButtonText && secondaryButtonHref && (
              <Link href={secondaryButtonHref}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-6 text-lg font-semibold w-full sm:w-auto"
                >
                  {showVideo && <Play className="w-5 h-5 mr-2" />}
                  {secondaryButtonText}
                </Button>
              </Link>
            )}
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            无需信用卡 · 14天免费试用
          </p>
        </div>

        {imageSrc && (
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <div className="rounded-xl overflow-hidden shadow-2xl border border-border">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                  <p className="text-muted-foreground">产品演示</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

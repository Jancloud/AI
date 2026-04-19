import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
  variant?: "default" | "gradient"
}

export function CTASection({
  title = "准备好开始写作了吗？",
  description = "加入数十万作家的行列，使用Squibler让您的创作之旅更加轻松。",
  buttonText = "免费开始",
  buttonHref = "/signup",
  variant = "default"
}: CTASectionProps) {
  return (
    <section className={`py-20 ${variant === "gradient" ? "bg-gradient-to-r from-primary to-primary/80" : "bg-primary"}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          {title}
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <Link href={buttonHref}>
          <Button 
            size="lg" 
            className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-lg font-semibold"
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </section>
  )
}

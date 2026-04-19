"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  avatar?: string
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "张明",
    role: "畅销书作家",
    content: "Squibler彻底改变了我的写作方式。AI助手帮助我克服了写作瓶颈，让我的创作效率提高了三倍。",
    rating: 5,
  },
  {
    id: 2,
    name: "李华",
    role: "自由撰稿人",
    content: "作为一名全职作家，我需要一个可靠的写作工具。Squibler不仅提供了专业的写作环境，还有强大的AI功能。",
    rating: 5,
  },
  {
    id: 3,
    name: "王芳",
    role: "编剧",
    content: "剧本写作从未如此简单。Squibler的格式化功能和AI建议让我的创作过程变得顺畅无比。",
    rating: 5,
  },
  {
    id: 4,
    name: "刘强",
    role: "网络小说作家",
    content: "每天需要大量写作的我，终于找到了理想的工具。Squibler让我的日更变得轻松愉快。",
    rating: 5,
  },
]

interface TestimonialsProps {
  testimonials?: Testimonial[]
  title?: string
  subtitle?: string
}

export function Testimonials({
  testimonials = defaultTestimonials,
  title = "作家们怎么说",
  subtitle = "加入数十万满意用户的行列"
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-card rounded-2xl shadow-lg border border-border p-8 md:p-12">
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
              &ldquo;{testimonials[currentIndex].content}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold text-lg">
                  {testimonials[currentIndex].name[0]}
                </span>
              </div>
              <div>
                <div className="font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 bg-card rounded-full shadow-lg border border-border flex items-center justify-center hover:bg-accent transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 bg-card rounded-full shadow-lg border border-border flex items-center justify-center hover:bg-accent transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

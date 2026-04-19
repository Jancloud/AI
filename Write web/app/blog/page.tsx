import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Newspaper, Calendar, ArrowRight, BookOpen, PenTool, Sparkles } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "AI写作工具的5个使用技巧",
    excerpt: "了解如何充分利用AI写作助手，提升您的创作效率和质量。",
    category: "写作技巧",
    date: "2026-04-15",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
  },
  {
    id: 2,
    title: "如何构建引人入胜的故事结构",
    excerpt: "学习经典的三幕结构和英雄之旅模式，让您的故事更具吸引力。",
    category: "故事创作",
    date: "2026-04-12",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
  },
  {
    id: 3,
    title: "角色塑造的终极指南",
    excerpt: "创造立体、真实的人物角色，让读者产生共鸣。",
    category: "写作技巧",
    date: "2026-04-10",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
  },
  {
    id: 4,
    title: "AI辅助写作的未来趋势",
    excerpt: "探索人工智能如何改变写作行业，以及未来可能的发展方向。",
    category: "行业资讯",
    date: "2026-04-08",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
  },
  {
    id: 5,
    title: "出版流程完全指南",
    excerpt: "从稿件完成到正式出版，了解每一步的关键要点。",
    category: "出版指南",
    date: "2026-04-05",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
  },
  {
    id: 6,
    title: "克服写作瓶颈的10种方法",
    excerpt: "当您感到创作枯竭时，这些技巧可以帮助您重新找到灵感。",
    category: "写作技巧",
    date: "2026-04-02",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
  },
]

const categories = [
  { name: "写作技巧", icon: PenTool, count: 25 },
  { name: "故事创作", icon: BookOpen, count: 18 },
  { name: "行业资讯", icon: Newspaper, count: 12 },
  { name: "AI工具", icon: Sparkles, count: 15 },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Squibler 博客
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                写作技巧与行业资讯
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                分享专业的写作知识、创作技巧和AI工具使用指南，助您成为更优秀的创作者。
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <div key={category.name} className="p-6 bg-card rounded-xl border border-border text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count} 篇文章</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">最新文章</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-sm">
                      阅读全文 <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              订阅我们的博客
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              获取最新的写作技巧和行业资讯，直接发送到您的邮箱。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="输入您的邮箱"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-primary-foreground"
              />
              <Button className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
                订阅
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

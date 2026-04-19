import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, FileText, Lightbulb, PenTool, BookMarked, Layers, ArrowRight } from "lucide-react"

const knowledgeCategories = [
  {
    name: "写作基础",
    icon: PenTool,
    description: "掌握写作的基本技巧和原则",
    courses: 12,
    color: "bg-blue-500",
  },
  {
    name: "故事结构",
    icon: Layers,
    description: "学习如何构建引人入胜的故事",
    courses: 8,
    color: "bg-purple-500",
  },
  {
    name: "角色塑造",
    icon: BookMarked,
    description: "创造立体、真实的角色人物",
    courses: 10,
    color: "bg-green-500",
  },
  {
    name: "对话写作",
    icon: FileText,
    description: "写出自然流畅的人物对话",
    courses: 7,
    color: "bg-orange-500",
  },
  {
    name: "世界观构建",
    icon: Lightbulb,
    description: "打造丰富的虚拟世界设定",
    courses: 9,
    color: "bg-pink-500",
  },
  {
    name: "编辑与润色",
    icon: BookOpen,
    description: "提升作品质量的专业技巧",
    courses: 11,
    color: "bg-teal-500",
  },
]

const popularCourses = [
  {
    id: 1,
    title: "从零开始学写作",
    lessons: 24,
    students: 1250,
    level: "初级",
    icon: PenTool,
  },
  {
    id: 2,
    title: "小说创作完全指南",
    lessons: 36,
    students: 890,
    level: "中级",
    icon: BookMarked,
  },
  {
    id: 3,
    title: "AI辅助写作实战",
    lessons: 18,
    students: 2100,
    level: "初级",
    icon: Lightbulb,
  },
]

export default function KnowledgeCenterPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                学习中心
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                写作知识中心
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                系统化的写作课程和专业指南，帮助您从新手成长为专业作家。
              </p>
            </div>
          </div>
        </section>

        {/* Course Categories */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">课程分类</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {knowledgeCategories.map((category) => {
                const Icon = category.icon
                return (
                  <div key={category.name} className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-md cursor-pointer group">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{category.courses} 门课程</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Popular Courses */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">热门课程</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {popularCourses.map((course) => {
                const Icon = course.icon
                return (
                  <div key={course.id} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span>{course.lessons} 节课</span>
                        <span>•</span>
                        <span>{course.students} 学员</span>
                        <span>•</span>
                        <span className="px-2 py-0.5 bg-primary/10 text-primary rounded">{course.level}</span>
                      </div>
                      <Button className="w-full" variant="outline">
                        开始学习
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              开始您的学习之旅
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              免费注册账号，即可访问所有免费课程和学习资源。
            </p>
            <Link href="/signup">
              <Button size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 px-8">
                免费注册
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

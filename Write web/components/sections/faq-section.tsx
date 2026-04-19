"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  subtitle?: string
  items: FAQItem[]
}

export function FAQSection({
  title = "常见问题",
  subtitle = "找到您最关心的问题答案",
  items
}: FAQSectionProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {items.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 data-[state=open]:bg-accent/50"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

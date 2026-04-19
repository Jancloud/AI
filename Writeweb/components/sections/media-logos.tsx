export function MediaLogos() {
  const logos = [
    { name: "Forbes", opacity: 0.6 },
    { name: "TechCrunch", opacity: 0.6 },
    { name: "Wired", opacity: 0.6 },
    { name: "The Verge", opacity: 0.6 },
    { name: "Mashable", opacity: 0.6 },
  ]

  return (
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          被全球领先媒体报道
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo) => (
            <div 
              key={logo.name} 
              className="text-foreground/40 font-bold text-xl md:text-2xl tracking-tight"
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

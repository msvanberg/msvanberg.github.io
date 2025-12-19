const ResearchSection = () => {
  const keywords = [
    { label: "Innovation Systems", featured: true },
    { label: "Sustainability Transitions", featured: true },
    { label: "Emerging Technologies", featured: true },
    { label: "Societal Resilience", featured: true },
    { label: "Innovation Policy", featured: true },
    { label: "Human Capital", featured: true },
    { label: "Economic Geography", featured: true },
    { label: "Decarbonization", featured: true },
    { label: "Computational Methods", featured: true },
  ];

  const researchAreas = [
    {
      title: "Swedish innovation policy",
      description:
        "Analyzing Swedish innovation policy for the 2045 decarbonization goals.",
    },
    {
      title: "Co-evolution of human capital and socio-technical systems",
      description:
        "Understanding the links between policy, skills, and technological and societal change.",
    },
    {
      title: "Computational approaches",
      description:
        "Applying AI and data-intensive methods from my software industry background to analyze complex and complicated socio-technical systems.",
    },
  ];

  return (
    <section id="research" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 animate-fade-up">
              Research Focus
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-100">
              Exploring the intersection of innovation policy, technological change, 
              and sustainable development.
            </p>
          </div>

          {/* Keywords cloud */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-up animation-delay-200">
            {keywords.map((keyword, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 cursor-default ${
                  keyword.featured
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                {keyword.label}
              </span>
            ))}
          </div>

          {/* Research areas grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className={`group bg-card rounded-3xl p-8 border border-border hover:border-accent/30 transition-all hover:shadow-elevated animate-fade-up animation-delay-${(index + 3) * 100}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-hero flex items-center justify-center mb-6">
                  <span className="text-primary-foreground font-serif text-xl font-medium">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-medium mb-4 group-hover:text-accent transition-colors">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;

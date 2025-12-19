const AboutSection = () => {
  const education = [
    {
      degree: "PhD in Technology Management & Economics",
      institution: "Chalmers University of Technology",
      status: "In Progress",
      focus: "Swedish innovation policy for decarbonization by 2045",
    },
    {
      degree: "MS in Technology and Policy",
      institution: "Massachusetts Institute of Technology",
      status: "Completed",
      focus: "MIT Technology and Policy Thesis Prize recipient",
    },
    {
      degree: "BA in Computer Science, minor in Mathematics",
      institution: "Wellesley College",
      status: "Completed",
      focus: "magna cum laude, honors in the major",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 animate-fade-up">
            About Me
          </h2>

          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6 animate-fade-up animation-delay-100">
              I am a PhD student at Chalmers University of Technology, working to understand 
              the co-evolution of technology and society. My research 
              focuses on <span className="text-foreground font-medium">Swedish innovation policy 
              for decarbonization by 2045</span>, with a particular interest in heavy industry,
              comprising 30% of the country's emissions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up animation-delay-200">
              Having spent the early years of my career in the software industry developing 
              AI and other data-intensive technologies, I gravitate towards using 
              <span className="text-foreground font-medium"> computational methods</span> in my research. 
              This unique combination of technical expertise and policy understanding enables 
              me to approach sustainability transitions from new angles.
            </p>
          </div>

          {/* Education timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-medium mb-6 animate-fade-up animation-delay-300">
              Education
            </h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative pl-8 pb-6 border-l-2 border-border last:pb-0 animate-fade-up animation-delay-${(index + 4) * 100}`}
                >
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-accent" />
                  <div className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-elevated transition-shadow">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h4 className="text-lg font-serif font-medium">{edu.degree}</h4>
                      <span className="text-xs font-medium px-3 py-1 bg-secondary rounded-full text-secondary-foreground">
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-accent font-medium mb-2">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.focus}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

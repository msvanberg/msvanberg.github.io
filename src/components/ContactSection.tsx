import { Mail, Linkedin, FileText, BookOpen } from "lucide-react";

const ContactSection = () => {
  const links = [
    {
      icon: Mail,
      label: "Email",
      value: "maja.svanberg@chalmers.se",
      href: "mailto:maja.svanberg@chalmers.se",
    },
    {
      icon: BookOpen,
      label: "Google Scholar",
      value: "Publications & Citations",
      href: "https://scholar.google.com/citations?user=afEqzPMAAAAJ&hl",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/majasvanberg/",
    },
    {
      icon: FileText,
      label: "CV",
      value: "Available upon request",
      href: "",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 animate-fade-up">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto animate-fade-up animation-delay-100">
              Interested in collaboration, or discussing 
              sustainability transitions research? Are you a Chalmers student thinking about a thesis project about socio-technical change? 
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex items-center gap-4 bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-all hover:shadow-elevated animate-fade-up animation-delay-${(index + 2) * 100}`}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <link.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="font-medium group-hover:text-accent transition-colors">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Personal note */}
          <div className="mt-16 text-center animate-fade-up animation-delay-600">
            <p className="text-muted-foreground italic">
              Outside of work, I enjoy writing, skiing, and playing soccer. 
              I am also one of the representatives of the 
              <a href="https://transitionsnest.wordpress.com/"> Network for Early career researchers in Sustinability Transitions (NEST) </a> 
              in the <a href="https://www.transitionsnetwork.org/">STRN</a> steering group.  
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

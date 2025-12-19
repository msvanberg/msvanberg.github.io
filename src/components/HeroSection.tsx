import { MapPin, GraduationCap, ExternalLink } from "lucide-react";
import profileImg from '../assets/profile.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background organic shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 blob-shape animate-fade-in" />
        <div className="absolute top-1/2 -left-20 w-64 h-64 bg-accent/5 blob-shape animate-fade-in animation-delay-200" />
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-secondary blob-shape animate-fade-in animation-delay-400" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <div className="animate-fade-up">
              <p className="text-muted-foreground font-medium tracking-wide uppercase text-sm mb-4">
                Technology Policy Researcher · PhD Student
              </p>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] mb-6 animate-fade-up animation-delay-100">
              Maja
              <br />
              <span className="text-gradient">Svanberg</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-xl animate-fade-up animation-delay-200">
              Understanding technological development and societal change.
            </p>

            <div className="flex flex-wrap gap-4 mb-8 animate-fade-up animation-delay-300">
              <div className="flex items-center gap-2 text-foreground/80">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Gothenburg, Sweden</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <GraduationCap className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Chalmers University of Technology</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-up animation-delay-400">
              <a
                href="https://scholar.google.com/citations?user=afEqzPMAAAAJ&hl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium transition-all hover:shadow-elevated hover:-translate-y-0.5"
              >
                Google Scholar
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium transition-all hover:bg-secondary/80"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up animation-delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl rotate-6 scale-105 opacity-20" />
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={profileImg}
                  alt="Maja Svanberg - Sustainability Transitions Researcher"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

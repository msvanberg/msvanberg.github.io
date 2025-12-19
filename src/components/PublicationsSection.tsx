import { FileText, ExternalLink } from "lucide-react";

const publications = [
  
  {
    title: "Assessing socio-technical trajectories through job postings",
    journal: "Working paper",
    year: "2026",
    authors: "Svanberg, M., Andersson, J., Hellsmark, H.",
    link: "",
  },
  {
    title: "Exploring the use of data science and causal empiricism in transitions research: a systematic literature review",
    journal: "16th International Sustainability Transitions Conference",
    year: "2025",
    authors: "Svanberg, M., Andersson, J., Hellsmark, H.",
    link: "",
  },
  {
    title: "Beyond AI exposure: which tasks are cost-effective to automate with computer vision?",
    journal: "Manuscript, available at SSRN",
    year: "2024",
    authors: "Svanberg, M., Li, W., Fleming, M., Goehring, B., Thompson, N.",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4700751",
  },
  // {
  //   title: "Socio-Technical Systems and Climate Policy",
  //   journal: "Energy Research & Social Science",
  //   year: "2023",
  //   authors: "Svanberg, M.",
  //   link: "#",
  // },
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <FileText className="w-6 h-6 text-accent" />
            <h2 className="font-serif text-3xl lg:text-4xl font-medium">
              Selected work
            </h2>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <a
                key={index}
                href={pub.link}
                className="block p-6 bg-background rounded-2xl border border-border hover:border-accent/50 hover:shadow-soft transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-medium mb-2 group-hover:text-accent transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-1">
                      {pub.authors}
                    </p>
                    <p className="text-sm">
                      <span className="text-accent font-medium">{pub.journal}</span>
                      <span className="text-muted-foreground"> · {pub.year}</span>
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
                </div>
              </a>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8">
            View full publication list on{" "}
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Google Scholar
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;

import { Mic, Video, Newspaper } from "lucide-react";

const mediaItems = [
  {
    type: "podcast",
    title: "The Future of Sustainable Innovation",
    source: "Climate Conversations Podcast",
    date: "2024",
    icon: Mic,
    link: "#",
  },
  {
    type: "video",
    title: "TEDx Talk: Rethinking Sustainability Transitions",
    source: "TEDx Stockholm",
    date: "2023",
    icon: Video,
    link: "#",
  },
  {
    type: "article",
    title: "Why Systems Thinking Matters for Climate Action",
    source: "The Conversation",
    date: "2023",
    icon: Newspaper,
    link: "#",
  },
];

const MediaSection = () => {
  return (
    <section id="media" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-4xl font-medium mb-12 text-center">
            Media & Appearances
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {mediaItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.link}
                  className="group p-6 bg-secondary/50 rounded-2xl border border-border hover:border-accent/50 hover:bg-secondary transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {item.type}
                  </span>
                  <h3 className="font-serif text-lg font-medium mt-2 mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.source} · {item.date}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;

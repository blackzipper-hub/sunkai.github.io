const publications = [
  {
    year: "2025",
    title: "Towards Robust Multimodal Reasoning in Large Language Models",
    venue: "NeurIPS 2025",
    authors: "Your Name, Collaborator A, Collaborator B",
    highlight: true,
    link: "#",
  },
  {
    year: "2024",
    title: "Efficient Fine-tuning Strategies for Domain-Specific Language Models",
    venue: "ICML 2024",
    authors: "Your Name, Collaborator C, Collaborator D",
    highlight: true,
    link: "#",
  },
  {
    year: "2024",
    title: "A Survey on Trustworthy AI: From Principles to Practice",
    venue: "ACM Computing Surveys",
    authors: "Collaborator A, Your Name, Collaborator E",
    highlight: false,
    link: "#",
  },
  {
    year: "2023",
    title: "Self-Supervised Visual Representation Learning with Contrastive Objectives",
    venue: "CVPR 2023",
    authors: "Your Name, Collaborator F",
    highlight: true,
    link: "#",
  },
  {
    year: "2023",
    title: "Reinforcement Learning from Human Feedback: A Comprehensive Study",
    venue: "AAAI 2023",
    authors: "Collaborator B, Your Name, Collaborator G",
    highlight: true,
    link: "#",
  },
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Selected <span className="text-gold">Publications</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {publications.map((pub, i) => (
              <div
                key={i}
                className="animate-slide-left relative pl-12 md:pl-20"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-6.5 top-2 w-3 h-3 rounded-full bg-gold border-2 border-card shadow-sm" />

                <a
                  href={pub.link}
                  className="block bg-card rounded-xl p-6 border border-border card-hover group cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-muted-foreground">{pub.year}</span>
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        pub.highlight
                          ? "bg-gold/15 text-gold"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {pub.venue}
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-gold transition-colors duration-300 mb-2">
                    {pub.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{pub.authors}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;

const projects = [
  {
    title: "LLM-Bench",
    description: "A comprehensive benchmark suite for evaluating large language models across reasoning, coding, and safety dimensions.",
    tags: ["Python", "PyTorch", "Transformers", "Evaluation"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=340&fit=crop",
    link: "#",
  },
  {
    title: "MultiModal-Fusion",
    description: "An open-source framework for multimodal learning, supporting vision-language pre-training with flexible architectures.",
    tags: ["Python", "JAX", "Vision-Language", "Pre-training"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=340&fit=crop",
    link: "#",
  },
  {
    title: "SafeGuard AI",
    description: "Toolbox for AI safety evaluation, including red-teaming, bias detection, and robustness testing for deployed models.",
    tags: ["Python", "FastAPI", "Safety", "Evaluation"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=340&fit=crop",
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-gold">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              className="animate-on-scroll group block bg-card rounded-2xl overflow-hidden border border-border card-hover cursor-pointer"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-gold transition-colors duration-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag text-[11px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

const researchAreas = [
  {
    icon: "🧠",
    title: "Multimodal LLM",
    description: "Designing multimodal language model methods that better connect perception, generation, and reasoning.",
    color: "from-primary/10 to-teal-soft",
  },
  {
    icon: "👁️",
    title: "Image and Video Generation",
    description: "Building practical generation pipelines and evaluation methods for controllable and high-fidelity visual content.",
    color: "from-gold/10 to-secondary",
  },
  {
    icon: "🌍",
    title: "World Model",
    description: "Exploring model design for temporal understanding and simulation to support richer downstream generation tasks.",
    color: "from-teal-light/20 to-muted",
  },
  {
    icon: "⚙️",
    title: "Downstream AIGC Applications",
    description: "Turning research into usable systems by integrating model capabilities into real product workflows.",
    color: "from-secondary to-primary/5",
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Research <span className="text-gold">Focus</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            I focus on multimodal generation and reasoning systems, from benchmark design to practical product-facing workflows.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {researchAreas.map((area, i) => (
            <div
              key={area.title}
              className={`animate-on-scroll bg-gradient-to-br ${area.color} rounded-2xl p-8 border border-border card-hover cursor-default group`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {area.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                {area.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;

const researchAreas = [
  {
    icon: "🧠",
    title: "Large Language Models",
    description: "Advancing the capabilities and safety of foundation models through novel training and alignment techniques.",
    color: "from-primary/10 to-teal-soft",
  },
  {
    icon: "👁️",
    title: "Multimodal Learning",
    description: "Building systems that perceive, understand, and reason across text, images, and structured data.",
    color: "from-gold/10 to-secondary",
  },
  {
    icon: "🛡️",
    title: "Trustworthy AI",
    description: "Developing robust, fair, and interpretable AI systems that humans can understand and trust.",
    color: "from-teal-light/20 to-muted",
  },
  {
    icon: "🔬",
    title: "AI for Science",
    description: "Leveraging machine learning to accelerate scientific discovery in biomedicine and materials science.",
    color: "from-secondary to-primary/5",
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Research <span className="text-gold">Directions</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            My research aims to push the boundaries of AI while ensuring its safe and beneficial deployment.
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

const educationData = [
  {
    degree: "MSc in Computer Science and Engineering",
    school: "The Hong Kong University of Science and Technology (HKUST)",
    year: "2025 - Present",
    focus: "Advisor: Prof. Qifeng Chen",
  },
  {
    degree: "BEng in Software Engineering",
    school: "South China University of Technology (SCUT)",
    year: "Graduated in 2025",
    focus: "Software Engineering",
  },
];

const researchFocus = [
  "Multimodal LLM",
  "Image & Video Generation",
  "World Model",
  "Downstream AIGC Applications",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            About <span className="text-gold">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div className="animate-on-scroll">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <span className="text-gold text-2xl">🎓</span> Education
            </h3>
            <div className="space-y-4">
              {educationData.map((ed, i) => (
                <div
                  key={i}
                  className="bg-card rounded-xl p-5 border border-border card-hover cursor-default"
                >
                  <h4 className="font-semibold text-foreground">{ed.degree}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{ed.school}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gold font-medium">{ed.focus}</span>
                    <span className="text-xs text-muted-foreground">{ed.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Introduction + Research Focus Card */}
          <div className="animate-on-scroll" style={{ transitionDelay: "0.15s" }}>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <span className="text-gold text-2xl">👋</span> Introduction
            </h3>
            <div className="bg-card rounded-xl p-6 border border-border card-hover mb-6">
              <p className="text-muted-foreground leading-relaxed">
                Hello! I am a first-year MSc student in CSE at HKUST. I work as a research assistant at Visual Intelligence Lab
                led by under the supervision of Prof. Qifeng Chen. I was also fortunate to
                be an internship at ByteDance, Huawei, and NewAI. My research interests lie
                at the intersection of Multimodal LLM and Machine Learning, with a current
                focus on novel applications for image/video generation, world models, and
                other downstream AIGC tasks.
              </p>
            </div>

            <div className="bg-card rounded-xl p-5 border border-border card-hover">
              <h4 className="font-semibold text-foreground mb-3">Research Focus</h4>
              <div className="flex flex-wrap gap-2">
                {researchFocus.map((item) => (
                  <span key={item} className="tech-tag text-xs">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

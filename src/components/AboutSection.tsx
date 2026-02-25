const educationData = [
  { degree: "Ph.D. in Computer Science", school: "University Name", year: "2022 – Present", focus: "AI / Machine Learning" },
  { degree: "M.S. in Computer Science", school: "University Name", year: "2020 – 2022", focus: "Deep Learning" },
  { degree: "B.S. in Computer Science", school: "University Name", year: "2016 – 2020", focus: "Software Engineering" },
];

const interests = [
  "Large Language Models",
  "Multimodal Learning",
  "Trustworthy AI",
  "Computer Vision",
  "Reinforcement Learning",
  "AI for Science",
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

          {/* Research Interests */}
          <div className="animate-on-scroll" style={{ transitionDelay: "0.15s" }}>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <span className="text-gold text-2xl">🔬</span> Research Interests
            </h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {interests.map((tag) => (
                <span
                  key={tag}
                  className="tech-tag hover:bg-gold/20 hover:text-gold hover:border-gold/30 border border-transparent transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="bg-card rounded-xl p-6 border border-border card-hover">
              <p className="text-muted-foreground leading-relaxed">
                I am a researcher in artificial intelligence, focusing on building intelligent systems 
                that are reliable, interpretable, and beneficial. My work spans across large language models, 
                multimodal learning, and AI safety. I believe in open science and reproducible research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

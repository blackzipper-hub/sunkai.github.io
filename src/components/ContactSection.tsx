const awards = [
  {
    emoji: "🥈",
    label: "Silver Medal",
    detail: "International Exhibition of Inventions Geneva, 2026",
  },
  {
    emoji: "🎓",
    label: "Excellent Student Scholarship",
    detail: "One of the awardees of the School of Engineering Excellent Student Scholarship, 2025/26",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-on-scroll">
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Honors & <span className="text-gold">Awards</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-lg mx-auto mb-10">
            Recognition from competitions and the university — each listed below.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4 animate-on-scroll text-left" style={{ transitionDelay: "0.15s" }}>
          {awards.map((item) => (
            <div
              key={item.label}
              className="group flex gap-4 sm:gap-5 items-start rounded-2xl border border-border bg-card/80 hover:bg-card hover:border-gold/30 px-5 py-4 sm:px-6 sm:py-5 transition-colors duration-300 card-hover"
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-2xl shadow-inner ring-1 ring-gold/20 group-hover:scale-105 transition-transform duration-300"
                aria-hidden
              >
                {item.emoji}
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="text-sm font-semibold text-foreground mb-1">{item.label}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sunkai · Built for research and engineering
        </p>
      </div>
    </section>
  );
};

export default ContactSection;

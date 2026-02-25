import ParticleCanvas from "./ParticleCanvas";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <ParticleCanvas />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gold/20 text-gold-light border border-gold/30 mb-6">
            AI &amp; Machine Learning Researcher
          </span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Your Name
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/70 mb-4 font-light max-w-2xl mx-auto">
          Exploring the frontiers of artificial intelligence to build systems that understand, reason, and create.
        </p>
        <p className="text-lg text-gold-light/80 font-display italic mb-10">
          "Bridging theory and practice for trustworthy AI"
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#research"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-sm bg-gold text-navy-deep hover:bg-gold-glow transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5 cursor-pointer"
          >
            View Research
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-sm border-2 border-primary-foreground/30 text-primary-foreground hover:border-gold hover:text-gold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50 animate-float" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

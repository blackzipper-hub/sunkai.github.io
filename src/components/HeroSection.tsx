import ParticleCanvas from "./ParticleCanvas";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <ParticleCanvas />
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-14 lg:gap-16">
          {/* Left: avatar + role */}
          <div className="flex flex-col items-center md:items-start shrink-0 md:w-[min(100%,280px)]">
            <img
              src="/avatar.png"
              alt="Sunkai avatar"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-gold/50 shadow-lg shadow-gold/20"
              loading="eager"
            />
            <span className="mt-5 inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gold/20 text-gold-light border border-gold/30 text-center md:text-left">
              MSc Student · CSE @ HKUST
            </span>
          </div>

          {/* Right: name, bio, tagline, CTAs */}
          <div className="flex-1 text-center md:text-left min-w-0">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Sunkai
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/70 mb-4 font-light max-w-2xl md:max-w-none mx-auto md:mx-0">
              Researching Multimodal LLM and Machine Learning for image and video generation, world models, and downstream AIGC tasks.
            </p>
            <p className="text-lg text-gold-light/80 font-display italic mb-10 max-w-2xl md:max-w-none mx-auto md:mx-0">
              &quot;Bridging research and real-world AI applications&quot;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-sm bg-gold text-navy-deep hover:bg-gold-glow transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5 cursor-pointer"
              >
                View About
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-sm border-2 border-primary-foreground/30 text-primary-foreground hover:border-gold hover:text-gold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                View Profile
              </a>
            </div>
          </div>
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

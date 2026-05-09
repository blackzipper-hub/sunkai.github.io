import { Link } from "react-router-dom";
import { Clapperboard } from "lucide-react";

const HCIProjectSection = () => {
  return (
    <section id="hci-project" className="py-24 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            HCI - <span className="text-gold">Project</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          <Link
            to="/projects/cuti"
            className="animate-on-scroll group block bg-card rounded-2xl overflow-hidden border border-gold/50 ring-1 ring-gold/30 shadow-xl shadow-gold/10 card-hover cursor-pointer"
          >
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 p-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/cuti-logo.png"
                    alt="Cuti logo"
                    className="h-9 w-9 rounded-xl object-cover border border-gold/30"
                  />
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-gold transition-colors duration-300">
                    Cuti - Music Video Agent
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Designed and implemented an immersive AI video review-and-edit interface with synchronized
                  section navigation and full-screen visualization. Built a modular creation suite that integrates
                  multi-stage AI generation pipelines for story, character, and scene design.
                </p>
                <p className="text-sm text-gold mb-4">
                  Official Site: <span className="underline underline-offset-4">https://cuti.land/</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Full-Stack Engineer", "Hong Kong, China", "11.2025 - Present"].map((tag) => (
                    <span key={tag} className="tech-tag text-[11px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {["/cuti-music-video.png", "/cuti-storytelling-bg.png", "/cuti-lipsync-bg.png"].map((image, imageIndex) => (
                  <img
                    key={image}
                    src={image}
                    alt={`Cuti project preview ${imageIndex + 1}`}
                    className={`w-full rounded-xl object-cover border border-border/70 ${
                      imageIndex === 0 ? "col-span-2 h-32 sm:h-40" : "h-24 sm:h-28"
                    }`}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </Link>

          <Link
            to="/projects/video-paper"
            className="animate-on-scroll group block bg-card rounded-2xl overflow-hidden border border-border ring-1 ring-gold/20 shadow-lg card-hover cursor-pointer"
          >
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 p-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                    <Clapperboard className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-gold transition-colors duration-300">
                    Video Paper — Drama.Land HCI Critique
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  A short video paper on Drama.Land&apos;s AI music video generator, framed as &quot;The Good, the Bad, the
                  Co-Authored&quot;: democratization and mental-model fit versus evaluation gulfs and missing control, plus
                  how generative tools redistribute authorship beyond a simple user–system pair.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["HCI Course", "Video Paper", "Generative AI"].map((tag) => (
                    <span key={tag} className="tech-tag text-[11px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-border/70 bg-muted">
                <img
                  src="/video-paper-cover.jpg"
                  alt="Video paper opening frame"
                  className="w-full h-32 sm:h-40 lg:h-44 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HCIProjectSection;

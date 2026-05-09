import { Link } from "react-router-dom";

const previewImages = [
  "/cuti-music-video.png",
  "/cuti-storytelling-bg.png",
  "/cuti-lipsync-bg.png",
];

const workHighlights = [
  {
    title: "Owned Most Technical Delivery",
    description:
      "I was responsible for the majority of technical implementation across the product workflow, from generation pipeline orchestration to interaction and iteration experience.",
  },
  {
    title: "Single-Sentence to Full MV Workflow",
    description:
      "Built a production-oriented flow that expands one prompt into minute-level music video generation, reducing heavy manual clip-by-clip setup.",
  },
  {
    title: "Rhythm and Emotion Alignment",
    description:
      "Implemented task flow and control points to better align video shots with music rhythm and emotional progression, which is critical for MV quality.",
  },
  {
    title: "Narrative and Character Consistency",
    description:
      "Designed generation and reflection steps to preserve character/style consistency across scenes while supporting iterative revision instead of full reruns.",
  },
];

const painPoints = [
  "Most existing AI video tools cannot reliably generate minute-level long-form music videos; many SOTA models still focus on short single-shot clips.",
  "Creating a 3-minute AI MV often requires manually producing many clips and repeatedly tuning prompts/parameters, which costs time, credits, and continuity quality.",
  "Audio-video synchronization is still labor-intensive: rhythm and emotion alignment between music and visuals usually needs significant manual adjustment.",
];

const coreStrengths = [
  "Single-Sentence to Full MV Generation",
  "Rhythm and Emotion Alignment",
  "Consistent Narrative and Visual Style",
];

const evidenceItems = [
  {
    title: "GitHub Commit History",
    description:
      "Cropped GitHub contribution evidence showing technical ownership and milestone delivery.",
    image: "/cuti-github-log.png",
    link: "#",
  },
  {
    title: "LangSmith Traces",
    description:
      "Cropped LangSmith evidence showing workflow quality, tracing, and iterative debugging process.",
    image: "/cuti-langsmith.png",
    link: "#",
  },
];

const milestones = [
  {
    period: "2025.10 - 2025.12",
    version: "V0.8",
    stage: "Core prototype phase",
    outcomes: [
      "Delivered automatic long-video generation (1-5 min).",
      "Implemented character control and song-controlled MV generation.",
      "Integrated lyric recognition as a core input signal.",
    ],
  },
  {
    period: "2026.1.29",
    version: "-",
    stage: "Team and friends internal beta",
    outcomes: [
      "Validated core functionality and generation workflow with small-scale testers.",
    ],
  },
  {
    period: "2026.2.12 - 2026.4.12",
    version: "-",
    stage: "Invite-only user beta",
    outcomes: [
      "Launched invite-only beta on 2026.2.12.",
      "Completed full-track song-to-video testing and quality iteration.",
    ],
  },
  {
    period: "2026.3.16 - 2026.4.20",
    version: "V0.9",
    stage: "Launch and monetization phase",
    outcomes: [
      "Launched the product on 2026.4.20 and started paid usage.",
      "Built batch testing system, model integration/evaluation, and auto video templates.",
      "Advanced MV quality: source separation, style/emotion matching, BPM rhythm alignment, and genre adaptation.",
      "Shipped multi-turn video agent, canvas workflow, chatbot tools/persona, invitation/payment, user account, profile, and Explore publishing.",
      "Drove parallel initiatives: role demo tests, cover-song flow, template expansion, cross-product benchmarking, and AnimationBench collaboration.",
    ],
  },
];

const CutiProject = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="px-6 py-10 border-b border-border bg-card/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <Link to="/" className="text-sm text-muted-foreground hover:text-gold transition-colors">
            Back to Home
          </Link>
          <div className="text-right">
            <a
              href="https://cuti.land/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold text-sm bg-gold text-navy-deep hover:bg-gold-glow transition-all duration-300 hover:-translate-y-0.5"
            >
              Try Cuti Product
            </a>
            <p className="text-xs text-muted-foreground mt-2">
              Click this button to try the product (https://cuti.land/)
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gold/10 text-gold border border-gold/30 mb-6">
              <img src="/cuti-logo.png" alt="Cuti logo" className="h-7 w-7 rounded-lg object-cover" />
              <span className="text-sm font-semibold">Cuti - Music Video Agent</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              My Work on Cuti: Building a minute-level AI music video agent
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Cuti, I focused on solving real production bottlenecks in AI video creation:
              long-form generation, audio-visual alignment, and cross-scene consistency.
              I took responsibility for most technical implementation and helped turn the
              system into a usable workflow for advertisement and music creation scenarios.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Full-Stack Engineer", "Owned Most Technical Work", "Minute-Level MV", "Production Workflow"].map((tag) => (
                <span key={tag} className="tech-tag text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {previewImages.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Cuti product preview ${index + 1}`}
                className={`w-full rounded-2xl object-cover border border-border shadow-lg ${
                  index === 0 ? "col-span-2 h-56 md:h-72" : "h-36 md:h-44"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">
            Industry Pain Points I Tackled
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {painPoints.map((item, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border card-hover">
                <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-3xl font-bold text-foreground mb-8">
            Core Capabilities of <span className="text-gold">Cuti</span>
          </h2>
          <div className="flex flex-wrap gap-3 mb-12">
            {coreStrengths.map((strength) => (
              <span
                key={strength}
                className="px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium"
              >
                {strength}
              </span>
            ))}
          </div>

          <h2 className="font-display text-3xl font-bold text-foreground mb-8">
            My Technical <span className="text-gold">Contributions</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {workHighlights.map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 border border-border card-hover">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-3xl font-bold text-foreground mt-16 mb-8">
            Milestone <span className="text-gold">Outcomes</span>
          </h2>
          <div className="space-y-5">
            {milestones.map((milestone) => (
              <div key={`${milestone.period}-${milestone.version}`} className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-gold/15 text-gold font-medium">
                    {milestone.period}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
                    {milestone.version}
                  </span>
                  <span className="text-sm text-foreground font-semibold">{milestone.stage}</span>
                </div>
                <ul className="space-y-2">
                  {milestone.outcomes.map((outcome) => (
                    <li key={outcome} className="text-sm text-muted-foreground leading-relaxed">
                      - {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="font-display text-3xl font-bold text-foreground mt-16 mb-8">
            GitHub & LangSmith <span className="text-gold">Evidence</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {evidenceItems.map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 border border-border card-hover">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-xl border border-border mb-4"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-48 rounded-xl border border-dashed border-border/80 bg-muted/20 flex items-center justify-center text-xs text-muted-foreground mb-4 text-center px-4">
                    Screenshot placeholder: add cropped evidence image in this slot
                  </div>
                )}
                <a href={item.link} className="text-sm text-gold underline underline-offset-4">
                  Evidence link
                </a>
              </div>
            ))}
          </div>

          <h2 className="font-display text-3xl font-bold text-foreground mt-16 mb-6">
            Reflection
          </h2>
          <div className="bg-card rounded-2xl p-6 border border-border">
            <p className="text-sm text-muted-foreground leading-relaxed">
              This project taught me how to turn strong model capabilities into a usable end-to-end product.
              The biggest lesson was that generation quality alone is not enough: stability, observability,
              interaction design, and iteration speed determine real user value. I also learned to design
              evaluation and debugging loops earlier, especially for long-form video consistency and audio-visual
              alignment, because late-stage fixes are expensive. The hardest challenge was balancing launch speed
              with quality during rapid feature expansion. Through this process, I improved my ability to make
              practical engineering trade-offs and deliver AI systems under product deadlines.
            </p>
          </div>

          <div className="mt-8 bg-gold/10 border border-gold/30 rounded-2xl p-5">
            <p className="text-sm text-foreground">
              If you are interested in the product or have any questions, contact my email to request an invite code:
              <a href="mailto:ksunai@connect.ust.hk" className="text-gold underline underline-offset-4 ml-1">
                ksunai@connect.ust.hk
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CutiProject;

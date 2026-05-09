import { Link } from "react-router-dom";

type BrandLogo = "huawei" | "bytedance";

type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  to?: string;
  brandLogo?: BrandLogo;
};

const HuaweiMark = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-auto shrink-0"
    aria-hidden
  >
    <path
      fill="currentColor"
      className="text-[#CF0A2C]"
      d="M3.67 6.14S1.82 7.91 1.72 9.78v.35c.08 1.51 1.22 2.4 1.22 2.4 1.83 1.79 6.26 4.04 7.3 4.55 0 0 .06.03.1-.01l.02-.04v-.04C7.52 10.8 3.67 6.14 3.67 6.14zM9.65 18.6c-.02-.08-.1-.08-.1-.08l-7.38.26c.8 1.43 2.15 2.53 3.56 2.2.96-.25 3.16-1.78 3.88-2.3.06-.05.04-.09.04-.09zm.08-.78C6.49 15.63.21 12.28.21 12.28c-.15.46-.2.9-.21 1.3v.07c0 1.07.4 1.82.4 1.82.8 1.69 2.34 2.2 2.34 2.2.7.3 1.4.31 1.4.31.12.02 4.4 0 5.54 0 .05 0 .08-.05.08-.05v-.06c0-.03-.03-.05-.03-.05zM9.06 3.19a3.42 3.42 0 00-2.57 3.15v.41c.03.6.16 1.05.16 1.05.66 2.9 3.86 7.65 4.55 8.65.05.05.1.03.1.03a.1.1 0 00.06-.1c1.06-10.6-1.11-13.42-1.11-13.42-.32.02-1.19.23-1.19.23zm8.299 2.27s-.49-1.8-2.44-2.28c0 0-.57-.14-1.17-.22 0 0-2.18 2.81-1.12 13.43.01.07.06.08.06.08.07.03.1-.03.1-.03.72-1.03 3.9-5.76 4.55-8.64 0 0 .36-1.4.02-2.34zm-2.92 13.07s-.07 0-.09.05c0 0-.01.07.03.1.7.51 2.85 2 3.88 2.3 0 0 .16.05.43.06h.14c.69-.02 1.9-.37 3-2.26l-7.4-.25zm7.83-8.41c.14-2.06-1.94-3.97-1.94-3.98 0 0-3.85 4.66-6.67 10.8 0 0-.03.08.02.13l.04.01h.06c1.06-.53 5.46-2.77 7.28-4.54 0 0 1.15-.93 1.21-2.42zm1.52 2.14s-6.28 3.37-9.52 5.55c0 0-.05.04-.03.11 0 0 .03.06.07.06 1.16 0 5.56 0 5.67-.02 0 0 .57-.02 1.27-.29 0 0 1.56-.5 2.37-2.27 0 0 .73-1.45.17-3.14z"
    />
  </svg>
);

const ByteDanceMark = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="h-9 w-auto shrink-0 text-foreground"
    aria-hidden
  >
    <path
      fill="currentColor"
      d="M19.8772 1.4685L24 2.5326v18.9426l-4.1228 1.0563V1.4685zm-13.3481 9.428l4.115 1.0641v8.9786l-4.115 1.0642v-11.107zM0 2.572l4.115 1.0642v16.7354L0 21.428V2.572zm17.4553 5.6205v11.107l-4.1228-1.0642V9.2568l4.1228-1.0642z"
    />
  </svg>
);

function BrandLogoMark({ brand }: { brand: BrandLogo }) {
  if (brand === "huawei") return <HuaweiMark />;
  return <ByteDanceMark />;
}

const projects: ProjectItem[] = [
  {
    title: "Cuti",
    description:
      "Designed and implemented an immersive AI video review-and-edit interface with synchronized section navigation and full-screen visualization. Built a modular creation suite that integrates multi-stage AI generation pipelines for story, character, and scene design.",
    tags: ["Full-Stack Engineer", "Hong Kong, China", "11.2025 - Present"],
    to: "/projects/cuti",
  },
  {
    title: "Huawei",
    description:
      "Developed a voice-based embodied AI meeting assistant for conference scenarios with reinforcement learning and multimodal interaction. Built a speech restoration pipeline using MCCRN and diffusion, achieving PESQ +0.35 over baseline.",
    tags: ["Algorithm Development Intern", "Guangdong, China", "10.2024 - 04.2025"],
    href: "#",
    brandLogo: "huawei",
  },
  {
    title: "ByteDance",
    description:
      "Led development and optimization of automation testing tools, reaching up to 98% automation coverage for core processes and blocking about 20% of potential bugs to reduce online risks.",
    tags: ["Test Development Intern", "Guangdong, China", "08.2023 - 04.2024"],
    href: "#",
    brandLogo: "bytedance",
  },
];

const cardClassName =
  "animate-on-scroll group block bg-card rounded-2xl overflow-hidden border border-border card-hover cursor-pointer h-full";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Industry <span className="text-gold">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => {
            const body = (
              <div className="p-6 h-full flex flex-col">
                {project.brandLogo ? (
                  <div className="mb-4 flex h-12 items-center rounded-lg border border-border/60 bg-muted/40 px-3">
                    <BrandLogoMark brand={project.brandLogo} />
                  </div>
                ) : null}
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-gold transition-colors duration-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
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
            );

            if (project.to) {
              return (
                <Link
                  key={project.title}
                  to={project.to}
                  className={cardClassName}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {body}
                </Link>
              );
            }

            return (
              <a
                key={project.title}
                href={project.href}
                className={cardClassName}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {body}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

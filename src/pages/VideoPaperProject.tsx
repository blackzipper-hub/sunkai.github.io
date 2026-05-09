import { Link } from "react-router-dom";

const VIDEO_DRIVE_ID = "14uFWg8CrFWJZaooW_bfiDHE5zPTTIHq1";
const VIDEO_DRIVE_VIEW_URL = `https://drive.google.com/file/d/${VIDEO_DRIVE_ID}/view?usp=sharing`;
const VIDEO_DRIVE_EMBED_URL = `https://drive.google.com/file/d/${VIDEO_DRIVE_ID}/preview`;

const introductionParagraphs = [
  'This 3-minute video critiques Drama.Land — an AI-powered music video generator that turns a single text prompt into a cinematic MV. Following the course theme "The Good, the Bad, the _____," I evaluate the product through an HCI lens.',
  "The Good identifies two strengths: (1) Drama.Land radically lowers the expertise barrier, compressing what once required a director, crew, and a five-thousand-dollar budget into one person and one sentence — a textbook case of democratization in HCI; (2) it satisfies Nielsen's second heuristic by speaking the musician's mental model (song, story, vibe) rather than imposing video-editing jargon (keyframes, layers, Bezier curves).",
  'The Bad identifies two violations: (1) the system fails Norman\'s Gulf of Evaluation — identical prompts yield wildly different outputs, and users cannot debug why, only "re-roll the dice"; (2) it violates Nielsen\'s third heuristic — there is no undo, no refund (per Drama.Land\'s own Terms of Use), and no emergency exit.',
  'The Co-Authored is my central insight. Drama.Land has not removed authorship — it has distributed it across an invisible network of training-data contributors, model engineers, ToS clauses, and platform algorithms. This is a HCI relationship the field is still learning to name. The video closes by inviting viewers to reconsider what "I made this" means in an age of generative AI.',
];

const essayParagraphs = [
  `When I first encountered the brief — "The Good, the Bad, the _____" — I thought I understood it immediately. I would pick a flashy AI product, list what works, list what doesn't, and add a clever twist at the end. That instinct, I now realize, was exactly the kind of shallow framing this course was designed to dismantle.`,
  "I chose Drama.Land — an AI music video generator that turns a single sentence into a cinematic MV — because it sat at a productive contradiction. On one hand, it is genuinely impressive: it lowers what used to be a five-thousand-dollar production into a one-person, one-sentence task. On the other hand, something about it bothered me, and I could not initially say what. The course gave me the vocabulary to articulate that discomfort.",
  "In The Good, I argued that Drama.Land succeeds along two HCI dimensions. First, it is a textbook case of lowering the expertise barrier — a principle running from Engelbart and Papert through the entire democratization tradition in HCI. Second, it satisfies Nielsen's second heuristic by speaking the musician's mental model: song, story, vibe — not keyframes, layers, or Bezier curves. The interface translates rather than imposes.",
  "In The Bad, I argued the same product violates two equally foundational principles. The Gulf of Evaluation — Norman's classic gap between user intent and system feedback — yawns open every time identical prompts produce wildly different videos. The user cannot debug, only re-roll. Then there is Nielsen's third heuristic: User Control and Freedom. Drama.Land's own Terms of Use state that points consumed will not be refunded, regardless of output quality. There is no undo, no timeline, no emergency exit.",
  `But what I am most proud of is The Co-Authored — my central insight. Drama.Land has not eliminated authorship. It has distributed it across an invisible network of training-data contributors, model engineers, ToS clauses, platform algorithms, and the user. This is not a bug to be fixed; it is a new HCI relationship the field is still learning to name. I borrowed language from Lucy Suchman's "human-machine reconfigurations" and Kate Crawford's analysis of generative AI's hidden labor, but the framing — that traditional HCI's two-party model (user ↔ system) is becoming insufficient — emerged from the critique itself.`,
  `Before this course, I would have stopped at "AI is cool but problematic." I would have mistaken surface-level critique for depth. What changed was not my opinion of Drama.Land, but my relationship to critique itself. The course taught me that HCI is not just a checklist of usability heuristics; it is a way of asking what kind of relationship a tool is constructing between humans and the world. Norman taught me to look for gulfs. Nielsen taught me to look for missing exits. Suchman taught me to look at who else is in the room. Each was a lens, and the act of stacking them — rather than choosing between them — produced a richer reading than any single one alone.`,
  `The biggest shift, then, is this: I no longer believe a "good HCI critique" means catching products in violations. The most interesting cases are products that simultaneously honor and violate HCI principles — and that contradiction is what reveals something the field has not yet conceptualized. Drama.Land was not interesting because it was good or bad. It was interesting because it forced classical HCI into a corner where the old vocabulary stopped fully describing what was happening.`,
  `The video closes with a deliberately open question: "When he says 'I made this' — who is the 'I'?" I chose not to answer it. Not because I do not have a position, but because the generative AI moment is too early for any of us to have one firmly. What I can say is that the course changed how I will sit with that question. Before this semester, I would have treated it as a rhetorical flourish. Now I treat it as an open research problem — one I expect HCI to spend the next decade trying to answer, and one I hope to keep thinking about long after this course ends.`,
];

const acknowledgements = [
  "Drama.Land website screenshots and demo footage are cited under fair use for academic critique. Source: drama.land",
  "Some videos generated by Wan, Seedance, Kiling.",
  "Script drafting assisted by Claude (Anthropic)",
  "All HCI analysis, narrative structure, editing, and creative direction are my own work.",
];

const VideoPaperProject = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="px-6 py-10 border-b border-border bg-card/50">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <Link to="/" className="text-sm text-muted-foreground hover:text-gold transition-colors">
            Back to Home
          </Link>
          <a
            href={VIDEO_DRIVE_VIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold text-sm bg-gold text-navy-deep hover:bg-gold-glow transition-all duration-300 hover:-translate-y-0.5"
          >
            Open video in Google Drive
          </a>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-3">HCI · Video Paper</p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 leading-tight">
            The Good, the Bad, the Co-Authored: An HCI Critique of Drama.Land&apos;s AI Music Video Generator
          </h1>
          <p className="text-sm text-muted-foreground mb-10">Course video critique (≈3 minutes)</p>

          <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-lg mb-12">
            <div className="relative w-full aspect-video bg-muted">
              <iframe
                title="Video paper: HCI critique of Drama.Land"
                src={VIDEO_DRIVE_EMBED_URL}
                className="absolute inset-0 h-full w-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card/80 p-6 md:p-8 mb-12 space-y-3 text-sm">
            <dl className="grid gap-3 sm:grid-cols-[8rem_1fr] sm:gap-x-6">
              <dt className="text-muted-foreground font-medium">Author</dt>
              <dd className="text-foreground">SUN Kai</dd>
              <dt className="text-muted-foreground font-medium">Affiliation</dt>
              <dd className="text-foreground">The Hong Kong University of Science and Technology, CSE, MSC AI</dd>
              <dt className="text-muted-foreground font-medium">Contact</dt>
              <dd>
                <a href="mailto:ksunai@connect.ust.hk" className="text-gold underline underline-offset-4">
                  ksunai@connect.ust.hk
                </a>
              </dd>
              <dt className="text-muted-foreground font-medium">Video</dt>
              <dd>
                <a
                  href={VIDEO_DRIVE_VIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold underline underline-offset-4 break-all"
                >
                  {VIDEO_DRIVE_VIEW_URL}
                </a>
              </dd>
            </dl>
          </div>

          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Introduction</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-14">
            {introductionParagraphs.map((p, i) => (
              <p key={`intro-${i}`}>{p}</p>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold text-foreground mb-2">
            From &quot;I Made This&quot; to &quot;Who Made This?&quot;
          </h2>
          <p className="text-sm text-muted-foreground mb-6">Reflections on my HCI video critique of Drama.Land (794 words)</p>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-14">
            {essayParagraphs.map((p, i) => (
              <p key={`essay-${i}`}>{p}</p>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Acknowledgements</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
            {acknowledgements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default VideoPaperProject;

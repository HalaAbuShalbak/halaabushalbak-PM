const LINKEDIN_URL = "https://www.linkedin.com/in/halaabushalbak/";

export default function Hero() {
  return (
    <section
      id="intro"
      className="relative min-h-screen bg-mesh-gradient pt-28 pb-16 sm:pt-32 sm:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-purple-accent/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -right-24 bottom-32 h-48 w-48 rounded-full bg-cyan-accent/10 blur-3xl"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="animate-fade-in font-mono text-xs text-cyan-accent sm:text-sm">
          const hireMe = currentRole =&gt; &quot;Product Manager&quot;;
        </p>

        <h1
          id="hero-heading"
          className="animate-fade-in mt-6 text-left text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="hero-name-glow">Hala</span> Abu Shalbak
        </h1>

        <h2
          className="animate-fade-in mt-3 text-left text-xl font-semibold text-cyan-500 sm:text-2xl"
          style={{ animationDelay: "0.15s" }}
        >
          Technical Product Leader
        </h2>

        <p
          className="animate-fade-in mt-6 max-w-2xl text-left text-base leading-relaxed text-gray-200 sm:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          I bridge the gap between complex engineering, clinical logic, and
          business strategy. Combining a background in healthcare with extensive
          experience managing technical product operations, I steer roadmap
          planning, workflow automation, and cross-functional teams to launch
          scalable products.
        </p>

        <div
          className="animate-fade-in mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
          style={{ animationDelay: "0.25s" }}
        >
          <a href="#tech-stack" className="btn-primary text-center">
            View My Skill-kit
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-center"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

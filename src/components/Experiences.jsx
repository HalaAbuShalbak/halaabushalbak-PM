const experiences = [
  {
    title: "Product & Operations Execution",
    content:
      "Led end-to-end delivery of advanced technical courses and LMS platforms. Implemented Agile/Scrum workflows, organized robust backlogs, and authored comprehensive SOPs to scale training operations with zero financial debt.",
  },
  {
    title: "Technical Summary",
    content:
      "Fluent in full-stack architecture (MERN/PERN, SQL, API routing) and modern AI-assisted workflows (Vibe Coding, Prompting). Mentored, unblocked, and de-risked the execution of over 50 team and solo web applications.",
  },
  {
    title: "The Healthcare Edge",
    content:
      "Backed by a clinical background in Prosthetics and Orthotics. I leverage user empathy, diagnostic problem-solving, and process rigor to map intricate workflows and manage complex user environments.",
  },
];

export default function Experiences() {
  return (
    <section
      id="standouts"
      className="border-t border-white/[0.06] py-20 sm:py-28"
      aria-labelledby="standouts-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs text-cyan-accent">// experiences</p>
            <h2
              id="standouts-heading"
              className="mt-2 text-2xl font-bold text-white sm:text-3xl"
            >
              Standouts
            </h2>
          </div>
          <p className="max-w-md text-sm text-gray-500">
            Core strengths that define how I lead product and operations.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {experiences.map((item, index) => (
            <article
              key={item.title}
              className="glass-card group flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 h-px w-12 bg-gradient-to-r from-purple-accent to-cyan-accent opacity-60 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-200">
                {item.content}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const skillGroups = [
  {
    header: "Product Management & Operations",
    tags: [
      "Agile/Scrum",
      "Roadmap Planning",
      "Sprint Coordination",
      "Backlog Organization",
      "QA Testing",
      "Requirements Gathering",
      "SOP & Playbook Writing",
    ],
  },
  {
    header: "Modern Engineering (Vibe / AI)",
    tags: [
      "Vibe Engineering",
      "Vibe Coding",
      "Prompting",
      "Workflow Automation",
    ],
  },
  {
    header: "Full-Stack Technologies",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "React.js",
      "Redux",
      "SQL",
      "PostgreSQL",
      "Prisma",
      "MongoDB",
      "RESTful APIs",
      "Tailwind CSS",
      "CSS libraries",
    ],
  },
  {
    header: "Tooling & Methodologies",
    tags: [
      "Git/GitHub",
      "Postman",
      "Thunder Client",
      "Neon SQL",
      "Trello",
      "Wireframing",
      "DB Diagram",
      "Notion",
    ],
  },
];

export default function TechSkills() {
  return (
    <section
      id="tech-stack"
      className="border-t border-white/[0.06] bg-white/[0.01] py-20 sm:py-28"
      aria-labelledby="tech-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="font-mono text-xs text-cyan-accent">// tech_stack</p>
          <h2
            id="tech-heading"
            className="mt-2 text-2xl font-bold text-white sm:text-3xl"
          >
            Tech Skills
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          {skillGroups.map((group) => (
            <article
              key={group.header}
              className="skill-card"
            >
              <h3 className="skill-card-header">
                <span className="skill-card-dot" aria-hidden="true" />
                {group.header}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2.5 sm:gap-3">
                  {group.tags.map((tag) => (
                    <span key={tag} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

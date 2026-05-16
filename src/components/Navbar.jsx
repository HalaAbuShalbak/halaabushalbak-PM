const LINKEDIN_URL = "https://www.linkedin.com/in/halaabushalbak/";

const navItems = [
  { label: "Intro", href: "#intro" },
  { label: "Standouts", href: "#standouts" },
  { label: "Tech Stack", href: "#tech-stack" },
];

export default function Navbar() {
  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#intro"
          className="pr-3 text-left font-sans text-xs font-semibold leading-snug tracking-tight text-gray-200 sm:pr-0 sm:text-sm"
        >
          Fluent in Business, Developer{" "}
          <span className="text-cyan-accent">& People.</span>
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  [ {item.label} ]
                </a>
              </li>
            ))}
          </ul>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nav hidden sm:inline-flex"
          >
            [ Connect LinkedIn ]
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nav sm:hidden"
            aria-label="Connect on LinkedIn"
          >
            [ LinkedIn ]
          </a>
        </div>
      </nav>

      <ul className="flex items-center justify-center gap-4 border-t border-white/[0.04] px-4 py-2 md:hidden">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="nav-link text-[10px]">
              [ {item.label} ]
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}

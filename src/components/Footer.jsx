const LINKEDIN_URL = "https://www.linkedin.com/in/halaabushalbak/";
const CV_FILE = "Hala-Abu-Shalbak-PM.pdf";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:halaj.abushalbak@gmail.com",
    display: "halaj.abushalbak@gmail.com",
  },
  {
    label: "Phone",
    href: "tel:+962798967357",
    display: "+962 798 967 357",
  },
  {
    label: "LinkedIn",
    href: LINKEDIN_URL,
    display: "in/halaabushalbak",
    external: true,
  },
  {
    label: "CV",
    href: CV_FILE,
    display: "Download CV",
    isDownload: true,
  },
];

export default function Footer() {
  return (
    <footer
      id="connect"
      className="border-t border-white/[0.06] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-lg leading-relaxed text-gray-200 sm:text-xl">
          Looking for a Product Manager who can talk to your engineers and get
          your product to{" "}
          <span className="bg-gradient-to-r from-purple-accent to-cyan-accent bg-clip-text text-transparent">
            grow &amp; glow
          </span>
          ? Let&apos;s talk.
        </p>

        <ul className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="group flex flex-col items-center gap-1 transition-colors duration-200"
                // Fix: Passing undefined completely removes the attribute for non-download links
                download={
                  link.isDownload ? "Hala-Abu-Shalbak-PM.pdf" : undefined
                }
                // If it's external OR a download, open in a new tab
                target={link.external || link.isDownload ? "_blank" : undefined}
                rel={
                  link.external || link.isDownload
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-300">
                  {link.label}
                </span>
                <span className="text-sm text-cyan-accent transition-colors group-hover:text-white">
                  {link.display}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-16 font-mono text-xs text-gray-600">
          © 2026 Hala Abu Shalbak.
        </p>
      </div>
    </footer>
  );
}

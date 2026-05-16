const metrics = [
  {
    value: "50+",
    label: "Technical Web Projects Mentored",
  },
  {
    value: "20+",
    label: "Operations Automated and Optimized",
  },
  {
    value: "30+",
    label: "Technical Instructors Trained & Workshops Delivered Successfully",
  },
];

export default function Metrics() {
  return (
    <section
      className="relative border-y border-cyan-accent/20 bg-white/[0.02] py-16 sm:py-20"
      aria-label="Impact metrics"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-accent/5 via-transparent to-cyan-accent/5" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="font-mono text-5xl font-medium text-cyan-accent sm:text-6xl lg:text-7xl">
                {metric.value}
              </p>
              <p className="mx-auto mt-3 max-w-[220px] font-mono text-xs leading-relaxed text-gray-400 sm:text-sm">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClientLogos() {
  const clients = [
    "Kumar Enterprises",
    "Sharma Trading Co.",
    "Patrol Logistics",
    "Fashion Hub",
    "Singh Enterprises",
    "Gupta Retail",
  ];

  return (
    <section className="py-16 lg:py-20 border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <p className="text-center text-xs font-medium tracking-[0.2em] uppercase text-secondary">
          Trusted by businesses across India
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {clients.map((client) => (
            <div
              key={client}
              className="px-6 py-3 border border-border bg-surface-alt text-sm font-medium text-secondary/60 hover:text-secondary hover:border-accent/30 transition-colors"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

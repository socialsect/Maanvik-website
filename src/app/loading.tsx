export default function Loading() {
  return (
    <section className="pt-32 lg:pt-40 pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 animate-pulse">
          <div className="space-y-3 max-w-2xl">
            <div className="h-4 w-32 bg-border rounded" />
            <div className="h-10 w-96 bg-border rounded max-w-full" />
            <div className="h-5 w-64 bg-border rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="border border-border bg-surface p-6 space-y-4">
                <div className="aspect-[4/3] bg-surface-alt rounded" />
                <div className="h-4 w-24 bg-border rounded" />
                <div className="h-5 w-40 bg-border rounded" />
                <div className="h-3 w-full bg-border rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

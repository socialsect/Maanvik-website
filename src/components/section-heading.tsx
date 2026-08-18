interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`space-y-3 max-w-2xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
        {eyebrow}
      </span>
      <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary leading-tight">
        {heading}
      </h2>
      {description && (
        <p className="text-secondary leading-relaxed">{description}</p>
      )}
    </div>
  );
}

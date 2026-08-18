interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  const words = title.split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return (
    <div className={`mb-16 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
        {firstPart} <span className="text-accent">{lastWord}</span>
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-[#a1a1aa] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

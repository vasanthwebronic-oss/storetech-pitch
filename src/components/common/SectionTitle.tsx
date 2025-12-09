type secTitle = {
  children: React.ReactNode;
  description: string;
  type?: "Hero" | "Minimal";
};

export default function SectionTitle({
  children,
  description,
  type,
}: secTitle) {
  let divcdivClassName = "text-center mb-16 animate-on-scroll";
  let h1ClassName = "font-display text-4xl lg:text-5xl font-bold mb-6";
  let pClassName = "text-xl text-gray-400 max-w-3xl mx-auto";

  if (type === "Hero")
    h1ClassName = "font-display text-5xl lg:text-6xl font-bold mb-6";

  if (type === "Minimal") {
    divcdivClassName = "animate-on-scroll";
    h1ClassName = "font-display text-4xl font-bold mb-6";
  }

  return (
    <div className={divcdivClassName}>
      <h1 className={h1ClassName}>{children}</h1>
      <p className={pClassName}>{description}</p>
    </div>
  );
}

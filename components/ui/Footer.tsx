export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-primary py-8">
      <div className="container-grid flex flex-col gap-4 text-sm text-text-secondary md:flex-row md:items-center md:justify-between">
        <a href="#top" className="font-serif text-lg text-text-primary">
          A2R2 Labs
        </a>
        <p>
          Copyright {year} A2R2 Labs. Built in {year}.
        </p>
      </div>
    </footer>
  );
}

type Item = { label: string; href: string }

export function DocLinkList({ sections }: { sections: { title: string; items: Item[] }[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {sections.map((section) => (
        <div key={section.title} className="panel rounded-[1.75rem] p-6">
          <h3 className="mb-4 text-lg font-semibold tracking-[-0.03em] text-[var(--foreground)]">{section.title}</h3>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item.href}>
                <a
                  className="text-[var(--foreground)] underline underline-offset-4 transition-colors hover:text-[var(--accent)]"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

type Item = { label: string; href: string }

export function DocLinkList({ sections }: { sections: { title: string; items: Item[] }[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {sections.map((section) => (
        <div key={section.title} className="rounded-2xl border border-neutral-200 p-6">
          <h3 className="text-neutral-900 font-semibold mb-4">{section.title}</h3>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item.href}>
                <a
                  className="text-primary hover:text-primary-600 underline underline-offset-4"
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

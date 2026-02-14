const categories = [
  {
    label: "Core Stack (Current)",
    tools: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Node.js",
    ],
  },
  {
    label: "Backend & Systems",
    tools: [
      "Python",
      "Django",
      "Flask",
      "C#/.NET",
      "C++",
      "C",
      "Lua",
      "Java",
    ],
  },
  {
    label: "Databases",
    tools: [
      "PostgreSQL",
      "Supabase",
      "SQLite",
      "SQL",
    ],
  },
  {
    label: "Cloud & Infrastructure",
    tools: [
      "AWS (EC2, S3)",
      "Linux",
      "Vercel",
      "Docker",
      "Git",
    ],
  },
  {
    label: "Engineering Concepts",
    tools: [
      "REST APIs",
      "MVC Architecture",
      "OOP",
      "API Integration",
    ],
  },
];



export function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
        Tech Stack
      </h2>
      <p className="mb-12 max-w-xl text-lg text-muted-foreground">
        Tools I use to ship production-ready software, fast.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <div key={cat.label}>
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

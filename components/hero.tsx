"use client"

import { ArrowDown, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-3xl">
        <div className="mb-6 inline-flex items-center rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary" />
          Available for new opportunities
        </div>

        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Full-Stack Engineer{" "}
          <span className="text-primary">/</span>{" "}
          Builder
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          I build modern web apps and tools with{" "}
          <strong>Next.js, TypeScript, Tailwind CSS, Node.js</strong>, 
          and deploy them on <strong>Vercel</strong>. 
          I also have a strong foundation in <strong>Python, Django, C++, and C#</strong>, 
          and real-world experience with <strong>Linux, AWS, and databases</strong>. 
          I focus on shipping fast, learning continuously, and turning ideas into working products.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            className="group"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects
            <ArrowDown className="ml-1 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://github.com/RipClaw15"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-1 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

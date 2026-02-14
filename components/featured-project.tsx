"use client"

import { ExternalLink, Github, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export interface FeaturedProjectData {
  name: string
  problem: string
  solution: string
  outcome: string
  stack: string[]
  demoUrl?: string
  githubUrl?: string
}

export function FeaturedProject({
  project,
}: {
  project: FeaturedProjectData
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-8 shadow-[0_0_60px_-15px_hsl(var(--primary)/0.1)] md:p-10">
      {/* Corner accent */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-3">
          <Star className="h-5 w-5 text-primary" />
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Featured Project
          </span>
        </div>

        <h3 className="mb-6 text-2xl font-bold text-card-foreground md:text-3xl">
          {project.name}
        </h3>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Problem
            </h4>
            <p className="text-sm leading-relaxed text-card-foreground/80">
              {project.problem}
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Solution
            </h4>
            <p className="text-sm leading-relaxed text-card-foreground/80">
              {project.solution}
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Outcome
            </h4>
            <p className="text-sm leading-relaxed text-card-foreground/80">
              {project.outcome}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-mono text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          {project.demoUrl && (
            <Button asChild>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-1.5 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-1.5 h-4 w-4" />
                Source Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

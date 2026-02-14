"use client"

import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export type ProjectStatus = "Shipped" | "MVP" | "In Progress"

export interface Project {
  name: string
  problem: string
  stack: string[]
  status: ProjectStatus
  demoUrl?: string
  githubUrl?: string
}

const statusColors: Record<ProjectStatus, string> = {
  Shipped: "bg-primary/15 text-primary border-primary/30",
  MVP: "bg-accent text-accent-foreground border-accent-foreground/20",
  "In Progress": "bg-secondary text-muted-foreground border-border",
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.15)]">
      <div className="mb-4 flex items-start justify-between">
        <h3 className="text-lg font-semibold text-card-foreground">
          {project.name}
        </h3>
        <Badge
          variant="outline"
          className={`shrink-0 text-[11px] ${statusColors[project.status]}`}
        >
          {project.status}
        </Badge>
      </div>

      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.problem}
      </p>

      <div className="mb-5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-secondary px-2 py-0.5 font-mono text-xs text-secondary-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        {project.demoUrl && (
          <Button size="sm" variant="default" asChild className="flex-1">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
              Live Demo
            </a>
          </Button>
        )}
        {project.githubUrl && (
          <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-1.5 h-3.5 w-3.5" />
              GitHub
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}

import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  {
    label: "Email",
    href: "csongorosz@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/RipClaw15",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/csongorosz/",
    icon: Linkedin,
  },
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
        Contact
      </h2>
      <p className="mb-8 text-balance text-2xl font-bold text-foreground md:text-3xl">
        {"Let's build something together."}
      </p>
      <p className="mx-auto mb-10 max-w-md text-muted-foreground">
        Have an idea, a project, or just want to connect? I&apos;m always open
        to conversation.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {links.map((link) => (
          <Button key={link.label} variant="outline" size="lg" asChild>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <link.icon className="mr-2 h-4 w-4" />
              {link.label}
            </a>
          </Button>
        ))}
      </div>
    </section>
  )
}

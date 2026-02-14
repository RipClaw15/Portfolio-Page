import { ProjectCard, type Project } from "@/components/project-card"
import { FeaturedProject, type FeaturedProjectData } from "@/components/featured-project"

const featuredProject: FeaturedProjectData = {
  name: "AI Code Reviewer",
  problem:
    "Code reviews are slow and inconsistent. Junior devs wait hours for feedback while senior engineers are bottlenecked.",
  solution:
    "Built an AI-powered code review tool that analyses PRs in real-time, provides contextual suggestions, and learns from team patterns.",
  outcome:
    "Reduced average review time by 60%. Used by 3 open-source teams during beta. Positive feedback on accuracy and speed.",
  stack: ["TypeScript", "Next.js", "OpenAI API", "PostgreSQL", "Vercel"],
  demoUrl: "#",
  githubUrl: "#",
}

const projects: Project[] = [
  {
    name: "Social Network",
    problem:
      "Built a full-stack social media platform supporting user authentication, posts, follows, and personalized feeds.",
    stack: ["Python", "Django", "JavaScript", "HTML/CSS", "SQLite"],
    status: "Shipped",
    githubUrl: "https://github.com/RipClaw15/Social-Network",
  },
  {
    name: "Stock Trading Web App",
    problem:
      "Developed a finance web application that allows users to simulate stock trading with real-time price data and portfolio tracking.",
    stack: ["Python", "Flask", "SQLite", "HTML/CSS", "JavaScript"],
    status: "Shipped",
    githubUrl: "https://github.com/RipClaw15/Stock-Trading-Finance-Webapp",
  },
  {
    name: "Auctions",
    problem:
      "Created an e-commerce style auction platform with listing creation, bidding logic, comments, and watchlists.",
    stack: ["Python", "Django", "SQLite", "HTML/CSS", "JavaScript"],
    status: "Shipped",
    githubUrl: "https://github.com/RipClaw15/Auctions",
  },
  {
    name: "Dispatcher",
    problem:
      "Shipment and logistics management system for registering, tracking, and organizing transport operations.",
    stack: ["Python", "Django", "PostgreSQL", "HTML/CSS"],
    status: "In Progress",
    githubUrl: "https://github.com/RipClaw15/dispatcher",
  },
  {
    name: "Bomberman (C++)",
    problem:
      "Developed a 2D Bomberman-style game implementing game loops, collision detection, grid logic, and object rendering.",
    stack: ["C++", "Game Logic", "OOP"],
    status: "Shipped",
    githubUrl: "https://github.com/RipClaw15/Bomberman",
  },
  {
    name: "Library Management System",
    problem:
      "Desktop application for managing books, users, and borrowing workflows using object-oriented design principles.",
    stack: ["C#", ".NET", "SQL"],
    status: "Shipped",
    githubUrl: "https://github.com/RipClaw15/Library-Management-System",
  },
  {
    name: "ZenQuotes",
    problem:
      "Java-based application consuming an external API to fetch and display motivational quotes, focusing on API integration and object-oriented design.",
    stack: ["Java", "REST API Integration"],
    status: "Shipped",
    githubUrl: "https://github.com/RipClaw15/ZenQuotes",
  },
  {
    name: "Mail",
    problem:
      "Single-page web email client implementing asynchronous requests, dynamic UI updates, and mailbox state management.",
    stack: ["Python", "Django", "JavaScript", "HTML/CSS"],
    status: "Shipped",
    githubUrl: "https://github.com/RipClaw15/Mail",
  },
  {
    name: "Infrastructure Cost Estimator",
    problem:
      "Built a configurable cost estimation tool for infrastructure projects, implementing pricing rules and calculation logic to model real-world budgeting scenarios.",
    stack: ["Python", "Business Logic Modeling", "CLI App"],
    status: "Shipped",
    githubUrl: "https://github.com/RipClaw15/Infrastructure-Cost-Estimator",
  },
];


export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
        Projects
      </h2>
      <p className="mb-12 max-w-xl text-lg text-muted-foreground">
        Real problems, real solutions. Every project here was built to learn
        something new or scratch a personal itch.
      </p>

      {/* Featured */}
      <div className="mb-12">
        <FeaturedProject project={featuredProject} />
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}

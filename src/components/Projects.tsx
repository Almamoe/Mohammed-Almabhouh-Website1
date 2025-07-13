import { ExternalLink, Github, Code, Zap, Globe, Database } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    icon: Globe,
    github: "#",
    demo: "#",
    status: "DEPLOYED"
  },
  {
    title: "Real-time Chat App",
    description: "WebSocket-based chat application with rooms, file sharing, and message encryption. Built with Socket.io and Redis for scalability.",
    tech: ["Vue.js", "Socket.io", "Redis", "Express"],
    icon: Zap,
    github: "#",
    demo: "#",
    status: "ACTIVE"
  },
  {
    title: "Task Management API",
    description: "RESTful API for project management with JWT authentication, role-based permissions, and comprehensive testing suite.",
    tech: ["Python", "FastAPI", "MongoDB", "Docker"],
    icon: Database,
    github: "#",
    demo: "#",
    status: "OPEN_SOURCE"
  },
  {
    title: "Mobile Weather App",
    description: "Cross-platform weather application with location services, weather forecasts, and offline functionality using React Native.",
    tech: ["React Native", "TypeScript", "SQLite", "APIs"],
    icon: Code,
    github: "#",
    demo: "#",
    status: "IN_PROGRESS"
  }
];

const statusColors = {
  DEPLOYED: "text-accent bg-accent/20",
  ACTIVE: "text-primary bg-primary/20",
  OPEN_SOURCE: "text-retro-orange bg-retro-orange/20",
  IN_PROGRESS: "text-muted-foreground bg-muted"
};

export function Projects() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-mono">
          <span className="terminal-text">&gt;</span> PROJECTS
        </h2>
        
        <p className="text-center text-muted-foreground font-mono mb-12 text-lg">
          Featured work and contributions to the developer community
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="pixel-card p-6 hover:shadow-lg transition-all duration-300 group hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <project.icon className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-bold font-mono">{project.title}</h3>
                </div>
                <span className={`px-2 py-1 text-xs font-mono border border-current ${statusColors[project.status as keyof typeof statusColors]}`}>
                  {project.status.replace('_', ' ')}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-muted text-muted-foreground font-mono text-xs border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="flex items-center gap-2 px-3 py-2 bg-foreground text-background font-mono text-sm border border-foreground hover:bg-background hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                  CODE
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-2 px-3 py-2 bg-accent text-accent-foreground font-mono text-sm border border-accent hover:bg-background hover:text-accent transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  DEMO
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* More projects button */}
        <div className="text-center mt-12">
          <button className="pixel-button bg-secondary text-secondary-foreground">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
}
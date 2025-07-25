import { ExternalLink, Github, Shield, Camera, Car, Gamepad2, Leaf, Truck } from "lucide-react";

const projects = [
  {
    title: "Password Vault",
    description: "Secure password management system using AES-256 encryption with PBKDF2-HMAC. Features intuitive GUI with Tkinter, robust SQLite database schema, and encrypted backup functionality.",
    tech: ["Python", "AES-256", "PBKDF2", "SQLite", "Tkinter"],
    icon: Shield,
    github: "https://github.com/Almamoe/PasswordVault_Demo",
    demo: "#",
    status: "COMPLETED"
  },
  {
    title: "Granny Game",
    description: "Interactive gaming experience with engaging gameplay mechanics. Built with modern web technologies for an immersive user experience.",
    tech: ["JavaScript", "HTML", "CSS", "Game Development"],
    icon: Gamepad2,
    github: "https://github.com/AlexandraLHeureuxECE/final-project-rambo-group",
    demo: "#",
    status: "COMPLETED"
  },
  {
    title: "Photographic Translator",
    description: "OCR-powered translator for visually impaired users using Tesseract and Raspberry Pi. Real-time text-to-speech conversion with custom camera stands for optimal OCR performance.",
    tech: ["Python", "Node.js", "OCR", "Raspberry Pi", "Onshape"],
    icon: Camera,
    github: null,
    demo: null,
    status: "DEPLOYED"
  },
  {
    title: "Carbon eMission",
    description: "Carbon footprint tracking application with personalized insights and competitive leaderboard. Features real-time calculations, AI-powered recommendations, and gamification to encourage eco-friendly behavior.",
    tech: ["React", "Express.js", "PostgreSQL", "OpenAI API", "JWT"],
    icon: Leaf,
    github: "https://github.com/Almamoe/Carbon-eMission",
    demo: "#",
    status: "COMPLETED"
  },
  {
    title: "FleetCheck London Parks",
    description: "Full-stack vehicle inspection management system with driver workflow automation and supervisor oversight. Features real-time notifications, digital signatures, PDF generation, and offline functionality with mobile-first design.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Zod"],
    icon: Truck,
    github: "https://github.com/Almamoe/fleetcheck-london-parks",
    demo: "#",
    status: "COMPLETED"
  }
];

const statusColors = {
  DEPLOYED: "text-accent bg-accent/20",
  ACTIVE: "text-primary bg-primary/20",
  COMPLETED: "text-retro-orange bg-retro-orange/20",
  IN_PROGRESS: "text-muted-foreground bg-muted"
};

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-background to-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-mono">
          <span className="terminal-text">&gt;</span> PROJECTS
        </h2>
        
        <p className="text-center text-muted-foreground font-mono mb-12 text-lg">
          Featured projects spanning AI, security, and full-stack development
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="pixel-card p-6 hover:shadow-lg transition-all duration-300 group hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-4">
                <project.icon className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-bold font-mono">{project.title}</h3>
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
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-foreground text-background font-mono text-sm border border-foreground hover:bg-background hover:text-foreground transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    CODE
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Current work */}
        <div className="mt-12 pixel-card p-8 bg-card">
          <h3 className="text-2xl font-bold font-mono mb-4 terminal-text">Current Work</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold font-mono mb-2">Software Developer</h4>
              <p className="text-muted-foreground text-sm mb-2">Ameerz-Agent Proxy | Sept 2024 - March 2025</p>
              <p className="text-sm leading-relaxed">
                Developed interactive driving course platform, implementing security features, 
                and conducting comprehensive assessments for enhanced system reliability.
              </p>
            </div>
            <div>
              <h4 className="font-bold font-mono mb-2">Web Design Coop</h4>
              <p className="text-muted-foreground text-sm mb-2">Campus Creative | Oct 2022 - Jan 2023</p>
              <p className="text-sm leading-relaxed">
                Managed WordPress websites, implemented SEO optimizations, and collaborated on 
                multimedia presentations resulting in 70% traffic increase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
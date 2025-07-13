import { Code, Database, Globe, Server, Smartphone, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "TypeScript", "Vue.js", "Tailwind CSS", "Next.js"],
    color: "text-primary"
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
    color: "text-accent"
  },
  {
    title: "DevOps",
    icon: Terminal,
    skills: ["Docker", "AWS", "Git", "CI/CD", "Linux"],
    color: "text-retro-orange"
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "Flutter", "iOS", "Android"],
    color: "text-primary"
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "SQLite"],
    color: "text-accent"
  },
  {
    title: "Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Python", "Go", "Rust"],
    color: "text-retro-orange"
  }
];

export function Skills() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-mono">
          <span className="terminal-text">&gt;</span> SKILLS
        </h2>
        
        <p className="text-center text-muted-foreground font-mono mb-12 text-lg">
          My technical arsenal of modern development tools
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="pixel-card p-6 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <category.icon className={`h-8 w-8 ${category.color} mr-3`} />
                <h3 className="text-xl font-bold font-mono">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between p-2 bg-muted rounded-sm border border-border group-hover:bg-background transition-colors"
                  >
                    <span className="font-mono text-sm">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 ${
                            i < 3 ? 'bg-accent' : 'bg-border'
                          } border border-border`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Experience bar */}
        <div className="mt-16 pixel-card p-6 bg-card">
          <h3 className="text-2xl font-bold font-mono mb-6 text-center">
            <span className="terminal-text">EXPERIENCE_LEVEL</span>
          </h3>
          
          <div className="space-y-4">
            {[
              { lang: "JavaScript/TypeScript", level: 95 },
              { lang: "React/Next.js", level: 90 },
              { lang: "Node.js/Python", level: 85 },
              { lang: "Database Design", level: 80 },
              { lang: "DevOps/Cloud", level: 75 }
            ].map((item) => (
              <div key={item.lang} className="space-y-2">
                <div className="flex justify-between font-mono text-sm">
                  <span>{item.lang}</span>
                  <span className="terminal-text">{item.level}%</span>
                </div>
                <div className="w-full bg-border h-3 border border-border">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
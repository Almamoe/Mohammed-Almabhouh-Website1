import { Code, Database, Globe, Server, Smartphone, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Java", "Python", "JavaScript", "HTML/CSS", "C#"],
    color: "text-primary"
  },
  {
    title: "Frameworks",
    icon: Server,
    skills: ["React", "Node.js", "PyTorch", "OpenCV", "DeepSORT"],
    color: "text-accent"
  },
  {
    title: "ML & AI",
    icon: Terminal,
    skills: ["Computer Vision", "OCR", "Deep Learning", "TensorFlow", "YOLO"],
    color: "text-retro-orange"
  },
  {
    title: "Web Dev",
    icon: Globe,
    skills: ["WordPress", "SEO", "Responsive Design", "User Experience"],
    color: "text-primary"
  },
  {
    title: "Tools & OS",
    icon: Database,
    skills: ["Git", "Linux", "SQLite", "Raspberry Pi", "3D Printing"],
    color: "text-accent"
  },
  {
    title: "Security",
    icon: Smartphone,
    skills: ["Encryption", "AES-256", "PBKDF2", "Secure Vaults", "Authentication"],
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
              { lang: "Python/Java", level: 85 },
              { lang: "JavaScript/React", level: 80 },
              { lang: "Computer Vision/OCR", level: 75 },
              { lang: "Machine Learning", level: 70 },
              { lang: "Web Development", level: 85 }
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
import { Coffee, Code, Heart, Zap } from "lucide-react";

const stats = [
  { label: "Years in Program", value: "2+", icon: Code },
  { label: "Projects Built", value: "10+", icon: Zap },
  { label: "Cups of Coffee", value: "∞", icon: Coffee },
  { label: "Lines of Code", value: "50K+", icon: Heart }
];

export function About() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-mono">
          <span className="terminal-text">&gt;</span> ABOUT_ME
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="pixel-card p-8 bg-card">
              <h3 className="text-2xl font-bold font-mono mb-6 terminal-text">
                #!/bin/bash
              </h3>
              
              <div className="space-y-4 font-mono text-sm">
                <div className="text-accent">
                  <span className="text-muted-foreground"># About Mohammed Almabhouh</span>
                </div>
                
                <div>
                  <span className="text-primary">name</span>
                  <span className="text-muted-foreground">=</span>
                  <span className="text-accent">"Mohammed Almabhouh"</span>
                </div>
                
                <div>
                  <span className="text-primary">role</span>
                  <span className="text-muted-foreground">=</span>
                  <span className="text-accent">"Software Engineering Student"</span>
                </div>
                
                <div>
                  <span className="text-primary">location</span>
                  <span className="text-muted-foreground">=</span>
                  <span className="text-accent">"London, Ontario"</span>
                </div>
                
                <div>
                  <span className="text-primary">education</span>
                  <span className="text-muted-foreground">=</span>
                  <span className="text-accent">"B.E.Sc Software Engineering - UWO"</span>
                </div>
                
                <div>
                  <span className="text-primary">graduation</span>
                  <span className="text-muted-foreground">=</span>
                  <span className="text-accent">"May 2027"</span>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <span className="text-muted-foreground"># Current Focus</span>
                </div>
                
                <div>
                  <span className="text-primary">interests</span>
                  <span className="text-muted-foreground">=</span>
                  <span className="text-accent">(</span>
                </div>
                
                <div className="ml-4 space-y-1">
                  <div className="text-accent">"Machine Learning & Computer Vision"</div>
                  <div className="text-accent">"Web Development & User Experience"</div>
                  <div className="text-accent">"Autonomous Vehicle Systems"</div>
                  <div className="text-accent">"Secure Software Development"</div>
                </div>
                
                <div className="text-accent">)</div>
                
                <div className="pt-4">
                  <span className="text-muted-foreground">echo</span>
                  <span className="text-accent"> "Building intelligent solutions for tomorrow"</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="pixel-card p-6 bg-card">
              <h3 className="text-xl font-bold font-mono mb-4">Current Focus</h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing Software Engineering at University of Western Ontario while working as a Software Developer at Ameerz-Agent Proxy. 
                My passion lies in machine learning, computer vision, and building secure, intelligent applications. 
                I'm particularly interested in autonomous vehicle systems and developing innovative solutions for real-world challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="pixel-card p-4 text-center bg-card group hover:-translate-y-1 transition-transform"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2 group-hover:text-accent transition-colors" />
                  <div className="text-2xl font-bold font-mono text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-mono">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="pixel-card p-6 bg-card">
              <h3 className="text-lg font-bold font-mono mb-3 terminal-text">Fun Facts</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <span className="text-accent mr-2">▶</span>
                  Currently studying at University of Western Ontario
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">▶</span>
                  Working as Software Developer at Ameerz-Agent Proxy
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">▶</span>
                  Passionate about autonomous vehicle systems
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">▶</span>
                  Love building OCR and computer vision applications
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
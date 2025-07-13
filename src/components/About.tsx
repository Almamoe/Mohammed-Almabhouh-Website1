import { Coffee, Code, Heart, Zap } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "5+", icon: Code },
  { label: "Projects Completed", value: "50+", icon: Zap },
  { label: "Cups of Coffee", value: "∞", icon: Coffee },
  { label: "Lines of Code", value: "100K+", icon: Heart }
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
                  <span className="text-muted-foreground"># About Alex Chen</span>
                </div>
                
                <div>
                  <span className="text-primary">name</span>
                  <span className="text-muted-foreground">=</span>
                  <span className="text-accent">"Alex Chen"</span>
                </div>
                
                <div>
                  <span className="text-primary">role</span>
                  <span className="text-muted-foreground">=</span>
                  <span className="text-accent">"Full-stack Developer"</span>
                </div>
                
                <div>
                  <span className="text-primary">location</span>
                  <span className="text-muted-foreground">=</span>
                  <span className="text-accent">"San Francisco, CA"</span>
                </div>
                
                <div>
                  <span className="text-primary">education</span>
                  <span className="text-muted-foreground">=</span>
                  <span className="text-accent">"BS Computer Science"</span>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <span className="text-muted-foreground"># Passionate about</span>
                </div>
                
                <div>
                  <span className="text-primary">interests</span>
                  <span className="text-muted-foreground">=</span>
                  <span className="text-accent">(</span>
                </div>
                
                <div className="ml-4 space-y-1">
                  <div className="text-accent">"Clean Code Architecture"</div>
                  <div className="text-accent">"Open Source Contributions"</div>
                  <div className="text-accent">"Performance Optimization"</div>
                  <div className="text-accent">"User Experience Design"</div>
                </div>
                
                <div className="text-accent">)</div>
                
                <div className="pt-4">
                  <span className="text-muted-foreground">echo</span>
                  <span className="text-accent"> "Building the future, one commit at a time"</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="pixel-card p-6 bg-card">
              <h3 className="text-xl font-bold font-mono mb-4">Current Focus</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently diving deep into modern web technologies and cloud architecture. 
                My passion lies in creating scalable, user-friendly applications that solve real-world problems. 
                When I'm not coding, you'll find me contributing to open source projects or exploring the latest in AI and machine learning.
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
                  Started coding at age 12 with BASIC
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">▶</span>
                  Contributed to 20+ open source projects
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">▶</span>
                  Speaks 3 programming languages fluently
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">▶</span>
                  Coffee-to-code ratio: 1:1000 lines
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
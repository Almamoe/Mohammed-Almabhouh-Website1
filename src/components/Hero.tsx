import { PixelAvatar } from "./PixelAvatar";
import { ThemeToggle } from "./ThemeToggle";
import { Mail, Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative p-6 bg-gradient-to-br from-background to-muted">
      
      <div className="max-w-4xl w-full text-center">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/19ae7988-e51a-4f09-969f-15de2937ac76.png" 
            alt="Mohammed Almabhouh" 
            className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full object-cover border-4 border-primary shadow-2xl"
          />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-4 glow-text">
          <span className="terminal-text">MOHAMMED</span>
          <br />
          <span className="text-primary">ALMABHOUH</span>
        </h1>
        
        <div className="text-xl md:text-2xl font-mono mb-6 typewriter inline-block">
          SOFTWARE ENGINEER
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="mailto:almamolna664@gmail.com"
            className="p-3 bg-card hover:bg-accent border border-border hover:border-accent transition-all duration-300 hover:scale-110 pixel-card"
            aria-label="Email"
          >
            <Mail className="h-6 w-6 text-foreground hover:text-accent-foreground" />
          </a>
          <a 
            href="https://github.com/Almamoe"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card hover:bg-accent border border-border hover:border-accent transition-all duration-300 hover:scale-110 pixel-card"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6 text-foreground hover:text-accent-foreground" />
          </a>
          <a 
            href="https://www.linkedin.com/in/moe-alma"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card hover:bg-accent border border-border hover:border-accent transition-all duration-300 hover:scale-110 pixel-card"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 text-foreground hover:text-accent-foreground" />
          </a>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground font-mono mb-8 max-w-2xl mx-auto">
          &gt; Software Engineering student at University of Western Ontario
          <br />
          &gt; Specializing in Python, JavaScript, and machine learning applications
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href="https://github.com/Almamoe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="pixel-button bg-primary text-primary-foreground"
          >
            VIEW PROJECTS
          </a>
          <a 
            href="/lovable-uploads/9d88c1c0-af78-4615-a8b9-741b4263eeae.png"
            download="Mohammed_Almabhouh_Resume.png"
            className="pixel-button bg-accent text-accent-foreground"
          >
            DOWNLOAD RESUME
          </a>
        </div>
        
        {/* Decorative terminal prompt */}
        <div className="mt-12 text-left font-mono text-sm bg-card pixel-card p-4 max-w-md mx-auto">
          <div className="text-accent mb-2">mohammed@portfolio:~$ whoami</div>
          <div className="text-muted-foreground">Software Engineering student & developer</div>
          <div className="text-accent mt-2">mohammed@portfolio:~$ ls skills/</div>
          <div className="text-muted-foreground">python java javascript react pytorch opencv ...</div>
          <div className="text-accent mt-2 animate-pulse">mohammed@portfolio:~$ <span className="bg-accent w-2 h-4 inline-block ml-1"></span></div>
        </div>
      </div>
    </section>
  );
}
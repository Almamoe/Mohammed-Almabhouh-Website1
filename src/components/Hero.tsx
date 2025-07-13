import { PixelAvatar } from "./PixelAvatar";
import { ThemeToggle } from "./ThemeToggle";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative p-6 bg-gradient-to-br from-background to-muted">
      {/* Theme toggle in top right */}
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>
      
      <div className="max-w-4xl w-full text-center">
        <PixelAvatar />
        
        <h1 className="text-6xl md:text-8xl font-bold mb-4 glow-text">
          <span className="terminal-text">MOHAMMED</span>
          <br />
          <span className="text-primary">ALMABHOUH</span>
        </h1>
        
        <div className="text-xl md:text-2xl font-mono mb-8 typewriter inline-block">
          SOFTWARE ENGINEER
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground font-mono mb-8 max-w-2xl mx-auto">
          &gt; Software Engineering student at University of Western Ontario
          <br />
          &gt; Specializing in Python, JavaScript, and machine learning applications
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="pixel-button bg-primary text-primary-foreground">
            VIEW PROJECTS
          </button>
          <button className="pixel-button bg-accent text-accent-foreground">
            DOWNLOAD RESUME
          </button>
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
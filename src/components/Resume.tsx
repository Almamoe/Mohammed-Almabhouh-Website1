import { Download, Eye, FileText, Briefcase, GraduationCap, Award } from "lucide-react";

export function Resume() {
  return (
    <section id="resume" className="py-20 px-6 bg-gradient-to-b from-muted to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-mono">
          <span className="terminal-text">&gt;</span> RESUME
        </h2>
        
        <p className="text-center text-muted-foreground font-mono mb-12 text-lg">
          Complete professional background and experience
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resume viewer */}
          <div className="lg:col-span-2">
            <div className="pixel-card p-6 bg-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold font-mono flex items-center">
                  <FileText className="h-5 w-5 text-primary mr-2" />
                  Resume Preview
                </h3>
                <div className="flex gap-2">
                  <button className="pixel-button bg-accent text-accent-foreground p-2">
                    <Eye className="h-4 w-4" />
                  </button>
                  <a
                    href="/lovable-uploads/7a5b4192-b3ab-4681-aebc-a67e8b7b4eea.png"
                    download="Mohammed_Almabhouh_Resume.png"
                    className="pixel-button bg-primary text-primary-foreground p-2"
                  >
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              </div>
              
              {/* Resume image display */}
              <div className="border border-border bg-background p-4 overflow-auto">
                <img
                  src="/lovable-uploads/7a5b4192-b3ab-4681-aebc-a67e8b7b4eea.png"
                  alt="Mohammed Almabhouh Resume"
                  className="w-full max-w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Quick info */}
          <div className="space-y-6">
            <div className="pixel-card p-6 bg-card">
              <h3 className="text-lg font-bold font-mono mb-4 flex items-center">
                <GraduationCap className="h-5 w-5 text-accent mr-2" />
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-mono font-bold text-sm">University of Western Ontario</h4>
                  <p className="text-xs text-muted-foreground">B.E.Sc in Software Engineering</p>
                  <p className="text-xs text-accent">Sept 2023 - May 2027</p>
                </div>
                <div className="text-xs text-muted-foreground">
                  <p><strong>Coursework:</strong> Algorithms, Data Structures, Digital Logic Systems, Software Design</p>
                </div>
              </div>
            </div>
            
            <div className="pixel-card p-6 bg-card">
              <h3 className="text-lg font-bold font-mono mb-4 flex items-center">
                <Briefcase className="h-5 w-5 text-primary mr-2" />
                Experience
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-mono font-bold text-sm">Software Developer</h4>
                  <p className="text-xs text-muted-foreground">Ameerz-Agent Proxy</p>
                  <p className="text-xs text-accent">Sept 2024 - March 2025</p>
                </div>
                <div>
                  <h4 className="font-mono font-bold text-sm">Web Design Coop</h4>
                  <p className="text-xs text-muted-foreground">Campus Creative</p>
                  <p className="text-xs text-accent">Oct 2022 - Jan 2023</p>
                </div>
              </div>
            </div>
            
            <div className="pixel-card p-6 bg-card">
              <h3 className="text-lg font-bold font-mono mb-4 flex items-center">
                <Award className="h-5 w-5 text-retro-orange mr-2" />
                Key Achievements
              </h3>
              <ul className="text-xs space-y-2">
                <li className="flex items-center">
                  <span className="text-accent mr-2">▶</span>
                  Built secure password vault with AES-256 encryption
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">▶</span>
                  Developed OCR translator for accessibility
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">▶</span>
                  Contributed to autonomous vehicle systems
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">▶</span>
                  Achieved 70% website traffic increase
                </li>
              </ul>
            </div>
            
            <div className="pixel-card p-6 bg-card">
              <h3 className="text-lg font-bold font-mono mb-4 terminal-text">Download Options</h3>
              <div className="space-y-3">
                <a
                  href="/lovable-uploads/7a5b4192-b3ab-4681-aebc-a67e8b7b4eea.png"
                  download="Mohammed_Almabhouh_Resume.png"
                  className="pixel-button bg-primary text-primary-foreground w-full flex items-center justify-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  DOWNLOAD RESUME
                </a>
                <p className="text-xs text-muted-foreground text-center">
                  Last updated: Dec 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
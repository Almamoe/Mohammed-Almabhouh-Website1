import { Mail, Github, Linkedin, Twitter, MapPin, Send } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    value: "almamolna664@gmail.com",
    href: "mailto:almamolna664@gmail.com",
    icon: Mail,
    color: "text-accent"
  },
  {
    name: "GitHub",
    value: "github.com/Almamoe",
    href: "https://github.com/Almamoe",
    icon: Github,
    color: "text-foreground"
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/moe-alma",
    href: "https://www.linkedin.com/in/moe-alma",
    icon: Linkedin,
    color: "text-primary"
  },
  {
    name: "Phone",
    value: "226-582-2375",
    href: "tel:+12265822375",
    icon: Twitter,
    color: "text-retro-orange"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-background to-muted">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-mono">
          <span className="terminal-text">&gt;</span> CONTACT
        </h2>
        
        <p className="text-center text-muted-foreground font-mono mb-12 text-lg">
          Let's build something amazing together
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="pixel-card p-8 bg-card">
            <h3 className="text-xl font-bold font-mono mb-6 terminal-text">
              Send_Message()
            </h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-mono mb-2">Name</label>
                <input
                  type="text"
                  className="pixel-input w-full"
                  placeholder="Enter your name..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono mb-2">Email</label>
                <input
                  type="email"
                  className="pixel-input w-full"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono mb-2">Subject</label>
                <input
                  type="text"
                  className="pixel-input w-full"
                  placeholder="Project collaboration..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono mb-2">Message</label>
                <textarea
                  rows={6}
                  className="pixel-input w-full resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>
              
              <button
                type="submit"
                className="pixel-button bg-accent text-accent-foreground w-full flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                SEND MESSAGE
              </button>
            </form>
          </div>
          
          {/* Contact info */}
          <div className="space-y-6">
            <div className="pixel-card p-6 bg-card">
              <h3 className="text-xl font-bold font-mono mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                Location
              </h3>
              <p className="text-muted-foreground font-mono">
                London, Ontario
                <br />
                Available for remote work and on-site opportunities
              </p>
            </div>
            
            <div className="pixel-card p-6 bg-card">
              <h3 className="text-xl font-bold font-mono mb-4">Connect</h3>
              <div className="space-y-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-3 p-3 bg-muted hover:bg-background border border-border transition-colors group"
                  >
                    <link.icon className={`h-5 w-5 ${link.color} group-hover:scale-110 transition-transform`} />
                    <div>
                      <div className="font-mono text-sm font-bold">{link.name}</div>
                      <div className="font-mono text-xs text-muted-foreground">{link.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="pixel-card p-6 bg-card">
              <h3 className="text-xl font-bold font-mono mb-4 terminal-text">
                Status: Available
              </h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                Currently accepting new projects and collaboration opportunities. 
                Typical response time: 24-48 hours.
              </p>
              
              <div className="mt-4 p-3 bg-muted border-l-4 border-accent">
                <p className="text-sm font-mono">
                  <span className="text-accent">▶</span> Open to freelance projects
                  <br />
                  <span className="text-accent">▶</span> Available for full-time roles
                  <br />
                  <span className="text-accent">▶</span> Interested in tech consulting
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-16 text-center font-mono text-sm text-muted-foreground">
          <div className="pixel-card p-4 bg-card inline-block">
            &copy; 2024 Mohammed Almabhouh | Built with ❤️ and lots of ☕
            <br />
            <span className="terminal-text">while(alive) {`{ code(); }`}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
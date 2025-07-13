import { Mail, Github, Linkedin, Twitter, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-mono mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="pixel-input w-full"
                  placeholder="Enter your name..."
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pixel-input w-full"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="pixel-input w-full"
                  placeholder="Project collaboration..."
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono mb-2">Message</label>
                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="pixel-input w-full resize-none"
                  placeholder="Tell me about your project or idea..."
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="pixel-button bg-accent text-accent-foreground w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
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
                     target={link.href.startsWith('http') ? "_blank" : undefined}
                     rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
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
            &copy; 2025 Mohammed Almabhouh
          </div>
        </div>
      </div>
    </section>
  );
}
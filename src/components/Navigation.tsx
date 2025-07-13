import {
  User,
  Code,
  Briefcase,
  FileText,
  Mail,
  Home,
  SunMoon,
} from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';
import { ThemeToggle } from './ThemeToggle';

const navigationData = [
  {
    title: 'Home',
    icon: <Home className='h-full w-full text-muted-foreground' />,
    href: '#hero',
  },
  {
    title: 'About',
    icon: <User className='h-full w-full text-muted-foreground' />,
    href: '#about',
  },
  {
    title: 'Skills',
    icon: <Code className='h-full w-full text-muted-foreground' />,
    href: '#skills',
  },
  {
    title: 'Projects',
    icon: <Briefcase className='h-full w-full text-muted-foreground' />,
    href: '#projects',
  },
  {
    title: 'Resume',
    icon: <FileText className='h-full w-full text-muted-foreground' />,
    href: '#resume',
  },
  {
    title: 'Contact',
    icon: <Mail className='h-full w-full text-muted-foreground' />,
    href: '#contact',
  },
];

export function Navigation() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='fixed left-4 top-1/2 -translate-y-1/2 z-50'>
      <Dock direction="middle" className='flex-col h-auto bg-background/80 backdrop-blur-sm border border-border pixel-border'>
        {navigationData.map((item, idx) => (
          <DockItem
            key={idx}
            className='aspect-square w-12 h-12 rounded-lg bg-card hover:bg-muted transition-colors cursor-pointer pixel-card'
            onClick={() => scrollToSection(item.href)}
          >
            <DockLabel className="text-xs font-mono">{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
        <DockItem className='aspect-square w-12 h-12 rounded-lg bg-card hover:bg-muted transition-colors pixel-card'>
          <DockLabel className="text-xs font-mono">Theme</DockLabel>
          <DockIcon>
            <ThemeToggle />
          </DockIcon>
        </DockItem>
      </Dock>
    </div>
  );
}
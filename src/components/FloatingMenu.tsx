import { useState } from 'react';
import { Menu, X, Home, Users, Briefcase, Mail, Settings } from 'lucide-react';

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Início', href: '#home' },
    { icon: Users, label: 'Sobre', href: '#about' },
    { icon: Briefcase, label: 'Serviços', href: '#services' },
    { icon: Mail, label: 'Contato', href: '#contact' },
    { icon: Settings, label: 'Soluções', href: '#solutions' }
  ];

  const handleItemClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div className="floating-menu">
      <div 
        className="menu-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="w-5 h-5 text-foreground" />
        ) : (
          <Menu className="w-5 h-5 text-foreground" />
        )}
      </div>
      
      <div className={`menu-items ${isOpen ? 'open' : ''}`}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="menu-item"
            onClick={() => handleItemClick(item.href)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center space-x-3">
              <item.icon className="w-4 h-4" />
              <span className="font-medium">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
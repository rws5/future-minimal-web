import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: Facebook,
    href: "https://www.facebook.com/planetsolutionnatal",
    label: "Facebook"
  }, {
    icon: Instagram,
    href: "https://www.instagram.com/planetsolutions",
    label: "Instagram"
  }, {
    icon: MessageCircle,
    href: "https://wa.me/5584999212121",
    label: "WhatsApp"
  }];
  const quickLinks = [{
    label: "Início",
    href: "#home"
  }, {
    label: "Sobre",
    href: "#about"
  }, {
    label: "Serviços",
    href: "#services"
  }, {
    label: "Soluções",
    href: "#solutions"
  }, {
    label: "Contato",
    href: "#contact"
  }];
  return <footer className="bg-card/50 border-t border-border/30">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                {/* Logo Symbol */}
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 border-2 border-muted-foreground/30 rounded-full"></div>
                  <div className="absolute top-0.5 left-0.5 w-3 h-3 border-2 border-muted-foreground/50 rounded-full border-r-transparent border-b-transparent rotate-45"></div>
                  <div className="absolute top-1 left-1 w-5 h-5 border-2 border-muted-foreground/70 rounded-full border-r-transparent border-b-transparent rotate-12"></div>
                  <div className="absolute top-0.5 right-0.5 w-1.5 h-5 bg-primary rounded-full transform rotate-12"></div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-lg font-orbitron font-bold text-foreground">planet</span>
                  <span className="text-xs font-exo font-light text-muted-foreground tracking-[0.15em] uppercase">
                    solutions
                  </span>
                </div>
              </div>
              
              <p className="text-muted-foreground font-exo leading-relaxed mb-6 max-w-md">
                Transformando ideias em soluções tecnológicas inovadoras. 
                Conectamos o presente ao futuro através da tecnologia.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-secondary/20 hover:bg-primary/20 border border-border/30 hover:border-primary/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group" aria-label={social.label}>
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>)}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-orbitron font-semibold text-foreground mb-6">
                Links Rápidos
              </h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => <a key={index} href={link.href} className="block text-muted-foreground hover:text-primary font-exo transition-colors">
                    {link.label}
                  </a>)}
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-orbitron font-semibold text-foreground mb-6">
                Contato
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground font-exo">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">ricardo.wagner@planetsolution.net</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground font-exo">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">+55 (84) 99921-2121</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground font-exo">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">Natal, RN - Brasil</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-border/30 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-muted-foreground font-exo text-sm text-center md:text-left">
                © {currentYear} Planet Solutions. Todos os direitos reservados.
              </p>
              
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary font-exo transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary font-exo transition-colors">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}
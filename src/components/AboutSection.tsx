import { Code, Smartphone, Globe, Shield } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Soluções em software sob medida para sua empresa"
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description: "Aplicativos nativos e multiplataforma"
    },
    {
      icon: Globe,
      title: "Web",
      description: "Sites e sistemas web responsivos e modernos"
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Proteção e confiabilidade em todas as soluções"
    }
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 slide-in-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold mb-6 glow-text">
              Sobre a Planet Solutions
            </h2>
            <p className="text-lg text-muted-foreground font-exo max-w-3xl mx-auto leading-relaxed">
              Somos uma empresa de tecnologia especializada em desenvolver soluções 
              inovadoras que transformam a forma como as empresas operam no mundo digital.
            </p>
          </div>
          
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="slide-in-left space-y-6">
              <h3 className="text-2xl md:text-3xl font-orbitron font-semibold text-foreground">
                Inovação & Excelência
              </h3>
              <div className="space-y-4 text-muted-foreground font-exo">
                <p>
                  Com anos de experiência no mercado de tecnologia, a Planet Solutions 
                  se destaca pela qualidade e inovação em cada projeto desenvolvido.
                </p>
                <p>
                  Nossa missão é conectar empresas ao futuro através de soluções 
                  tecnológicas que geram resultados reais e impacto positivo nos negócios.
                </p>
                <p>
                  Utilizamos as mais modernas tecnologias e metodologias ágeis para 
                  entregar produtos de alta qualidade dentro do prazo estabelecido.
                </p>
              </div>
            </div>
            
            {/* Right Content - Stats */}
            <div className="slide-in-right grid grid-cols-2 gap-6">
              <div className="card-gradient p-6 rounded-2xl border border-border/30 text-center">
                <div className="text-3xl font-orbitron font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground font-exo">Projetos Entregues</div>
              </div>
              <div className="card-gradient p-6 rounded-2xl border border-border/30 text-center">
                <div className="text-3xl font-orbitron font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground font-exo">Clientes Satisfeitos</div>
              </div>
              <div className="card-gradient p-6 rounded-2xl border border-border/30 text-center">
                <div className="text-3xl font-orbitron font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground font-exo">Anos de Experiência</div>
              </div>
              <div className="card-gradient p-6 rounded-2xl border border-border/30 text-center">
                <div className="text-3xl font-orbitron font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground font-exo">Suporte Disponível</div>
              </div>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="fade-in card-gradient p-6 rounded-2xl border border-border/30 text-center hover:border-primary/30 transition-all duration-300 hover:shadow-glow group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-orbitron font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground font-exo">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
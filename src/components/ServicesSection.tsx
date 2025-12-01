import { Monitor, Smartphone, Cloud, Database, Cog, Zap } from 'lucide-react';
export default function ServicesSection() {
  const services = [{
    icon: Monitor,
    title: "Automação Residencial",
    description: "Criação de soluções customizadas para sua residencia, tenha todo o conforto na palma da sua mão.",
    features: ["React & Next.js", "Node.js", "APIs RESTful", "SEO Otimizado"]
  }, {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Apps nativos e híbridos para iOS e Android com design intuitivo.",
    features: ["React Native", "Flutter", "iOS Nativo", "Android Nativo"]
  }, {
    icon: Cloud,
    title: "Soluções Cloud",
    description: "Infraestrutura em nuvem escalável e segura para seu negócio.",
    features: ["AWS", "Google Cloud", "Azure", "DevOps"]
  }, {
    icon: Database,
    title: "Banco de Dados",
    description: "Arquitetura e otimização de bancos de dados para alta performance.",
    features: ["PostgreSQL", "MongoDB", "Redis", "Data Analytics"]
  }, {
    icon: Cog,
    title: "Automação",
    description: "Automatização de processos e integração de sistemas empresariais.",
    features: ["RPA", "Integrações", "Workflows", "APIs"]
  }, {
    icon: Zap,
    title: "Consultoria Tech",
    description: "Consultoria especializada em transformação digital e inovação.",
    features: ["Arquitetura", "Code Review", "Performance", "Segurança"]
  }];
  return <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 slide-in-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold mb-6 glow-text">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground font-exo max-w-3xl mx-auto leading-relaxed">Oferecemos soluções completas em tecnologia, desde o automação residencial a câmeras de segurança até a instalação e manutenção de sistemas.</p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <div key={index} className="fade-in card-gradient p-8 rounded-2xl border border-border/30 hover:border-primary/50 transition-all duration-500 hover:shadow-glow group" style={{
            animationDelay: `${index * 0.15}s`
          }}>
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-orbitron font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground font-exo mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground/80 font-exo">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </div>)}
                </div>
                
                {/* CTA */}
                <div className="mt-8">
                  <button className="w-full py-3 border border-border/50 hover:border-primary/50 text-foreground font-exo rounded-xl transition-all duration-300 hover:bg-accent/20 hover:shadow-glow/50">
                    Saiba Mais
                  </button>
                </div>
              </div>)}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16 fade-in">
            <div className="card-gradient p-8 rounded-2xl border border-border/30 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-foreground mb-4">
                Pronto para Inovar?
              </h3>
              <p className="text-muted-foreground font-exo mb-8 leading-relaxed">
                Entre em contato conosco e descubra como podemos transformar suas ideias 
                em soluções tecnológicas de impacto.
              </p>
              <a 
                href="https://wa.me/5584999212121" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-primary hover:bg-primary-glow text-primary-foreground font-orbitron font-semibold rounded-full glow-border transition-all duration-300 hover:scale-105"
              >
                Iniciar Projeto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
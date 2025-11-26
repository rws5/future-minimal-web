import { Building2, Home, Server, GraduationCap, Truck, Users } from 'lucide-react';

export default function SolutionsSection() {
  const solutions = [
    {
      icon: Building2,
      title: "Empresarial",
      description: "CFTVs, sistemas de controles de acesso completos",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Home,
      title: "Residencial",
      description: "Automação Residencial, Cortinas de Rolo, Fechaduras Inteligente",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Server,
      title: "TI",
      description: "Soluções em Fibra Optica, Cabeamento Estruturado e Montagem de Estruturas",
      color: "from-red-500/20 to-pink-500/20"
    },
    {
      icon: GraduationCap,
      title: "Condomínios",
      description: "Plataformas de ensino e gestão educacional",
      color: "from-purple-500/20 to-violet-500/20"
    },
    {
      icon: Truck,
      title: "Logística",
      description: "Sistemas de rastreamento e gestão de frotas",
      color: "from-orange-500/20 to-yellow-500/20"
    },
    {
      icon: Users,
      title: "Social",
      description: "Redes sociais e plataformas colaborativas",
      color: "from-indigo-500/20 to-blue-500/20"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 slide-in-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold mb-6 glow-text">
              Soluções por Segmento
            </h2>
            <p className="text-lg text-muted-foreground font-exo max-w-3xl mx-auto leading-relaxed">
              Desenvolvemos soluções especializadas para diferentes setores, 
              atendendo às necessidades específicas de cada mercado.
            </p>
          </div>
          
          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="fade-in group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-gradient p-8 rounded-2xl border border-border/30 hover:border-primary/50 transition-all duration-500 hover:shadow-glow relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <solution.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-orbitron font-semibold text-foreground mb-4">
                      {solution.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-exo leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Process Section */}
          <div className="slide-in-right">
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-center text-foreground mb-12">
              Nosso Processo de Desenvolvimento
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Análise", description: "Entendemos suas necessidades e objetivos" },
                { step: "02", title: "Planejamento", description: "Criamos estratégia e arquitetura da solução" },
                { step: "03", title: "Desenvolvimento", description: "Codificação e testes contínuos" },
                { step: "04", title: "Entrega", description: "Deploy e acompanhamento pós-lançamento" }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary/30">
                    <span className="text-lg font-orbitron font-bold text-primary">{phase.step}</span>
                  </div>
                  <h4 className="text-lg font-orbitron font-semibold text-foreground mb-2">
                    {phase.title}
                  </h4>
                  <p className="text-sm text-muted-foreground font-exo">
                    {phase.description}
                  </p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform -translate-y-1/2 z-[-1]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
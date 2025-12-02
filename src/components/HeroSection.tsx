import TypewriterText from './TypewriterText';
export default function HeroSection() {
  return <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 3}s`
      }} />)}
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Typewriter Text */}
          <TypewriterText text="BEM VINDO AO FUTURO" className="text-4xl md:text-6xl lg:text-7xl glow-text" delay={500} speed={150} />
          
          {/* Subtitle */}
          <div className="fade-in opacity-0 animation-delay-3000">
            <p className="text-lg md:text-xl text-muted-foreground font-exo max-w-2xl mx-auto leading-relaxed">Transformando ideias em soluções tecnológicas inovadoras de automação e segurança. Conectamos o presente ao futuro através da tecnologia.</p>
          </div>
          
          {/* CTA Buttons */}
          <div className="fade-in opacity-0 animation-delay-4000 flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button onClick={() => document.querySelector('#solutions')?.scrollIntoView({
            behavior: 'smooth'
          })} className="px-8 py-4 bg-primary hover:bg-primary-glow text-primary-foreground font-orbitron font-semibold rounded-full glow-border transition-all duration-300 hover:scale-105">
              Descobrir Soluções
            </button>
            <button onClick={() => document.querySelector('#services')?.scrollIntoView({
            behavior: 'smooth'
          })} className="px-8 py-4 border border-border hover:border-primary/50 text-foreground font-exo rounded-full transition-all duration-300 hover:bg-accent/20">
              Nossos Serviços
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
}
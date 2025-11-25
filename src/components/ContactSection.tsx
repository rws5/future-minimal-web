import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contato@planetsolutions.com.br",
      href: "mailto:contato@planetsolutions.com.br"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (84) 99921-2121",
      href: "tel:+5584999212121"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Natal, RN - Brasil",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 slide-in-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold mb-6 glow-text">
              Entre em Contato
            </h2>
            <p className="text-lg text-muted-foreground font-exo max-w-3xl mx-auto leading-relaxed">
              Pronto para transformar sua ideia em realidade? Entre em contato conosco 
              e vamos discutir como podemos ajudar seu projeto a decolar.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="slide-in-left">
              <div className="card-gradient p-8 rounded-2xl border border-border/30">
                <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-6">
                  Envie sua Mensagem
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-exo text-muted-foreground mb-2">
                        Nome *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-border/50 rounded-xl text-foreground font-exo focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-exo text-muted-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-border/50 rounded-xl text-foreground font-exo focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-exo text-muted-foreground mb-2">
                      Assunto *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border/50 rounded-xl text-foreground font-exo focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="desenvolvimento">Desenvolvimento de Software</option>
                      <option value="consultoria">Consultoria em TI</option>
                      <option value="mobile">Aplicativo Mobile</option>
                      <option value="web">Desenvolvimento Web</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-exo text-muted-foreground mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-input border border-border/50 rounded-xl text-foreground font-exo focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      placeholder="Conte-nos sobre seu projeto..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-primary hover:bg-primary-glow text-primary-foreground font-orbitron font-semibold rounded-xl glow-border transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensagem</span>
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="slide-in-right space-y-8">
              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="card-gradient p-6 rounded-2xl border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-glow block group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-orbitron font-semibold text-foreground">
                          {info.title}
                        </h4>
                        <p className="text-muted-foreground font-exo">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              
              {/* Additional Info */}
              <div className="card-gradient p-8 rounded-2xl border border-border/30">
                <h4 className="text-xl font-orbitron font-semibold text-foreground mb-4">
                  Horário de Atendimento
                </h4>
                <div className="space-y-2 text-muted-foreground font-exo">
                  <div className="flex justify-between">
                    <span>Segunda - Sexta:</span>
                    <span>9h - 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span>9h - 12h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Fechado</span>
                  </div>
                </div>
              </div>
              
              <div className="card-gradient p-8 rounded-2xl border border-border/30">
                <h4 className="text-xl font-orbitron font-semibold text-foreground mb-4">
                  Resposta Rápida
                </h4>
                <p className="text-muted-foreground font-exo mb-4">
                  Respondemos em até 24 horas úteis. Para projetos urgentes, 
                  entre em contato diretamente pelo WhatsApp.
                </p>
                <a 
                  href="https://wa.me/5584999212121" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 border border-border/50 hover:border-primary/50 text-foreground font-exo rounded-xl transition-all duration-300 hover:bg-accent/20 flex items-center justify-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
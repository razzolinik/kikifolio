import { Code, Settings, Shield, TestTube, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies. From landing pages to complex platforms.',
    features: ['Responsive Design', 'Modern Frameworks', 'Clean Code'],
  },
  {
    icon: Settings,
    title: 'Maintenance & Deployment',
    description: 'Keep your applications running smoothly with updates, bug fixes, and reliable deployment solutions.',
    features: ['Performance Optimization', 'Bug Fixes', 'CI/CD Setup'],
  },
  {
    icon: Shield,
    title: 'Security Reviews',
    description: 'Comprehensive security assessments to identify vulnerabilities and protect your digital assets.',
    features: ['Vulnerability Assessment', 'Code Review', 'Best Practices'],
  },
  {
    icon: TestTube,
    title: 'QA & Testing',
    description: 'Thorough testing services to ensure your applications work flawlessly across all scenarios.',
    features: ['Manual Testing', 'Test Documentation', 'Bug Reports'],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-pink-light/20 blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-64 h-64 rounded-full bg-accent/30 blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-pink text-sm tracking-widest uppercase font-medium">Freelance</span>
            <h2 className="text-4xl md:text-5xl font-display font-light mt-2">
              Services <span className="italic">I Offer</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Professional services tailored to bring your digital projects to life.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
              <div className="glass-panel rounded-2xl p-8 h-full group hover:-translate-y-2 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-pink/20 flex items-center justify-center mb-6 group-hover:glow-soft transition-all">
                  <service.icon className="w-7 h-7 text-pink" />
                </div>

                <h3 className="text-2xl font-display font-medium mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-pink font-medium hover:gap-3 transition-all"
                >
                  Get in touch
                  <ArrowRight size={18} />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

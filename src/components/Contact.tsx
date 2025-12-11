import { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, Download, Phone } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import ScrollReveal from './ScrollReveal';
import CV from '@/assets/cv_khiaraRazzolini_eng.pdf';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

    const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'cv_khiaraRazzolini_eng.pdf';
    link.click();
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'khiararazzolini@gmail.com',
      href: 'mailto:khiararazzolini@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'razzolinik',
      href: 'https://www.linkedin.com/in/razzolinik/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@razzolinik',
      href: 'https://github.com/razzolinik',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Santiago del Estero, Argentina',
      href: '#',
    },
    {
      icon: Phone,
      label: 'Number',
      value: '+5493855102923',
      href: 'http://wa.me/5493855102923',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-pink/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-pink-light/10 blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-pink text-sm tracking-widest uppercase font-medium">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-display font-light mt-2">
              Let's <span className="italic">Connect</span>
            </h2>
            <p className="text-secondary-foreground/70 mt-4 max-w-xl mx-auto">
              Have a project in mind or just want to say hi? I'd love to hear from you!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <ScrollReveal direction="left">
            <div className="glass-panel-dark rounded-2xl p-8">
              <h3 className="text-2xl font-display font-medium mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary-foreground/5 border border-border/20 focus:outline-none focus:border-pink focus:ring-1 focus:ring-pink/30 transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary-foreground/5 border border-border/20 focus:outline-none focus:border-pink focus:ring-1 focus:ring-pink/30 transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-secondary-foreground/5 border border-border/20 focus:outline-none focus:border-pink focus:ring-1 focus:ring-pink/30 transition-all resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-glass bg-pink/20 hover:bg-pink/30 flex items-center justify-center gap-2 group"
                >
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal direction="right">
            <div className="space-y-4">
              {/* Social Links */}
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass-panel-dark rounded-xl p-4 flex items-center gap-4 hover:-translate-x-2 transition-all duration-300 group block"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-pink/20 flex items-center justify-center group-hover:glow-soft transition-all">
                    <link.icon className="w-5 h-5 text-pink" />
                  </div>
                  <div>
                    <span className="text-sm text-secondary-foreground/60">{link.label}</span>
                    <p className="font-medium">{link.value}</p>
                  </div>
                </a>
              ))}

              {/* Download CV */}
              <button
                onClick={handleDownloadCV}
                className="glass-panel-dark rounded-xl p-6 flex items-center gap-4 hover:glow-soft transition-all duration-300 group mt-6 w-full text-left"
              >
                <div className="w-14 h-14 rounded-full bg-pink/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Download className="w-6 h-6 text-pink" />
                </div>
                <div>
                  <span className="text-sm text-secondary-foreground/60">Download</span>
                  <p className="text-xl font-display font-medium">My Resume</p>
                </div>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;

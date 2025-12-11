import { Sparkles, Heart, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink-light/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/40 blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="glass-panel rounded-3xl p-8 animate-float-slow">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-pink-light/50 to-accent/50 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink/20 to-transparent" />
                  <div className="text-center p-8 relative z-10">
                    <div className="text-8xl md:text-9xl font-display italic text-foreground/20">
                      キキ
                    </div>
                    <p className="text-muted-foreground mt-4 text-sm tracking-widest">KIKI</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass-panel rounded-2xl p-4 animate-float-delayed glow-soft">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink animate-pulse-soft" fill="currentColor" />
                  <span className="text-sm font-medium">Available for remote work</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <div className="space-y-8">
            <ScrollReveal direction="right">
              <span className="text-pink text-sm tracking-widest uppercase font-medium">About Me</span>
              <h2 className="text-4xl md:text-5xl font-display font-light mt-2">
                Creative <span className="italic text-pink">developer</span> with a passion for detail
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi, I'm Kiki! A creative student who loves watching my ideas transform into reality through code. 
                I'm detail-oriented and constantly expanding my tech stack, driven by curiosity and a love for 
                building beautiful, functional experiences. Currently looking for my first professional role in web development!
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="glass-panel rounded-xl p-4 text-center hover:glow-soft transition-all duration-300 hover:-translate-y-1">
                  <Sparkles className="w-6 h-6 text-pink mx-auto mb-2" />
                  <p className="text-sm font-medium">Detail Oriented</p>
                </div>
                <div className="glass-panel rounded-xl p-4 text-center hover:glow-soft transition-all duration-300 hover:-translate-y-1">
                  <Zap className="w-6 h-6 text-pink mx-auto mb-2" />
                  <p className="text-sm font-medium">Fast Learner</p>
                </div>
                <div className="glass-panel rounded-xl p-4 text-center hover:glow-soft transition-all duration-300 hover:-translate-y-1">
                  <Heart className="w-6 h-6 text-pink mx-auto mb-2" />
                  <p className="text-sm font-medium">Passionate</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={300}>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="skill-badge">Fullstack</span>
                <span className="skill-badge">Frontend</span>
                <span className="skill-badge">Backend</span>
                <span className="skill-badge">Cybersecurity</span>
                <span className="skill-badge">QA Testing</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

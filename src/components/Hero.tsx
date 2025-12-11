import { ArrowDown, Download, Mail } from 'lucide-react';
import heroBg from '@/assets/hero-bg.png';
import kikiLogo from '@/assets/kiki-logo.png';
import CV from '@/assets/cv_khiaraRazzolini_eng.pdf';

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'cv_khiaraRazzolini_eng.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-pink/40 blur-3xl animate-float opacity-60" />
      <div className="absolute bottom-1/4 right-10 w-56 h-56 rounded-full bg-pink-light/50 blur-3xl animate-float-delayed opacity-50" />
      <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-pink/30 blur-2xl animate-float-slow opacity-40" />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-pink-glow/30 blur-xl animate-float opacity-50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
        {/* Logo */}
        <div className="mb-8 animate-scale-in">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-pink/20 blur-2xl rounded-full scale-150 animate-pulse-soft" />
            <img
              src={kikiLogo}
              alt="Kiki"
              className="w-28 h-28 md:w-36 md:h-36 mx-auto relative animate-float drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-light mb-4 animate-fade-in-up text-outline-elegant"
          style={{ animationDelay: '0.2s' }}
        >
          Khiara <span className="text-gradient-pink italic">Razzolini</span>
        </h1>


        {/* Role */}
        <p
          className="text-lg md:text-xl text-muted-foreground font-body tracking-widest uppercase mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Fullstack Web Developer
        </p>

        {/* Tagline */}
        <p
          className="text-xl md:text-2xl font-display italic text-foreground/80 max-w-2xl mx-auto mb-12 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          "Turning imagination into code, one pixel at a time"
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          <a href="#projects" className="btn-primary flex items-center gap-2">
            <span>View Projects</span>
          </a>
          <button onClick={handleDownloadCV} className="btn-outline flex items-center gap-2">
            <Download size={18} />
            <span>Download CV</span>
          </button>
          <a href="#contact" className="btn-glass flex items-center gap-2">
            <Mail size={18} />
            <span>Contact Me</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-pulse-soft"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default Hero;

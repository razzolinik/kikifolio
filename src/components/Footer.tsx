import { Heart } from 'lucide-react';
import kikiLogo from '@/assets/kiki-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img
              src={kikiLogo}
              alt="Kiki"
              className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-display text-xl">Kiki</span>
          </a>

          {/* Copyright */}
            <p className="text-sm text-muted-foreground flex items-center gap-1">
            &copy; {currentYear} <a href="https://github.com/razzolink" className="font-bold hover:text-foreground transition-colors">Khiara Razzolini</a>. Made with
            <Heart className="w-4 h-4 text-pink" fill="currentColor" />
            </p>

          {/* Back to top */}
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

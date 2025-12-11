import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import kikiLogo from '@/assets/kiki-logo.png';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-panel py-3' : 'py-6 bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src={kikiLogo} 
            alt="Kiki Logo" 
            className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link text-sm font-medium tracking-wide">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:block btn-glass text-sm px-6 py-2"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-[72px] glass-panel transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <ul className="flex flex-col items-center justify-center gap-8 py-12">
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              style={{ animationDelay: `${index * 0.1}s` }}
              className={isMobileMenuOpen ? 'animate-fade-in-up' : ''}
            >
              <a
                href={link.href}
                className="text-2xl font-display font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href="#contact"
              className="btn-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
